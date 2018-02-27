using Bayetech.Core.Entity;
using Bayetech.DAL;
using System;
using System.Collections.Generic;

namespace Bayetech.Service
{
    public class UploadFileService : IUploadFileService
    {
        public bool AddUploadFile(List<Attachment> attachs)
        {
            using (var db = new RepositoryBase().BeginTrans())
            {
               int flag = db.Insert(attachs);
               return true;
            }
        }

        public void DelUploadFile()
        {
            throw new NotImplementedException();
        }

        public void UpdateUploadFile()
        {
            throw new NotImplementedException();
        }
    }
}
