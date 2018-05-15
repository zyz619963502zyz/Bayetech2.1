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
                using (var db = new RepositoryBase().BeginTrans())
                {
                    JObject ret = new JObject();
                    db.Update(goodInfo);
                    if (db.Commit()==1) {
                        ret.Add(ResultInfo.Result, true);
                    }
                    else
                    {
                        ret.Add(ResultInfo.Result, false);
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
