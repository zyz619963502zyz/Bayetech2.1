using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.DAL;
using Newtonsoft.Json.Linq;
using System;

namespace Bayetech.Service
{
    public class CheckService : ICheckService
    {
        public JObject CheckGoodInfo(MallGoodInfo goodInfo)
        {
            try
            {
                using (var db = new RepositoryBase())
                {
                    JObject ret = new JObject();
                    if (db.Update(goodInfo) == 1) {
                        ret.Add(ResultInfo.Result, true);
                    }
                    return ret;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message + "处发生了错误!");
            }
        }
    }
}
