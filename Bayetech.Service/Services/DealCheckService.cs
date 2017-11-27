using System;
using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using System.Linq.Expressions;
using Bayetech.Service.IServices;

namespace Bayetech.Service.Services
{
    public class DealCheckService : IDealCheckService
    {
        //获取商品信息
        public JObject GetGoodInfo(string goodNo)
        {
            using (var db = new RepositoryBase())
            {
                JObject ret = new JObject();
                var _good = new vw_MallGoodInfo();
                if (!string.IsNullOrEmpty(goodNo))
                {       
                    _good = db.FindEntity<vw_MallGoodInfo>(c => c.GoodNo == goodNo);
                    if (_good!=null)
                    {
                        ret.Add(ResultInfo.Result, JProperty.FromObject(true));
                        ret.Add(ResultInfo.Content, JProperty.FromObject(_good));
                    }
                    else
                    {
                        ret.Add(ResultInfo.Result, JProperty.FromObject(false));
                        ret.Add(ResultInfo.Content, JProperty.FromObject("未查询到该笔信息!"));
                    }
                }
                else
                {
                    ret.Add(ResultInfo.Result, JProperty.FromObject(false));
                    ret.Add(ResultInfo.Content, JProperty.FromObject("商品编号为空，未查询到此笔数据!"));
                }
                return ret;
            }
        }
    }
}
