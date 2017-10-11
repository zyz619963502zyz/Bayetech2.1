using Bayetech.Service;
using Newtonsoft.Json.Linq;
using Spring.Context;
using Spring.Context.Support;
using System;
using System.Web.Http;

namespace Bayetech.Web
{
    public class QueryController : ApiController
    {
        //创建spring容器上下文
        IApplicationContext ctx = ContextRegistry.GetContext();

        [HttpPost]
        public int Start(JObject json)
        {
            try
            {
                ILoginSignService service = ctx.GetObject("LoginSignService") as ILoginSignService;
                return service.CreatAccount(json);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
