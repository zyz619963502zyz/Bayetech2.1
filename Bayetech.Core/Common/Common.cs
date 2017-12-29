using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

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
        public static string CreatGoodInfo()
        {
            try
            {
                //string strHeader = "YM";
                string year = DateTime.Now.Year.ToString();
                string month = DateTime.Now.Month.ToString().PadLeft(2,'0');
                string day = DateTime.Now.Day.ToString().PadLeft(2, '0');
                string hour = DateTime.Now.Hour.ToString().PadLeft(2, '0');
                string min = DateTime.Now.Minute.ToString().PadLeft(2, '0');
                string second = DateTime.Now.Second.ToString().PadLeft(2, '0');
                Random ran = new Random();
                string wan = ran.Next(1, 9999).ToString().PadLeft(4, '0');
                string result = year + month + day + hour + min + second + wan;
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
    }
}
