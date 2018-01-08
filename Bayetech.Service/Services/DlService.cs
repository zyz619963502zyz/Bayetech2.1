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

namespace Bayetech.Service.Services
{
    public class DlService : IDlService
    {

        /// <summary>
        /// 查找简介列表
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public JObject GetNewDlInfoList(JObject json)
        {
            try
            {
                using (var db = new RepositoryBase())
                {
                    Random ran = new Random();
                    Pagination page = new Pagination();
                    page.order = "";
                    page.rows = 5;
                    page.page = ran.Next(1, 20);
                    page.records = 1000;
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
        public JObject GetDlInfoList()
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
