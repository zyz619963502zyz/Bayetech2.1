using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.DAL;
using Newtonsoft.Json;
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
                         where r.Type == "3" && r.ParentKey == gameId  && p.Type == "game"
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
        public JObject UpdateGame(JObject json) {
            JObject ret = new JObject();
            ////游戏基本信息
            Game game = json["GameArray"].ToString() == "" ? new Game() : JsonConvert.DeserializeObject<Game>(json["GameArray"].ToString());
            //区服务信息
            List<Server> server = json["ServerList1"].ToString() == "" ? new List<Server>() : JsonConvert.DeserializeObject<List<Server>>(json["ServerList1"].ToString());
            //职业信息
            List<GameProfession> gameProfession = json["GameProfessionArray"].ToString() == "" ? new List<GameProfession>() : JsonConvert.DeserializeObject<List<GameProfession>>(json["GameProfessionArray"].ToString());
            //交易类型
            List<MallType> gameInfoDescription = json["GameMallTypeArray"].ToString() == "" ? new List<MallType>() : JsonConvert.DeserializeObject<List<MallType>>(json["GameMallTypeArray"].ToString());

            using (var db = new RepositoryBase().BeginTrans())
            {
                server.ForEach(a => a.GameId =Convert.ToInt32(game.Id));
                int flag = db.Update(game);
                var serveraList = db.IQueryable<Server>(a => a.GameId == game.Id).ToList();
                foreach (var item in serveraList)
                {
                    db.Delete<Server>(item);
                }
                foreach (var item in server)
                {
                    db.Insert<Server>(server);
                }
                var gameProfessionList = db.IQueryable<GameProfession>(a => a.GameId == game.Id);
                foreach (var item in gameProfessionList)
                {
                    db.Delete<GameProfession>(item);
                }
                foreach (var item in gameProfession)
                {
                    db.Insert<GameProfession>(item);
                }
                List<Relationship> mallType = (from a in db.IQueryable<MallType>().DefaultIfEmpty()
                                           join b in db.IQueryable<Relationship>() on a.Id equals b.Key
                                           join c in db.IQueryable<Game>().DefaultIfEmpty() on b.ParentKey equals c.Id
                                           where c.Id == game.Id
                                           select b).ToList();
                foreach (var item in mallType)
                {
                    db.Insert<Relationship>(item);
                }
                foreach (var item in gameInfoDescription)
                {
                    Relationship re = new Relationship();
                    re.Key = item.Id;
                    re.Type = item.En_Name;
                    re.ParentKey = game.Id;
                    re.CreateTime = DateTime.Now;
                    db.Insert(re);

                }

            }
            return ret;
        }
        /// <summary>
        /// 编辑属性查询
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public JObject GetGameService(JObject json)
        {
            JObject ret = new JObject();
            Game game = json["GameArray"].ToString() == "" ? new Game() : JsonConvert.DeserializeObject<Game>(json["GameArray"].ToString());
            using (var db = new RepositoryBase().BeginTrans())
            {
                //区服务信息
                List<Server> server = db.IQueryable<Server>(a => a.GameId == game.Id).ToList();
                //职业信息
                List<GameProfession> gameProfession = db.IQueryable<GameProfession>(a => a.GameId == game.Id).ToList();
                //交易类型
                List<MallType> mallType = (from a in db.IQueryable<MallType>().DefaultIfEmpty()
                                          join b in db.IQueryable<Relationship>() on a.Id equals b.Key
                                          join c in db.IQueryable<Game>().DefaultIfEmpty() on b.ParentKey equals c.Id
                                          where c.Id == game.Id
                                          select a).ToList();


                List<MallType> mallTypeList = db.IQueryable<MallType>().ToList();

                if (server.Count>0)
                {
                    ret.Add(ResultInfo.Result, true);
                    ret.Add("server", JProperty.FromObject(server));
                    ret.Add("gameProfession",JProperty.FromObject(gameProfession));
                    ret.Add("mallType", JProperty.FromObject(mallType));
                    ret.Add("mallTypeArray", JProperty.FromObject(mallTypeList));
                }
                else
                {
                    ret.Add(ResultInfo.Result, JProperty.FromObject(false));
                    ret.Add(ResultInfo.Content, JProperty.FromObject("无数据"));
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
