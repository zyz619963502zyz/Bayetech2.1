using Bayetech.Service;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Spring.Context;
using Spring.Context.Support;
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.IO;
using System.Linq;
using System.Text;
using System.Web.Http;

namespace Bayetech.Web
{
    public class QueryController : BaseController 
    {
        //取出服务层
        ILoginSignService service = ctx.GetObject("LoginSignService") as ILoginSignService;

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
            //try
            //{
            //    ILoginSignService service = ctx.GetObject("LoginSignService") as ILoginSignService;
            //    return service.CreatAccount(json);
            //}
            //catch (Exception ex)
            //{
            //    throw new Exception(ex.Message);
            //}


            try
            {
                ILoginSignService service = ctx.GetObject("LoginSignService") as ILoginSignService;
                return service.CreatAccount(json);
            }
            catch (DbEntityValidationException ex)
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
                throw new Exception(errors.ToString());
                //简写
                //var validerr = ex.EntityValidationErrors.First().ValidationErrors.First();
                //Console.WriteLine(validerr.PropertyName + ":" + validerr.ErrorMessage);
            }
        }
    }
}
