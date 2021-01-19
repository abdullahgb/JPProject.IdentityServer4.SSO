using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bk.Application.Managers
{
    public interface IBlobStorageManager
    {
        Task<string> UploadAndGetFile(string fileName, string filePath, Stream stream, bool newGuid = true);
    }
}
