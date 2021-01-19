using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Storage.Blobs.Specialized;
using Bk.Common.StringUtils;
using JPProject.Sso.AspNetIdentity.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace Bk.Application.Managers
{
   public class BlobStorageManager : IBlobStorageManager
    {
        private readonly BlobSettings _settings;
        private readonly BlobContainerClient _containerClient;
        private readonly string _containerUri;
        public BlobStorageManager(IOptions<BlobSettings> options)
        {
            _settings = options.Value;
            if (_settings == null || _settings.ConnectionString.IsNullOrEmpty())
                throw new Exception("Blob Connection string not found");

            var client = new BlobServiceClient(_settings.ConnectionString);
            _containerClient = client.GetBlobContainerClient($"{_settings.QfBlobContainer}");
            _containerClient.CreateIfNotExists(PublicAccessType.BlobContainer);
            _containerUri = _containerClient.Uri.ToString();

        }

        public async Task<string> UploadAndGetFile(string fileName, string filePath, Stream stream, bool newGuid = true)
        {
            stream.Position = 0;
            var name = newGuid ? Guid.NewGuid().ToString() : fileName.Split('.')[0];
            var extension = "." + fileName.Split('.')[fileName.Split('.').Length - 1];
            var pic = $"{filePath}/{name}{extension}";
            fileName = $"{pic}";
            var blobClient = _containerClient.GetBlobClient(fileName);
            var resp = await blobClient.UploadAsync(stream, true);
            return $"{GetContainerUri()}/{fileName}";
        }
        public async Task UploadSnapshots(IFormFileCollection files, string filePath)
        {
            foreach (var file in files)
            {
                var pic = $"{filePath}/{file.FileName}.jpeg";
                var blobClient = _containerClient.GetBlobClient(pic);
                await using var ms = new MemoryStream();

                await using var stream = file.OpenReadStream();
                using var reader = new StreamReader(stream);
                await reader.ReadToEndAsync();
                stream.Position = 0;
                var resp = await blobClient.UploadAsync(stream, true);
                Console.Write(resp);
            }
        }
       
        public string GetContainerUri() => _containerUri;
        public async Task AppendFileText(string fileName, string text)
        {

            var blobAppend = _containerClient.GetAppendBlobClient(fileName);
            await blobAppend.CreateIfNotExistsAsync();
            await using var stream = GenerateStreamFromString(text);
            await blobAppend.AppendBlockAsync(stream);



        }
        public static Stream GenerateStreamFromString(string s)
        {
            var stream = new MemoryStream();
            var writer = new StreamWriter(stream);
            writer.Write(s);
            writer.Flush();
            stream.Position = 0;
            return stream;
        }


        public async Task<bool> IsExists(string path)
        {
            var fileName = $"{_settings.Environment}/{path}";
            await foreach (var blobItem in _containerClient.GetBlobsAsync())
            {
                if (string.Equals(blobItem.Name, fileName, StringComparison.CurrentCultureIgnoreCase)) return true;
            }
            return false;
        }
        public async Task<List<string>> ReadCsv(string path)
        {
            var data = new List<string>();
            var blobClient = _containerClient.GetBlobClient(path);
            if (await blobClient.ExistsAsync())
            {
                var response = await blobClient.DownloadAsync();
                using var streamReader = new StreamReader(response.Value.Content);
                while (!streamReader.EndOfStream)
                {
                    data.Add(await streamReader.ReadLineAsync());
                    // Console.WriteLine(line);
                }
            }

            return data;
        }
        public async Task<bool> Delete(string path)
        {
            //var fileName = $"{_settings.Environment}/{path}";
           
            var resp = await _containerClient.DeleteBlobIfExistsAsync(path);
            return resp.Value;
        }
    }
}
