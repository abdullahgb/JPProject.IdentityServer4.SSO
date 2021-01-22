using System.IO;
using System.Threading.Tasks;

namespace Bk.Application.Managers
{
    public interface IBlobStorageManager
    {
        Task<string> UploadAndGetFile(string fileName, string filePath, Stream stream, bool newGuid = true);
    }
}
