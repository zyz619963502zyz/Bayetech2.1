using Bayetech.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service
{
    public interface IUploadFileService
    {
        bool AddUploadFile(List<Attachment> attachs);

        void UpdateUploadFile();

        bool DelUploadFile(string goodNo);
    }
}
