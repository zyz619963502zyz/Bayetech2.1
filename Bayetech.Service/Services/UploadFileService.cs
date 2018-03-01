using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.DAL;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;


namespace Bayetech.Service
{
    public class UploadFileService : IUploadFileService
    {
        /// <summary>
        /// 上传附件（图片）
        /// </summary>
        /// <param name="attachs"></param>
        /// <returns></returns>
        public bool AddUploadFile(List<Attachment> attachs)
        {
            using (var db = new RepositoryBase())
            {
                int flag = db.Insert(attachs);
                if (flag>0)
                {
                    return true;
                }
                return false;
            }
        }


        /// <summary>
        /// 删除附件
        /// </summary>
        public bool DelUploadFile(string goodNo)
        {
            using (var db = new RepositoryBase().BeginTrans())
            {
                int flag = 0;
                List<Attachment> attachs = db.FindList<Attachment>(new Pagination(), c => c.GoodNo == "");
                foreach (var item in attachs)
                {
                    item.IsDelete = true;
                    flag = flag + db.Update(item);
                }
                return flag > 0 ? true : false;
            }
        }

        public void UpdateUploadFile()
        {
            throw new NotImplementedException();
        }
    }
}
