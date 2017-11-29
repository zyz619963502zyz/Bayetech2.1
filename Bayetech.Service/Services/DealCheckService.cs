﻿using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using System.Collections.Generic;
using System.Linq;
using Bayetech.Core;

namespace Bayetech.Service.Services
{
    public class DealCheckService : BaseService<DealCheckService>,IDealCheckService
    {
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
                        ret.Add(ResultInfo.Result, JProperty.FromObject(goodInfo));
                    }
                    else
                    {
                        ret.Add(ResultInfo.Result, JProperty.FromObject(false));
                        ret.Add(ResultInfo.Content, JProperty.FromObject(Properties.Resources.Reminder_NoInfo));
                    }
                }
                else
                {
                    ret.Add(ResultInfo.Result, JProperty.FromObject(false));
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
                    MallGoodInfo goodInfo = new MallGoodInfo();
                    goodInfo = db.FindEntity<MallGoodInfo>(c => c.GoodNo == goodNo);
                    if (!string.IsNullOrEmpty(goodInfo.GoodNo))//找到了此笔商品编号的数据。
                    {
                        ret.Add(ResultInfo.Result, JProperty.FromObject(true));
                        ret.Add(ResultInfo.Content, JProperty.FromObject(ret));
                    }
                    else
                    {
                        ret.Add(ResultInfo.Result, JProperty.FromObject(false));
                        ret.Add(ResultInfo.Content, JProperty.FromObject(Properties.Resources.Reminder_NoInfo));
                    }
                }
                else
                {
                   
                    ret.Add(ResultInfo.Result, JProperty.FromObject(false));
                    ret.Add(ResultInfo.Content, JProperty.FromObject("商品编号为空，请重新输入！"));
                }
            }
            return ret;
        }
    }
}
