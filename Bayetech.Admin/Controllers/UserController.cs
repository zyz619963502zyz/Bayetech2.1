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
        BaseService<Admin_Sys_Users> UsersService = new BaseService<Admin_Sys_Users>();

        /// <summary>
        /// 获取一个列表，供给Grid使用
        /// </summary>
        /// <param name="sortOrder"></param>
        /// <param name="limit"></param>
        /// <param name="offset"></param>
        /// <param name="searchTxt"></param>
        /// <returns></returns>
        [HttpGet]
        public string GetList(string sortOrder, int limit, int offset, string searchTxt)
        {
            RepositoryBase repository = new RepositoryBase();
            IQueryable<Admin_Sys_Users> users = repository.IQueryable<Admin_Sys_Users>() ;

            var total = users.Count();
            if (limit > 1000) limit = 100;
            if (limit > total)
            {
                limit = total;
                offset = 0;
            }
            else
            {
                if (offset >= total - limit) offset = total - limit;
            }
            users = (string.IsNullOrEmpty(sortOrder) || sortOrder == "asc") ? users.OrderBy(a => a.KeyId) : users.OrderByDescending(a => a.KeyId);
            if (!string.IsNullOrEmpty(searchTxt))
            {
                users = users.Where(c => c.UserName.Contains(searchTxt) || c.TrueName.Contains(searchTxt));
            }
            var ret = users.Select(a => new { a.KeyId, a.UserName, a.TrueName, a.DepartmentId, a.Mobile, a.Remark, a.IsAdmin, a.IsDisabled }).Skip(offset).Take(limit).ToList();

            return JSONhelper.GetJsonforBootstrapTable(total, ret);
        }
    }
}
