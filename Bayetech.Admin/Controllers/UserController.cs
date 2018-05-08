using Bayetech.Core.Entity;
using Bayetech.Core.Security.Json;
using Bayetech.DAL;
using Bayetech.Service;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    public class UserController : BaseController
    {

        IUserService userService = ctx.GetObject("UserService") as IUserService;
        [HttpGet]
        public bool AdminLogion(string userName,string passWord)
        {
            try
            {
                return userService.GetVerificationLogion(userName,passWord);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
