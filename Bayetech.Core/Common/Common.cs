using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Text;
using System.Web;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.Linq;

namespace Bayetech.Core
{
    public class Common
    {
        /// <summary>
        /// 获取客户端IP地址（无视代理）
        /// </summary>
        /// <returns>若失败则返回回送地址</returns>
        public static string GetHostAddress()
        {
            string userHostAddress = HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];
            if (string.IsNullOrEmpty(userHostAddress))
            {
                if (HttpContext.Current.Request.ServerVariables["HTTP_VIA"] != null)
                    userHostAddress = HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"].ToString().Split(',')[0].Trim();
            }
            if (string.IsNullOrEmpty(userHostAddress))
            {
                userHostAddress = HttpContext.Current.Request.UserHostAddress;
            }

            //最后判断获取是否成功，并检查IP地址的格式（检查其格式非常重要）
            if (!string.IsNullOrEmpty(userHostAddress) && IsIP(userHostAddress))
            {
                return userHostAddress;
            }
            return "127.0.0.1";
        }

        /// <summary>
        /// 检查IP地址格式
        /// </summary>
        /// <param name="ip"></param>
        /// <returns></returns>
        public static bool IsIP(string ip)
        {
            return System.Text.RegularExpressions.Regex.IsMatch(ip, @"^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$");
        }

        /// <summary>
        /// 带返回值异常处理的方法执行
        /// </summary>
        /// <param name="action">方法</param>
        /// <param name="ExceptionFunc">异常方法</param>
        /// <returns></returns>
        public static T AddTryCatch<T>(Func<T> func, Func<T> ExceptionFunc)
        {
            try
            {
                return func();
            }
            catch (Exception ex)
            {
                //写日志
                //抛出
                if (ExceptionFunc != null)
                    return ExceptionFunc.Invoke();
                else
                    throw ex;
            }
            finally
            {

            }
        }

        /// <summary>
        /// 带返回值异常处理的方法执行
        /// </summary>
        /// <param name="action">方法</param>
        /// <param name="ExceptionFunc">异常方法</param>
        /// <returns></returns>
        public static T AddTryCatch<T>(Func<T> func, Action ExceptionFunc)
        {
            try
            {
                return func();
            }
            catch (Exception ex)
            {
                //写日志
                //抛出
                ExceptionFunc?.BeginInvoke(null, null);
                throw ex;
            }
            finally
            {

            }
        }

        /// <summary>
        /// 带返回值异常处理的方法执行
        /// </summary>
        /// <param name="action">方法</param>
        /// <returns></returns>
        public static T AddTryCatch<T>(Func<T> func)
        {
            return AddTryCatch(func, null);
        }

        //写入操作的entity异常处理
        public static string ExceptionForWriteEntity(DbEntityValidationException ex)
        {
            StringBuilder errors = new StringBuilder();
            IEnumerable<DbEntityValidationResult> validationResult = ex.EntityValidationErrors;
            foreach (DbEntityValidationResult result in validationResult)
            {
                ICollection<DbValidationError> validationError = result.ValidationErrors;
                foreach (DbValidationError err in validationError)
                {
                    errors.Append(err.PropertyName + ":" + err.ErrorMessage + "\r\n");
                }
            }
            return errors.ToString();
        }


        /// <summary>
        /// 商品编号机制（18位）
        /// </summary>
        /// <returns></returns>
        public static string CreatGoodNo(string head)
        {
            try
            {
                string year = DateTime.Now.Year.ToString();
                string month = DateTime.Now.Month.ToString().PadLeft(2,'0');
                string day = DateTime.Now.Day.ToString().PadLeft(2, '0');
                string hour = DateTime.Now.Hour.ToString().PadLeft(2, '0');
                string min = DateTime.Now.Minute.ToString().PadLeft(2, '0');
                string second = DateTime.Now.Second.ToString().PadLeft(2, '0');
                Random ran = new Random();
                string wan = ran.Next(1, 9999).ToString().PadLeft(4, '0');
                string result = head + year + month + day + hour + min + second + wan;
                return result;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message + "发生错误!");
            }   
        }

        /// <summary>
        /// 根据商品编号生成订单编号（22位）
        /// </summary>
        /// <param name="goodNo"></param>
        /// <returns></returns>
        public static string CreatOrderNo(string goodNo)
        {
            try
            {
                Random ran = new Random();
                string wan = ran.Next(1, 9999).ToString().PadLeft(4, '0');
                string result = goodNo + wan;
                return result;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message + "发生错误!");
            }
        }

        /// <summary>
        /// trim方法增加null判断
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static string Trim(string str) => str == null ? "" : str.Trim();


        public static JObject PackageJObect(bool bol,object result= null)
        {
            var jObect = new JObject();
            jObect.Add("result", bol);
            jObect.Add("content", JToken.FromObject(result));
            return jObect;
        }


        /// <summary>
        /// 获取token对象
        /// </summary>
        /// <param name="staffid">获取token的员工编号ID 
        /// </param>
        /// <returns></returns>
        public static JObject GetToken(string staffid)
        {
            JObject ret = new JObject();

            //判断staffid是否合法
            if (string.IsNullOrEmpty(staffid))
            {
                ret.Add(ResultInfo.Result, false);
                ret.Add(ResultInfo.Content, JToken.FromObject("staffid不合法，请稍后重试。"));
            }

            //比对缓存没有则重新生成
            Token token = (Token)HttpContext.Current.Session[staffid];
            if (HttpContext.Current.Session[staffid] == null)
            {
                token = new Token();
                token.TokenId = Guid.NewGuid().ToString();
                token.ExpireTime = DateTime.Now.AddHours(12);//设置12小时过期
            }
            ret.Add("Token",JObject.FromObject(token));
            return ret;
        }

        /// <summary>
        /// 将请求的参数重新设计混合到未来的签名中
        /// </summary>
        public static Tuple<string,string> SignRequest(Dictionary<string,string> parames) {
            // 第一步：把字典按Key的字母顺序排序
            IDictionary<string, string> sortedParams = new SortedDictionary<string, string>(parames);
            IEnumerator<KeyValuePair<string, string>> dem = sortedParams.GetEnumerator();

            // 第二步：把所有参数名和参数值串在一起
            StringBuilder query = new StringBuilder("");  //签名字符串
            StringBuilder queryStr = new StringBuilder(""); //url参数
            if (parames == null || parames.Count == 0)
                return new Tuple<string, string>("", "");

            while (dem.MoveNext())
            {
                string key = dem.Current.Key;
                string value = dem.Current.Value;
                if (!string.IsNullOrEmpty(key))
                {
                    query.Append(key).Append(value);
                    queryStr.Append("&").Append(key).Append("=").Append(value);
                }
            }

            return new Tuple<string,string>(query.ToString(),queryStr.ToString().Substring(1,queryStr.Length-1));
        }


        /// <summary>
        /// 获取签名
        /// </summary>
        /// <param name="timeStamp"></param>
        /// <param name="nonce"></param>
        /// <param name="staffId"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        private static string GetSignature(string timeStamp, string nonce, string staffId, string data)
        {
            Token token = null;
            var resultMsg = GetToken(staffId);
            if (resultMsg != null)
            {
                token = JsonConvert.DeserializeObject<Token>(resultMsg["Token"].ToString());
            }   
            else
            {
                throw new Exception("token为null，员工编号为：" + staffId);
            }

            var hash = System.Security.Cryptography.MD5.Create();
            //拼接签名数据
            var signStr = timeStamp + nonce + staffId + token.TokenId.ToString() + data;
            //将字符串中字符按升序排序
            var sortStr = string.Concat(signStr.OrderBy(c => c));
            var bytes = Encoding.UTF8.GetBytes(sortStr);
            //使用MD5加密
            var md5Val = hash.ComputeHash(bytes);
            //把二进制转化为大写的十六进制
            StringBuilder result = new StringBuilder();
            foreach (var c in md5Val)
            {
                result.Append(c.ToString("X2"));
            }
            return result.ToString().ToUpper();
        }
    }
}
