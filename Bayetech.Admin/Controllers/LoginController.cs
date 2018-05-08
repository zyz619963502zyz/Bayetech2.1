using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    public class LoginController : ApiController
    {
        [HttpPost]
        //public IHttpActionResult Login(Accout userInfo)
        //{
        //    string result = "no";
        //    var Session = HttpContext.Current.Session;
        //    //根据用户名密码进行查询
        //    if (UserInfoService.Login(new UserInfo()
        //    {
        //        UserName = userInfo.UserName,
        //        UserPwd = userInfo.UserPwd
        //    }))
        //    {
        //        result = "ok";

        //        //创建标识
        //        string key = Guid.NewGuid().ToString();
        //        HttpContext.Current.Response.Cookies.Add(new HttpCookie("loginId", key));

        //    }
        //    else
        //    {
        //        result = "用户名或密码错误";
        //        Session["ValidateCode"] = "";
        //    }

        //    return Json(result);
        //}
    }
}
