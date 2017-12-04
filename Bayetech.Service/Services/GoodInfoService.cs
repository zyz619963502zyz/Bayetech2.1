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
        public JObject GetGoodList(vw_MallGoodMainInfo goodInfo)
        {
            using (var db = new RepositoryBase())
            {
                JObject ret = new JObject();
                Expression<Func<vw_MallGoodMainInfo, bool>> expression = PredicateExtensions.True<vw_MallGoodMainInfo>();
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
                if (goodInfo.GoodType != null && goodInfo.GoodType > 0) //类型Id
                {
                    expression = expression.And(t => t.GoodType == goodInfo.GoodType);
                }
                if (!string.IsNullOrEmpty(goodInfo.GoodKeyWord))//商品关键字
                {
                    expression = expression.And(t => t.GoodTitle.Contains(goodInfo.GoodKeyWord) || t.GoodKeyWord.Contains(goodInfo.GoodKeyWord));
                }

                List <vw_MallGoodMainInfo> ListMain = db.FindList(expression, GetDefaultPagination("GoodNo")).ToList();//暂时以GoodNo排序，以后做活。

                if (ListMain.Count>0)
                {
                    ret.Add(ResultInfo.Result, true);
                    ret.Add(ResultInfo.Content, JProperty.FromObject(ListMain));
                }
                else
                {
                    ret.Add(ResultInfo.Result, false);
                    ret.Add(ResultInfo.Content, JProperty.FromObject(Properties.Resources.Reminder_NoInfo));
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
                    List<vw_MallGoodInfo> goodInfo = db.FindList<vw_MallGoodInfo>(c=>c.GoodInfoId == goodNo,GetDefaultPagination("GoodInfoId")).ToList();
                    if (goodInfo != null)
                    {
                        ret.Add(ResultInfo.Result, true);
                        ret.Add(ResultInfo.Content, JProperty.FromObject(goodInfo));
                    }
                    else
                    {
                        ret.Add(ResultInfo.Result,false);
                        ret.Add(ResultInfo.Content, JProperty.FromObject(Properties.Resources.Reminder_NoInfo));
                    }
                }
                else
                {
                    ret.Add(ResultInfo.Result, false);
                    ret.Add(ResultInfo.Content, JProperty.FromObject("商品编号为空,请重新输入!"));
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
                        ret.Add(ResultInfo.Content, JProperty.FromObject(goodInfo));
                    }
                    else
                    {
                        ret.Add(ResultInfo.Result, false);
                        ret.Add(ResultInfo.Content, JProperty.FromObject(Properties.Resources.Reminder_NoInfo));
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
    }
}
