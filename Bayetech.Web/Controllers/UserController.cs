using System;
using System.Web.Http;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
using Bayetech.Core;
using System.Linq;

namespace Bayetech.Web.Controllers
{
    public class UserController : BaseController
    {

        //取出服务层
        //IBaseService<User> service1 = new BaseService<User>();

        IUserService service = ctx.GetObject("UserService") as IUserService;
        //IBaseService<Category> service11 = ctx.GetObject("BaseService") as IBaseService<Category>;   泛型依赖注入的写法

        [HttpGet]
        public bool CheckAccount(string accountName)
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
                return service.CheckLogin(json);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        #region Update
        public bool UpdatePassword(string id ,string pasword)
        {
            var entity = service.FindList(a => a.Id == id).FirstOrDefault();
            entity.Password = Md5.EncryptString(pasword);
            var result = service.Update(entity);
            return result > 0;
        }

        public bool UpdatePayPassword(string id, string payPasword)
        {
            var entity = service.FindList(a => a.Id == id).FirstOrDefault();
            entity.PayPassword = Md5.EncryptString(payPasword);
            var result = service.Update(entity);
            return result > 0;
        }

        public bool UpdatePhome(string id, string phone)
        {
            var entity = service.FindList(a => a.Id == id).FirstOrDefault();
            entity.Phone = phone;
            var result = service.Update(entity);
            return result > 0;
        }

        public bool UpdateValiteLogin(string id, bool IsValiteLogin)
        {
            var entity = service.FindList(a => a.Id == id).FirstOrDefault();
            entity.IsValiteLogin = IsValiteLogin;
            var result = service.Update(entity);
            return result > 0;
        }
        #endregion
    }
}
