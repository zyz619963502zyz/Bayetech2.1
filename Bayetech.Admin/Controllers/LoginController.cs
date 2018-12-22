using Bayetech.Core;
using Bayetech.Service;
using Newtonsoft.Json;
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
        //[HttpPost]
        //public HttpResponseMessage AdminLogion(JObject json)
        //{
        //    try
        //    {
        //        JObject ret = new JObject();
        //        ret = logionService.GetVerificationLogion(json);
        //        if (ret["result"] !=null && Convert.ToBoolean(ret["result"].ToString()))
        //        {
        //            CurrentLogin loginContent = (CurrentLogin)HttpContext.Current.Session["CurrentLogin"];
        //            var tokenResult = WebApiHelper.GetSignToken(loginContent.UserName);//获取token
        //            loginContent.token = tokenResult.Result; //放入token
        //            HttpContext.Current.Session["CurrentLogin"] = loginContent;//获取到tokenId重新放进去

        //            if (tokenResult.StatusCode == (int)StatusCodeEnum.Success)//token找到成功
        //            {
        //                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK,"true");
        //                HttpCookie myCookie = new HttpCookie(loginContent.UserName);
        //                myCookie.Value = JsonConvert.SerializeObject(tokenResult.Result);
        //                myCookie.Expires = tokenResult.Result.ExpireTime;
        //                HttpContext.Current.Response.AppendCookie(myCookie);//客户端缓存
        //                return response;
        //            }
        //        }
        //        else
        //        {
        //            ret.Add(ResultInfo.Content, JToken.FromObject("登录失败,请检查用户名密码!"));
        //            ret.Add(ResultInfo.Result, "false");
        //        }
        //        return null;
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception(ex.Message);
        //    }
        //}

        [HttpPost]
        public JObject AdminLogion(JObject json)
        {
           
            try
            {
                JObject ret = new JObject();
                ret = logionService.GetVerificationLogion(json);
                if (ret["result"] != null && Convert.ToBoolean(ret["result"].ToString()))
                {
                    CurrentLogin loginContent = (CurrentLogin)HttpContext.Current.Session["CurrentLogin"];
                    var tokenResult = WebApiHelper.GetSignToken(loginContent.User_Id);//获取token
                    loginContent.token = tokenResult.Result; //放入token
                    HttpContext.Current.Session["CurrentLogin"] = loginContent;//获取到tokenId重新放进去

                    if (tokenResult.StatusCode == (int)StatusCodeEnum.Success)//token找到成功
                    {
                        ret["result"] = JToken.FromObject(true);
                        loginContent.PassWord = "";//密码置空前端安全性
                        ret.Add("User", JToken.FromObject(loginContent));
                    }
                }
                else
                {
                    ret.Add(ResultInfo.Content, JToken.FromObject("登录失败,请检查用户名密码!"));
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
