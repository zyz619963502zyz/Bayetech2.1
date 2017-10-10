using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System;
using System.Web.Http;

namespace Bayetech.Web
{
    public class QueryController : ApiController
    {
        ILoginSignService service = new LoginSignService();

        [HttpPost]
        public int Start(JObject json)
        {
            try
            {
                return service.CreatAccount(json);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
