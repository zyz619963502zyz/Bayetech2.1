using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service
{
    public interface ILogionService
    {
        /// <summary>
        /// 员工登陆验证
        /// </summary>
        /// <param name="json">员工信息</param>
        /// <returns></returns>
        JObject GetVerificationLogion(JObject json);
    }
}
