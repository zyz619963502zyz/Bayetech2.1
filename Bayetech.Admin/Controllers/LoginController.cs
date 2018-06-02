using Bayetech.Core;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
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
        /// 验证登陆，返回token
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public HttpResponseMessage AdminLogion(JObject json)
        {
            try
            {
                JObject ret = new JObject();
                ret = logionService.GetVerificationLogion(json);
                if (ret["result"] !=null && Convert.ToBoolean(ret["result"].ToString()))
                {
                    CurrentLogin loginContent = (CurrentLogin)HttpContext.Current.Session["CurrentLogin"];
                    var tokenResult = WebApiHelper.GetSignToken(loginContent.LoginIpInt);
                    if (tokenResult.StatusCode == (int)StatusCodeEnum.Success)//token找到成功
                    {
                        HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK,"true");
                        HttpCookie myCookie = new HttpCookie(loginContent.UserName);
                        myCookie.Value = tokenResult.Result.TokenId;
                        myCookie.Expires = tokenResult.Result.ExpireTime;
                        HttpContext.Current.Response.AppendCookie(myCookie);//客户端缓存
                        return response;
                    }
                }
                else
                {
                    //ret.Add(ResultInfo.Content, JToken.FromObject("登录失败!"));
                    //ret.Add(ResultInfo.Result, "false");
                }
                return null;
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
