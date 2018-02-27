using Bayetech.Core.Entity;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Web;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class UploadController : ApiController
    {
        IUploadFileService upload = new UploadFileService();

        [HttpPost]
        [SupportCrossDomain]
        public string AddUploadFile()
        {
            HttpFileCollection files = HttpContext.Current.Request.Files;
            foreach (string key in files.AllKeys)
            {
                HttpPostedFile file = files[key];
                List<Attachment> attachs = new List<Attachment>();
                if (!string.IsNullOrEmpty(file.FileName) && file.ContentLength > 0) {
                    Attachment attach = new Attachment();
                    attach.GoodNo = "";
                    attach.PicId  = Core.Common.CreatGoodNo("pic");
                    attach.PicName = file.FileName;
                    attach.PicPath = HttpContext.Current.Server.MapPath("~/ceshitupian/");
                    attachs.Add(attach);
                    file.SaveAs(attach.PicPath + attach.PicId);
                }

                //插入到数据库

            }

            //保存参数到数据库

            return "OK";
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
