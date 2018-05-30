using Bayetech.Core;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
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
                if (ret["result"] !=null && Convert.ToBoolean(ret["result"].ToString()))
                {
                    CurrentLogin loginContent = (CurrentLogin)HttpContext.Current.Session["CurrentLogin"];
                    var tokenResult = WebApiHelper.GetSignToken(Core.Common.IpToInt(loginContent.LoginIp));
                    if (tokenResult.StatusCode == (int)StatusCodeEnum.Success)//token找到成功
                    {
                        HttpContext.Current.Session[loginContent.LoginId.ToString()] = tokenResult;
                        ret.Add(ResultInfo.Content, JToken.FromObject(tokenResult));
                        ret.Add(ResultInfo.Result, "true");
                    }
                }
                else
                {
                    ret.Add(ResultInfo.Content, JToken.FromObject("登录失败!"));
                    ret.Add(ResultInfo.Result, "false");
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
