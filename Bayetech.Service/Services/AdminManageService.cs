using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Bayetech.Core.Entity;
using Bayetech.Core;

namespace Bayetech.Service
{
    /// <summary>
    /// 
    /// </summary>
    public class AdminManageService : BaseService<Admin_Sys_Users>,IAdminManageService
    {
        public JObject GetUserList()
        {
            var userList = repository.IQueryable<Admin_Sys_Users>();
            JObject result = new JObject();
            if (userList != null)
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(true));
                result.Add(ResultInfo.Content, JProperty.FromObject(userList.ToList()));
            }
            else
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(false));
                result.Add(ResultInfo.Content, JProperty.FromObject("无数据"));
            }
            return result;
        }
    }
}
