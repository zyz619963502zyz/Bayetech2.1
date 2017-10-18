using System;
using System.Collections.Generic;
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
    }
}
