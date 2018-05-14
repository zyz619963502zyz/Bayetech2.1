using Bayetech.Core.Entity;
using Bayetech.DAL;
using Newtonsoft.Json.Linq;
using System;

namespace Bayetech.Service
{
    class CheckService : ICheckService
    {
        public bool CheckGoodInfo(string flag)
        {
            try
            {
                using (var db = new RepositoryBase())
                {
                    //JObject ret = db.GetList<GoodStatus>(page, out page, c => c.GameId == 1);
                    return true;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message + "处发生了错误!");
            }
        }
    }
}
