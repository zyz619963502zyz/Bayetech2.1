using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System.Web;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class UploadController : ApiController
    {
        IUploadFileService upload = new UploadFileService();

        [HttpPost]
        public string AddUploadFile()
        {
            string name = HttpContext.Current.Request["name"];
            string age = HttpContext.Current.Request["age"];
            string name1 = HttpContext.Current.Request.Params["name"];
            string age1 = HttpContext.Current.Request.Params["age"];
            HttpFileCollection files = HttpContext.Current.Request.Files;
            foreach (string key in files.AllKeys)
            {
                HttpPostedFile file1 = files[key];
                if (string.IsNullOrEmpty(file1.FileName) == false)
                    file1.SaveAs(HttpContext.Current.Server.MapPath("~/App_Data/") + file1.FileName);
            }
            return string.Empty;
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
