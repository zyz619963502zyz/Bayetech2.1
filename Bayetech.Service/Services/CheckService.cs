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
        

        /// <summary>
        /// 验证qq号是否相同
        /// </summary>
        /// <returns></returns>
        public JObject CheckCustomServiceQQ(string qq) {
            try
            {
                using (var db = new RepositoryBase().BeginTrans())
                {
                    JObject ret = new JObject();
                    int _count = db.FindList<Admin_Sys_Users>(null, c => c.QQ == qq).Count;
                    if (_count>0)
                    {
                        ret.Add(ResultInfo.Result, "该QQ号是52yxb客服账号!");
                    }
                    else
                    {
                        ret.Add(ResultInfo.Result, "该QQ号非52yxb客服账号，请立即拉黑谨防上当!");
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
