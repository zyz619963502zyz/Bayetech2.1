using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class UploadController : ApiController
    {
        IUploadFileService upload = new UploadFileService();

        [HttpPost]
        public string AddUploadFile(JObject Json)
        {
            upload.AddUploadFile();
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
