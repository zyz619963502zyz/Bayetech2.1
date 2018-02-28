using Bayetech.Core.Entity;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Transactions;
using System.Web;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class UploadController : ApiController
    {
        IUploadFileService upload = new UploadFileService();

        [HttpPost]
        [SupportCrossDomain]
        public bool AddUploadFile()
        {
            try
            {
                using (TransactionScope scorp = new TransactionScope())
                {
                    HttpFileCollection files = HttpContext.Current.Request.Files;
                    List<Attachment> attachs = new List<Attachment>();
                    foreach (string key in files.AllKeys)
                    {
                        HttpPostedFile file = files[key];
                        if (!string.IsNullOrEmpty(file.FileName) && file.ContentLength > 0)
                        {
                            Attachment attach = new Attachment();
                            attach.GoodNo = "";
                            attach.PicId = Core.Common.CreatGoodNo("pic");
                            attach.PicName = file.FileName;
                            attach.PicPath = HttpContext.Current.Server.MapPath("~/ceshitupian/");
                            attachs.Add(attach);
                            file.SaveAs(attach.PicPath + attach.PicId);
                        }
                    }

                    //保存参数到数据库
                    return upload.AddUploadFile(attachs);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message+"发生了错误!");
            }
        }

        [HttpPost]
        public string UpdateUploadFile(JObject Json)
        {
            upload.UpdateUploadFile();
            return string.Empty;
        }

        [HttpGet]
        public string DelUploadFile(JObject Json)
        {
            upload.DelUploadFile();
            return string.Empty;
        }
    }
}
