using Bayetech.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service.Services
{
    public partial class SettingService : BaseService<Settings>
    {
        /// <summary>
        /// 根据类型获取配置
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        public List<Settings> GetListByType(string type)
        {
            List<Settings> data = null;
            var parent = FindList(s => s.Value == type || s.key == type).FirstOrDefault();
            if (parent != null)
            {
                data = FindList(s => s.ParentId == parent.Id).ToList();
            }
            return data;
        }
    }
}
