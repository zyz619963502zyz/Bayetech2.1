using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using System.Collections.Generic;
using System.Linq;
using Bayetech.Core; 
using System.Linq.Expressions;
using System;


namespace Bayetech.Service
{
    public class GoodInfoService : BaseService<vw_MallGoodMainInfo>, IGoodInfoService
    {
        /// <summary>
        ///  根据下拉框查询列表
        /// </summary>
        /// <param name="goodInfo"></param>
        /// <returns></returns>
        public JObject GetGoodList(vw_MallGoodMainInfo goodInfo,  Pagination page)
        {
            using (var db = new RepositoryBase())
            {
                JObject ret = new JObject();
                PaginationResult<List<vw_MallGoodMainInfo>> ResultPage = new PaginationResult<List<vw_MallGoodMainInfo>>();
                var expression = PredicateExtensions.True<vw_MallGoodMainInfo>();
                if (goodInfo != null)
                {
                    if (!string.IsNullOrEmpty(goodInfo.GoodNo))
                    {
                        expression = expression.And(t => t.GoodNo == goodInfo.GoodNo.Trim());
                    }
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
                    if (!string.IsNullOrEmpty(goodInfo.ServerName) && goodInfo.ServerName.Contains("Across:")) {
                        expression = expression.And(t => goodInfo.ServerName.Contains(t.GameServerId.ToString()));
                    }
                    if (goodInfo.GoodTypeId != null && goodInfo.GoodTypeId > 0) //类型Id 
                    {
                        expression = expression.And(t => t.GoodTypeId == goodInfo.GoodTypeId);
                    }
                    if (goodInfo.Gender != null ) //性别 
                    {
                        expression = expression.And(t => t.Gender == goodInfo.Gender);
                    }
                    if (goodInfo.HasQQFriend != null) //是否有QQ好友 
                    {
                        expression = expression.And(t => t.HasQQFriend == goodInfo.HasQQFriend);
                    }
                    if (goodInfo.HasIdSealedRecord != null) //是否有封禁记录 
                    {
                        expression = expression.And(t => t.HasIdSealedRecord == goodInfo.HasIdSealedRecord);
                    }
                    if (goodInfo.Stock != null && goodInfo.Stock>0) //库存
                    {
                        expression = expression.And(t => t.Stock == goodInfo.Stock);
                    }
                    else
                    {
                        expression = expression.And(t => t.Stock > 0);//售完商品列表
                    }
                    if (!string.IsNullOrEmpty(goodInfo.GoodKeyWord))//商品关键字
                    {
                        expression = expression.And(t => t.GoodTitle.Contains(goodInfo.GoodKeyWord));
                    }
                    if (goodInfo.Status != null&&!string.IsNullOrEmpty(goodInfo.Status)) //商品状态
                    {
                        if (goodInfo.Status == "Processed")//当是已处理的时候分为两种状态
                        {
                            expression = expression.And(t => t.Status == "PutOnsale"|| t.Status == "PutDownsale");
                        }
                        else
                        {
                            expression = expression.And(t => t.Status == goodInfo.Status);
                        }
                    }
                    else
                    {
                        expression = expression.And(t => t.Status == "PutOnsale");//默认不传的情况下查询所有的上架商品
                    }
                    if (goodInfo.startTime != null )//开始时间
                    {
                        expression = expression.And(t => t.AddTime >= goodInfo.startTime);
                    }
                    if (goodInfo.endTime != null )//结束时间
                    {
                        expression = expression.And(t => t.AddTime <= goodInfo.endTime);
                    }
                    if (goodInfo.MaxQQLevel != null)//最高QQ等级
                    {
                        expression = expression.And(t => t.QQLv <= goodInfo.MaxQQLevel);

                    }
                    if (goodInfo.MinQQLevel != null)//最低QQ等级
                    {
                        expression = expression.And(t => t.QQLv >= goodInfo.MinQQLevel);
                    }
                    if (goodInfo.MinPrice != null)//最低价格
                    {
                        expression = expression.And(t => t.GoodPrice >= goodInfo.MinPrice);
                    }
                    if (goodInfo.MaxPrice != null)//最高价格
                    {
                        expression = expression.And(t => t.GoodPrice >= goodInfo.MaxPrice);
                    }
                    if (goodInfo.ProfessionCode != null)
                    {
                        Expression<Func<vw_MallGoodMainInfo, bool>> expression2 = PredicateExtensions.True<vw_MallGoodMainInfo>();

                        expression2 = expression2.Or(t => t.ProfessionCode1 == goodInfo.ProfessionCode)
                            .Or(t => t.ProfessionCode2 == goodInfo.ProfessionCode)
                            .Or(t => t.ProfessionCode3 == goodInfo.ProfessionCode);
                        expression = expression.And(expression2);
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

                ret.Add(ResultInfo.Result, true);
                ret.Add(ResultInfo.Content, JToken.FromObject(ResultPage));
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
                    ret.Add(ResultInfo.Content, JToken.FromObject("商品编号为空，请重新输入！"));
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
                         where r.Type == "dailian" && r.ParentKey == gameId && r.Value == goodTypeId.ToString()&&p.Type=="good"
                         select p);
            return query.ToList();
        } 
    }
}

