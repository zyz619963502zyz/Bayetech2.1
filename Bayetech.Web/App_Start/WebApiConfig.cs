using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Bayetech.Core;

namespace Bayetech.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            // Web API 配置和服务
            config.EnableCors(new System.Web.Http.Cors.EnableCorsAttribute("*", "*", "*"));

            // Web API 配置和服务
            // 将 Web API 配置为仅使用不记名令牌身份验证。
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API 路由
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            //config.Filters.Add(new WebApiExceptionFilterAttribute());  filters的调用方式
        }
    }
}
