using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.DAL;
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
            
            JObject result = new JObject();
            Admin_Sys_Buttons admin_Sys_Buttons = json["ListObj"].ToString() == "" ? new Admin_Sys_Buttons() : JsonConvert.DeserializeObject<Admin_Sys_Buttons>(json["ListObj"].ToString());
            if(admin_Sys_Buttons.KeyId>0)
            {
                using (var db = new RepositoryBase().BeginTrans())
                {
                    db.Update(admin_Sys_Buttons);
                    if (db.Commit() == 1)
                    {   
                        result.Add(ResultInfo.Result, true);
                    }
                    else
                    {
                        result.Add(ResultInfo.Result, false);
                    }
                }
            }
            else
            {
                using (var db = new RepositoryBase().BeginTrans())
                {
                    db.Insert(admin_Sys_Buttons);
                    if (db.Commit() == 1)
                    {
                        result.Add(ResultInfo.Result, true);
                    }
                    else
                    {
                        result.Add(ResultInfo.Result, false);
                    }
                }
            }
            return result;
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
