using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.DAL;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Bayetech.Service.Services
{
    public class GameService : BaseService<Game>
    {
        /// <summary>
        /// 获取游戏额外属性
        /// </summary>
        /// <param name="gameId"></param>
        /// <param name="goodTypeId"></param>
        /// <returns></returns>
        public List<ExtraProperty> GetExtraProperty(int gameId)
        {
            var db = GetContext();
            var query = (from r in db.Relationship
                         join p in db.ExtraProperty on r.Key equals p.Id
                         where r.Type == 3 && r.ParentKey == gameId  && p.Type == "game"
                         select p);
            return query.ToList();
        }

        /// <summary>
        /// 修改游戏额外的属性
        /// </summary>
        /// <param name="game"></param>
        /// <returns></returns>
        public JObject UpdateExtraProperty(GameProfession profess) {
            using (var db = new RepositoryBase().BeginTrans())
            {
                JObject ret = new JObject();
                int flag = db.Update(profess);
                db.Commit();
                if (flag > 0)
                {
                    ret.Add("result", true);
                    ret.Add("Mess", JObject.FromObject("添加成功！"));
                }
                else
                {
                    ret.Add("result", false);
                    ret.Add("Mess", JObject.FromObject("插入数据库失败！"));
                }
                return ret;
            }
        }

        /// <summary>
        /// 添加一个游戏
        /// </summary>
        /// <param name="game">前端更新的游戏对象</param>
        /// <returns></returns>
        public JObject CreatGame(Game game) {
            JObject ret = new JObject();
            if (!string.IsNullOrEmpty(game.Name)&&!string.IsNullOrEmpty(game.Alias))
            {
                int flag = 0;
                using (var db = (new RepositoryBase()).BeginTrans())
                {
                    flag = db.Insert(game);
                    db.Commit();
                    if (flag>0)
                    {
                        ret.Add("result",true);
                        ret.Add("Mess", JObject.FromObject("添加成功！"));
                    }
                    else
                    {
                        ret.Add("result", false);
                        ret.Add("Mess", JObject.FromObject("插入数据库失败！"));
                    }
                }
            }
            else
            {
                ret.Add("result", false);
                ret.Add("Mess", JObject.FromObject("游戏名称或者简介不全！"));
            }
            return ret;
        }


        /// <summary>
        /// 修改游戏
        /// </summary>
        /// <param name="game"></param>
        /// <returns></returns>
        public JObject UpdateGame(Game game) {
            JObject ret = new JObject();
            using (var db = new RepositoryBase().BeginTrans())
            {
                int flag = db.Update(game);
                if (flag > 0)
                {
                    ret.Add("result", true);
                    ret.Add("Mess", JObject.FromObject("更游戏新成功！"));
                }
                else
                {
                    ret.Add("result", false);
                    ret.Add("Mess", JObject.FromObject("游戏更新失败，请联系管理员！"));
                }
            }
            return ret;
        }

        /// <summary>
        /// 根据首字母获取列表
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public JObject GetGameListByLetter(int type,string letter,Pagination page) {
            using (var db = new RepositoryBase())
            {
                Pagination outPage = new Pagination();
                Expression<Func<Game, bool>> expression = PredicateExtensions.True<Game>();
                PaginationResult<List<Game>> ResultPage = new PaginationResult<List<Game>>();
                JObject ret = new JObject();

                expression = expression.And(c => c.Platform == type);
                if (!string.IsNullOrEmpty(letter))
                {
                    expression = expression.And(c => c.Letter == letter);
                }

                ResultPage.datas = db.FindList(page,out outPage, expression);
                ResultPage.pagination = outPage;
                if (ResultPage.datas.Count>0)
                {
                    ret.Add(ResultInfo.Result, true);
                    ret.Add(ResultInfo.Content, JToken.FromObject(ResultPage));
                }
                return ret;
            }
        }
    }
}
