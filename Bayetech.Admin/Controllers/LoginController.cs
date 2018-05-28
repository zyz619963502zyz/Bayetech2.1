using Bayetech.Admin.Controllers;
using Bayetech.Core;
using Bayetech.Service;
using Client.Common;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Bayetech.Admin.Controller
{
    public class LoginController : BaseController
    {
        ILogionService logionService = new LogionService();
        /// <summary>
        /// 验证登陆
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject AdminLogion(JObject json)
        {
            try
            {
                JObject ret = new JObject();
                ret = logionService.GetVerificationLogion(json);
                if (ret["Result"] !=null && Convert.ToBoolean(ret["Result"].ToString()))
                {
                    CurrentLogin loginContent = (CurrentLogin)HttpContext.Current.Session["CurrentLogin"];
                    var tokenResult = WebApiHelper.GetSignToken(loginContent.LoginId);
                    Dictionary<string, string> param = new Dictionary<string, string>();
                    param.Add("id", "1");
                    param.Add("name", "wahaha");
                    Tuple<string, string> parameters = WebApiHelper.GetQueryString(param);
                    //var product1 = WebApiHelper.Get<ProductResultMsg>("http://localhost:5133/Page/BayMain.html", parameters.Item1, parameters.Item2, staffId);
                    //Product product = new Product() { Id = 1, Name = "安慕希", Count = 10, Price = 58.8 };
                    //var product2 = WebApiHelper.Post<ProductResultMsg>("http://localhost:5133/Page/BayMain.html", JsonConvert.SerializeObject(product), staffId);
                    //Console.Read();
                }
                else
                {

                }
                return ret;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        /// <summary>
        /// 退出
        /// </summary>
        /// <returns></returns>
        public bool LoginOut()
        {

            var ss = CurrentLogin.Admin;
            HttpContext.Current.Session.Clear();
            return true;
        }
    }
}
