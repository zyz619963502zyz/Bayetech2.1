using Newtonsoft.Json.Linq;
using Spring.Context;
using Spring.Context.Support;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Reflection;

namespace Bayetech.Web
{
    public class BaseController : ApiController
    {
        //创建spring容器上下文公共容器
        public static IApplicationContext ctx = ContextRegistry.GetContext();


        //public static List<T> ComQuqery<T>(JObject json) where T : class
        //{
        //    try
        //    {
        //        Type type = typeof(BaseController);
        //        MethodInfo methodInfo = type.GetMethod("Method1", new Type[] { typeof(string) });
        //        string param = json["QS"].ToString();
        //        methodInfo.Invoke(BaseController, new object[] { "测试", 100 }).ToString();
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception(ex.Message);
        //    }
        //    return new List<T>();
        //}
    }
}
