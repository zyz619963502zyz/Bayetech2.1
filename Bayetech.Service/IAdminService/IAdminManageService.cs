using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service
{
    public interface IAdminManageService
    {
        /// <summary>
        /// 获取员工表
        /// </summary>
        /// <returns></returns>
        JObject GetUserList();
    }
}
