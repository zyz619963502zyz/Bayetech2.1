using Bayetech.Core;
using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service
{
    public class ButtonsManageService : BaseService<Admin_Sys_Buttons>, IButtonsManageService
    {
        public JObject AddButtons(JObject json)
        {
            throw new NotImplementedException();
        }

        public JObject DeleteButtons(JObject json)
        {
            throw new NotImplementedException();
        }

        public JObject GetListButtons()
        {
            var roleList = repository.IQueryable<Admin_Sys_Buttons>();
            JObject result = new JObject();
            if (roleList != null)
            {
                result.Add(ResultInfo.Result, JToken.FromObject(true));
                result.Add(ResultInfo.Content, JToken.FromObject(roleList.ToList()));
            }
            else
            {
                result.Add(ResultInfo.Result, JToken.FromObject(false));
                result.Add(ResultInfo.Content, JToken.FromObject("没有找到匹配数据"));
            }
            return result;
        }
    }
}
