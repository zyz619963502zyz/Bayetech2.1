using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using System.Collections.Generic;
using System.Linq;
using Bayetech.Core;

namespace Bayetech.Service.Services
{
    public class DealCheckService : BaseService<DealCheckService>,IDealCheckService
    {
        //获取商品信息
        public JObject GetGoodInfo(string goodNo)
        {
            using (var db = new RepositoryBase())
            {
                JObject ret = new JObject();
                List<vw_MallGoodInfo> goods = new List<vw_MallGoodInfo>();
                

                if (!string.IsNullOrEmpty(goodNo))
                {
                    List<vw_MallGoodInfo> goodInfo = db.FindList<vw_MallGoodInfo>(c=>c.GoodInfoId == goodNo,GetDefaultPagination("GoodInfoId")).ToList();
                    if (goodInfo != null)
                    {
                        ret.Add(ResultInfo.Result, JProperty.FromObject(goodInfo));
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
