using Bayetech.Core;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace Bayetech.Admin
{
    public class ApiSecurityFilter:ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            ResultMsg resultMsg = null;
            var request = actionContext.Request;
            string method = request.Method.Method;
            string staffId = String.Empty, tokenId = string.Empty;

            if (request.Headers.Contains("staffid"))
            {
                staffId = HttpUtility.UrlDecode(request.Headers.GetValues("staffid").FirstOrDefault());
            }
            if (request.Headers.Contains("TokenId"))
            {
                tokenId = HttpUtility.UrlDecode(request.Headers.GetValues("TokenId").FirstOrDefault());
            }

            //GetToken方法不需要进行签名验证
            if (actionContext.ActionDescriptor.ActionName == "GetToken")
            {
                if (string.IsNullOrEmpty(staffId)|| string.IsNullOrEmpty(tokenId))
                { 
                    resultMsg = new ResultMsg();
                    resultMsg.StatusCode = 1111;
                    resultMsg.Info = "答案是错误的";
                    resultMsg.Data = null;
                    //actionContext.Response = HttpResponseExtension.toJson(JsonConvert.SerializeObject(resultMsg));
                    base.OnActionExecuting(actionContext);
                    return;
                }
                else
                {
                    base.OnActionExecuting(actionContext);
                    return;
                }
            }

            CurrentLogin _current = (CurrentLogin)HttpContext.Current.Session["CurrentLogin"];
            if (_current == null||_current.token.TokenId!= tokenId)
            {
                resultMsg = new ResultMsg();
                resultMsg.StatusCode = (int)StatusCodeEnum.Error;
                resultMsg.Info = "Token验证不通过";
                resultMsg.Data = "";
                //验证不通过跳转到登录页面
                //actionContext.Response = HttpResponseExtension.toJson(JsonConvert.SerializeObject(resultMsg));
                base.OnActionExecuting(actionContext);
                return;
            }
            else
            {
                base.OnActionExecuting(actionContext);
            }
        }


        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            base.OnActionExecuted(actionExecutedContext);
        }
    }
}