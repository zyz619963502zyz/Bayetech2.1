using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.DAL;
using Bayetech.Service.IServices;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service
{
    public class DlService : IDlService
    {

        /// <summary>
        /// 查找简介列表
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public JObject GetNewDlInfoList(Pagination page)
        {
            try
            {
                using (var db = new RepositoryBase())
                {
                    JObject ret = db.GetList<vw_MallDLInfo>(c => c.GameId == 1, page, out page);
                    return ret;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message + "处发生了错误!");
            }
        }

        /// <summary>
        /// 查询代列表
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public JObject GetDlInfoList(JObject json)
        {
            try
            {
                using (var db = new RepositoryBase())
                {
                    Pagination page = new Pagination();
                    JObject ret = db.GetList<vw_MallDLInfo>(c => c.GameId == 1, page, out page);
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
