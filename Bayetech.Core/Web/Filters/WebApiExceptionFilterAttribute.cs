using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace Bayetech.Core
{
    public class WebApiExceptionFilterAttribute: ExceptionFilterAttribute
    {
        /// <summary>
        /// 报错异常处理
        /// </summary>
        /// <param name="actionContext"></param>
        //public override void OnException(HttpActionExecutedContext actionExecutedContext)
        //{
        //    //1.异常日志记录（正式项目里面一般是用log4net记录异常日志）   
        //    Console.WriteLine(DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") + "——" +
        //        actionExecutedContext.Exception.GetType().ToString() + "：" + actionExecutedContext.Exception.Message + "——堆栈信息：" +
        //        actionExecutedContext.Exception.StackTrace);

        //    //2.返回调用方具体的异常信息
        //    if (actionExecutedContext.Exception is NotImplementedException)
        //    {
        //        actionExecutedContext.Response = new HttpResponseMessage(HttpStatusCode.NotImplemented);
        //        //actionExecutedContext.Response.Content = new StringContent("方法不被支持");
        //        //actionExecutedContext.Response.ReasonPhrase = "This Func is Not Supported";
        //    }
        //    else if (actionExecutedContext.Exception is TimeoutException)
        //    {
        //        actionExecutedContext.Response = new HttpResponseMessage(HttpStatusCode.RequestTimeout);
        //    }
        //    //.....这里可以根据项目需要返回到客户端特定的状态码。如果找不到相应的异常，统一返回服务端错误500
        //    else
        //    {
        //        actionExecutedContext.Response = new HttpResponseMessage(HttpStatusCode.InternalServerError);
        //    }

        //    base.OnException(actionExecutedContext);
        //}
    }
}
