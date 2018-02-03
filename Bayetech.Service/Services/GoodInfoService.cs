using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using System.Collections.Generic;
using System.Linq;
using Bayetech.Core;
using System.Linq.Expressions;
using System;

namespace Bayetech.Service.Services
{
    public class GoodInfoService : BaseService<vw_MallGoodMainInfo>, IGoodInfoService
    {
        /// <summary>
        ///  根据下拉框查询列表
        /// </summary>
        /// <param name="goodInfo"></param>
        /// <returns></returns>
        public JObject GetGoodList(vw_MallGoodMainInfo goodInfo, DateTime? StartTime, DateTime? EndTime, Pagination page)
        {
            using (var db = new RepositoryBase())
            {
                JObject ret = new JObject();
                PaginationResult<List<vw_MallGoodMainInfo>> ResultPage = new PaginationResult<List<vw_MallGoodMainInfo>>();
                Expression<Func<vw_MallGoodMainInfo, bool>> expression = PredicateExtensions.True<vw_MallGoodMainInfo>();
                if (goodInfo != null)
                {
                    if (goodInfo.GameId != null && goodInfo.GameId > 0)//游戏Id
                    {
                        expression = expression.And(t => t.GameId == goodInfo.GameId);
                    }
                    if (goodInfo.GameGroupId != null && goodInfo.GameGroupId > 0)//大区Id
                    {
                        expression = expression.And(t => t.GameGroupId == goodInfo.GameGroupId);
                    }
                    if (goodInfo.GameServerId != null && goodInfo.GameServerId > 0)//服务器Id
                    {
                        expression = expression.And(t => t.GameServerId == goodInfo.GameServerId);
                    }
                    if (goodInfo.GoodTypeId != null && goodInfo.GoodTypeId > 0) //类型Id
                    {
                        expression = expression.And(t => t.GoodTypeId == goodInfo.GoodTypeId);
                    }
                    if (!string.IsNullOrEmpty(goodInfo.GoodKeyWord))//商品关键字
                    {
                        expression = expression.And(t => t.GoodTitle.Contains(goodInfo.GoodKeyWord));
                    }
                    if (goodInfo.StatusId != null) //商品状态
                    {
                        expression = expression.And(t => t.StatusId == goodInfo.StatusId);
                    }
                    //if (goodInfo.UserName != null && goodInfo.UserName > 0) //
                    //{
                    //    expression = expression.And(t => t.GoodTypeId == goodInfo.GoodTypeId);
                    //}
                    if (StartTime != null && !string.IsNullOrEmpty(StartTime.ToString()))//开始时间
                    {
                        expression = expression.And(t => t.AddTime >= StartTime);
                    }
                    if (EndTime != null && !string.IsNullOrEmpty(EndTime.ToString()))//结束时间
                    {
                        expression = expression.And(t => t.AddTime <= EndTime);
                    }
                }
                var query = db.FindList(page ?? Pagination.GetDefaultPagination("GoodNo"), out page, expression);

                var Games = query.GroupBy(g => g.GameId).Select(g => new { Id = g.FirstOrDefault().GameId, Name = g.FirstOrDefault().GameName }).ToList();
                ret.Add("Games", JToken.FromObject(Games));
                ResultPage.datas = query.ToList();//暂时以GoodNo排序，以后做活。
                if (page!=null)
                {
                    ResultPage.pagination = page;
                }

                if (ResultPage.datas.Count>0)
                {
                    ret.Add(ResultInfo.Result, true);
                    ret.Add(ResultInfo.Content, JToken.FromObject(ResultPage));
                }
                else
                {
                    ret.Add(ResultInfo.Result, false);
                    ret.Add(ResultInfo.Content, JToken.FromObject(Properties.Resources.Reminder_NoInfo));
                }
                return ret;
            }
        }


        /// <summary>
        /// 获取商品信息大类
        /// </summary>
        /// <param name="goodNo"></param>
        /// <returns></returns>
        public JObject GetGoodInfoDetail(string goodNo)
        {
            using (var db = new RepositoryBase())
            {
                JObject ret = new JObject();
                if (!string.IsNullOrEmpty(goodNo))
                {
                    List<vw_MallGoodInfo> goodInfo = db.FindList<vw_MallGoodInfo>(Pagination.GetDefaultPagination("GoodInfoId"),c =>c.GoodInfoId == goodNo).ToList();
                    if (goodInfo != null)
                    {
                        ret.Add(ResultInfo.Result, true);
                        ret.Add(ResultInfo.Content, JToken.FromObject(goodInfo));
                    }
                    else
                    {
                        ret.Add(ResultInfo.Result,false);
                        ret.Add(ResultInfo.Content, JToken.FromObject(Properties.Resources.Reminder_NoInfo));
                    }
                }
                else
                {
                    ret.Add(ResultInfo.Result, false);
                    ret.Add(ResultInfo.Content, JToken.FromObject("商品编号为空,请重新输入!"));
                }
                return ret;
            }
        }


        /// <summary>
        /// 获取商品信息的
        /// </summary>
        /// <param name="goodNo">商品编号</param>
        /// <returns></returns>
        public JObject GetGoodInfo(string goodNo)
        {

            JObject ret = new JObject();
            using (var db = new RepositoryBase())
            {
                if (!string.IsNullOrEmpty(goodNo))
                {
                    vw_MallGoodMainInfo goodInfo = new vw_MallGoodMainInfo();
                    goodInfo = db.FindEntity<vw_MallGoodMainInfo>(c => c.GoodNo == goodNo);
                    if (!string.IsNullOrEmpty(goodInfo.GoodNo))//找到了此笔商品编号的数据。
                    {
                        ret.Add(ResultInfo.Result, true);
                        ret.Add(ResultInfo.Content, JToken.FromObject(goodInfo));
                    }
                    else
                    {
                        ret.Add(ResultInfo.Result, false);
                        ret.Add(ResultInfo.Content, JToken.FromObject(Properties.Resources.Reminder_NoInfo));
                    }
                }
                else
                {
                   
                    ret.Add(ResultInfo.Result, false);
                    ret.Add(ResultInfo.Content, JProperty.FromObject("商品编号为空，请重新输入！"));
                }
            }
            return ret;
        }

        /// <summary>
        /// 获取商品额外属性
        /// </summary>
        /// <param name="gameId"></param>
        /// <param name="goodTypeId"></param>
        /// <returns></returns>
        public List<ExtraProperty> GetExtraProperty(int gameId, int goodTypeId)
        {
            var db = GetContext();
            var query = (from r in db.Relationship
                         join p in db.ExtraProperty on r.Key equals p.Id
                         where r.Type == 2 && r.ParentKey == gameId && r.Value == goodTypeId.ToString()&&p.Type=="good"
                         select p);
            return query.ToList();
        } 
    }
}
