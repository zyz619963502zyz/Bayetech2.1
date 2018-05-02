using Bayetech.Core;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Spring.Expressions.Parser.antlr;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;

namespace Bayetech.Web.Controllers
{
    /// <summary>
    /// 通用api接口
    /// </summary>
    public class CommonPageController : ApiController
    {

        public class Tokens
        {
            /// <summary>
            /// 用户名
            /// </summary>
            public int StaffId { get; set; }

            /// <summary>
            /// 用户名对应签名Token
            /// </summary>
            public Guid SignToken { get; set; }

            /// <summary>
            /// Token过期时间
            /// </summary>
            public DateTime ExpireTime { get; set; }
        }


        public JObject GetToken(string staffId) {
            ResultInfo resultMsg = null;
            int id = 0;
            JObject ret = new JObject();

            //判断参数是否合法
            if (string.IsNullOrEmpty(staffId) || (!int.TryParse(staffId, out id)))
            {
                resultMsg = new ResultInfo();
                //ResultInfo.StatusCode = (int)StatusCodeEnum.ParameterError;
                //ResultInfo.Content = StatusCodeEnum.ParameterError.GetEnumText();
                //ResultInfo.Data = "";
                //return HttpResponseExtension.toJson(JsonConvert.SerializeObject(resultMsg));

                ResultInfo.StatusCode = "1111111";
                ResultInfo.Content = "报错的消息";
                ResultInfo.Data = "";
                ret.Add(resultMsg);
                return ret;
            }

            //插入缓存
            Token token = (Token)HttpRuntime.Cache.Get(id.ToString());
            if (HttpRuntime.Cache.Get(id.ToString()) == null)
            {
                token = new Token();
                //token.StaffId = id;
                //token.SignToken = Guid.NewGuid();
                //token.ExpireTime = DateTime.Now.AddDays(1);
                //HttpRuntime.Cache.Insert(token.StaffId.ToString(), token, null, token.ExpireTime, TimeSpan.Zero);
            }

            ////返回token信息
            //ResultInfo.StatusCode = "222222";
            //resultMsg.Info = "";
            //ResultInfo.Data = token;

            //return HttpResponseExtension.toJson(JsonConvert.SerializeObject(resultMsg));
        }
    }
}
