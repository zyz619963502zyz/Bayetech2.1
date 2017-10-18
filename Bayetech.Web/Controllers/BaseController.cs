using Spring.Context;
using Spring.Context.Support;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Text;
using System.Web.Http;


namespace Bayetech.Web
{
    public class BaseController : ApiController
    {
        //创建spring容器上下文公共容器
        public static IApplicationContext ctx = ContextRegistry.GetContext();

        //写入操作的entity异常处理
        public static string ExceptionForWriteEntity(DbEntityValidationException ex) {
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
    }
}
