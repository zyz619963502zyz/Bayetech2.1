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
    public class GoodInfoService : BaseService<MallGoodInfo>,IDealCheckService
    {
        /// <summary>
        /// 根据下拉框查询列表
        /// </summary>
        /// <param name="gameId"></param>
        /// <param name="groupId"></param>
        /// <param name="serverId"></param>
        /// <param name="typeId"></param>
        /// <param name="keyword"></param>
        /// <returns></returns>
        public IQueryable<MallGoodInfo> GetList(int gameId, int groupId, int serverId, int typeId, string keyword)
        {
            Expression<Func<MallGoodInfo, bool>> expression = t => true;
            if (gameId > 0)
            {
                expression = expression.And(t => t.GameId == gameId);
            }
            if (groupId > 0)
            {
                expression = expression.And(t => t.GameGroupId == groupId);
            }
            if (serverId > 0)
            {
                expression = expression.And(t => t.GameServerId == serverId);
            }
            if (typeId > 0)
            {
                expression = expression.And(t => t.GoodType == typeId);
            }
            if (string.IsNullOrEmpty(keyword))
            {
                expression = expression.And(t => t.GoodTitle.Contains(keyword) || t.GoodKeyWord.Contains(keyword));
            }
            return FindList(expression);
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
