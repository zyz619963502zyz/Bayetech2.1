using System.Web.Http.Filters;

namespace Bayetech.Web
{
    /// <summary>
    /// 跨域过滤器
    /// </summary>
    public class SupportCrossDomainAttribute:ActionFilterAttribute
    { 
        public bool AllowCredentials { get; set; }
        public string Origin { get; set; }
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            var resHeader = actionExecutedContext.Response.Headers;

            if (AllowCredentials)
            {
                resHeader.Add("Access-Control-Allow-Credentials","true");
            }

            resHeader.Add("Access-Control-Allow-Origin", Origin ?? "*");

            base.OnActionExecuted(actionExecutedContext);
        }
    }
}