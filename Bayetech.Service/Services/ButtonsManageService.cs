using Bayetech.Core;
using Bayetech.Core.Entity;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
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

        public JObject GetListButtons(JObject json, DateTime? StartTime, DateTime? EndTime)
        {
            json = json ?? new JObject();
            Pagination page = json["Pagination"] == null ? Pagination.GetDefaultPagination("ButtonText") : JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString());
            Expression<Func<Admin_Sys_Buttons, bool>> expression = PredicateExtensions.True<Admin_Sys_Buttons>();
            PaginationResult<List<Admin_Sys_Buttons>> ResultPage = new PaginationResult<List<Admin_Sys_Buttons>>();
            JObject result = new JObject();
            var roleList = repository.FindList(page ?? Pagination.GetDefaultPagination("ButtonText"), out page, expression);
            if(!string.IsNullOrEmpty(json["Param"]["ButtonName"].ToString()))
            {
                roleList = roleList.FindAll(a => a.ButtonText == json["Param"]["ButtonName"].ToString());
            }
            ResultPage.datas = roleList.ToList() ;
            if (page != null)
            {
                ResultPage.pagination = page;
            }
            if (ResultPage.datas.Count >0)
            {
                result.Add(ResultInfo.Result, JToken.FromObject(true));
                result.Add(ResultInfo.Content, JToken.FromObject(ResultPage));
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
