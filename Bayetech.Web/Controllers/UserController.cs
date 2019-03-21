using System;
using System.Web.Http;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
using Bayetech.Core;
using System.Linq;
using System.Web;
using Bayetech.Core.Entity;
using Newtonsoft.Json;
using System.Web.SessionState;
using Bayetech.Web.Models;

namespace Bayetech.Web.Controllers
{
    
    public class UserController : BaseController 
    {

        //取出服务层
        //IBaseService<User> service1 = new BaseService<User>();

        IUserService service = ctx.GetObject("UserService") as IUserService;
        //IBaseService<Category> service11 = ctx.GetObject("BaseService") as IBaseService<Category>;   泛型依赖注入的写法

        [HttpGet]
        public bool IAccount(string accountName)
        {
            try
            {
                return service.CheckAccount(accountName); 
            }
            catch (Exception ex) 
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPost]
        public bool CreatAccount(JObject json)
        {
            try
            {
                return service.CreatAccount(json);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPost]
        public JObject LoginIn(JObject json)
        {
            try
            {
                var a = HttpContext.Current.Session;
                return service.CheckLogin(json);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        /// <summary>
        /// 是否开启登录验证
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        public bool GetIsValiteLogin(string id)
        {
            return (bool)service.FindList(a => a.Id == id).ToList().FirstOrDefault().IsValiteLogin;
        }

        #region Update
        /// <summary>
        /// 修改密码
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        [ApiSecurityFilter]
        public bool UpdatePassword(JObject json)
        {
            var id = json.Property("id").Value.ToString();
            var password = json.Property("password").Value.ToString();
            var entity = service.FindList(a => a.Id == id).ToList().FirstOrDefault();
            entity.Password = Md5.EncryptString(password);
            var result = service.Update(entity);
            return result > 0;
        }

        /// <summary>
        /// 修改支付密码
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        [ApiSecurityFilter]
        public bool UpdatePayPassword(JObject json)
        {
            var id = json.Property("id").Value.ToString();
            var payPassword = json.Property("payPassword").Value.ToString();
            var entity = service.FindList(a => a.Id == id).ToList().FirstOrDefault();
            entity.PayPassword = Md5.EncryptString(payPassword);
            var result = service.Update(entity);
            return result > 0;
        }

        /// <summary>
        /// 修改手机绑定
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        [ApiSecurityFilter]
        public bool UpdatePhone(JObject json)
        {
            var id = json.Property("id").Value.ToString();
            var phone = json.Property("phone").Value.ToString();
            var entity = service.FindList(a => a.Id == id).ToList().FirstOrDefault();
            entity.Phone = phone;
            var result = service.Update(entity);
            return result > 0;
        }

        /// <summary>
        /// 开启/关闭登录验证
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        [ApiSecurityFilter]
        public bool UpdateIsValiteLogin(JObject json)
        {
            var id = json.Property("id").Value.ToString();
            var isValiteLogin = bool.Parse(json.Property("isValiteLogin").Value.ToString());
            var entity = service.FindList(a => a.Id == id).ToList().FirstOrDefault();
            entity.IsValiteLogin = isValiteLogin;
            var result = service.Update(entity);
            return result > 0;
        }

        [HttpPost]
        public bool InsertIsValiteUser(JObject json)
        {
            var result=0;
            //MallOrder goodInfo = JsonConvert.DeserializeObject<MallOrder>(json.First.Path);
            result = service.QQUserLogion(json);

            return result>0;
        }

        #endregion
    }
}
