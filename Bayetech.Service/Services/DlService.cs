using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.DAL;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

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
                    JObject ret = db.GetList<vw_MallDLInfo>(page,out page, c => c.GameId == 1);
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
        public JObject GetDlInfoList(vw_MallDLInfo mallDlInfo, Pagination page)
        {
            try
            {
                using (var db = new RepositoryBase())
                {
                    JObject ret = new JObject();
                    PaginationResult<List<vw_MallDLInfo>> ResultPage = new PaginationResult<List<vw_MallDLInfo>>();
                    Expression<Func<vw_MallDLInfo,bool>> expressions = PredicateExtensions.True<vw_MallDLInfo>();
                    if (mallDlInfo!=null)
                    {
                        if (mallDlInfo.GameId!=null&& mallDlInfo.GameId>0)
                        {
                            expressions = expressions.And(c => c.GameId == mallDlInfo.GameId);
                        }
                        if (mallDlInfo.GroupId!=null&&mallDlInfo.GroupId>0)
                        {
                            expressions = expressions.And(c => c.GroupId == mallDlInfo.GroupId);
                        }
                        if (mallDlInfo.ServerId != null && mallDlInfo.ServerId > 0)
                        {
                            expressions = expressions.And(c => c.ServerId == mallDlInfo.ServerId);
                        }
                        if (!string.IsNullOrEmpty(mallDlInfo.DlType))
                        {
                            expressions = expressions.And(c => c.DlType == mallDlInfo.DlType);
                        }
                        if (!string.IsNullOrEmpty(mallDlInfo.WorkerType))
                        {
                            expressions = expressions.And(c => c.WorkerType == mallDlInfo.WorkerType);
                        }
                        if (!string.IsNullOrEmpty(mallDlInfo.DlNo))
                        {
                            expressions = expressions.And(c => c.DlNo == mallDlInfo.DlNo);
                        }
                        ResultPage.datas = db.FindList(page, out page, expressions);
                        ResultPage.pagination = page;
                    }
                    else
                    {
                        ResultPage.datas = db.FindList<vw_MallDLInfo>(page == null ? Pagination.GetDefaultPagination("GoodNo") : page).ToList();
                    }
                    ret.Add(ResultInfo.Result, true);
                    ret.Add(ResultInfo.Content, JToken.FromObject(ResultPage));
                    return ret;

                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message + "处发生了错误!");
            }
        }


        /// <summary>
        /// 获取商品编号下的代练信息
        /// </summary>
        /// <param name="No"></param>
        /// <returns></returns>
        public JObject GetDlDetaiInfo(string No)
        {
            using (var db = new RepositoryBase())
            {
                JObject ret = new JObject();
                if (!string.IsNullOrEmpty(No))
                {
                    var page = Pagination.GetDefaultPagination("PropertyId");
                    ret = db.GetList<vw_NoToProperty>(page, out page,c=>c.No == No);
                }
                return ret;
            }
        }

        /// <summary>
        /// 插入订单操作
        /// </summary>
        /// <param name="orderInfo"></param>
        /// <returns></returns>
        public JObject SubmitDlInfo(JObject orderInfo)
        {
            using (var db = new RepositoryBase().BeginTrans())
            {
                int flag = 0;
                var ret = new JObject();
                GameAccount _account = JsonConvert.DeserializeObject<GameAccount>(orderInfo.ToString());
                MallOrder order = JsonConvert.DeserializeObject<MallOrder>(orderInfo.ToString());
                order.OrderNo = Common.CreatOrderNo(order.GoodNo);
                if (!string.IsNullOrEmpty(_account.Account)&& !string.IsNullOrEmpty(order.OrderNo))
                {
                    flag = db.Insert(_account) + db.Insert(order);
                }
                db.Commit();
                if (flag == 0)//两笔都插入成功
                {
                    ret.Add(ResultInfo.Result, true);
                    ret.Add(ResultInfo.Content,"提交成功！");
                }
                return ret;
            }
        }
    }
}
