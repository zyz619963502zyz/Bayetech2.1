using Bayetech.Core.Entity;
using System.Collections.Generic;

namespace Bayetech.Service
{
    public interface IUploadFileService
    {
        bool AddUploadFile(List<Attachment> attachs);

        void UpdateUploadFile();

        bool DelUploadFile(string goodNo);
    }
}
