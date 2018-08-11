using Bayetech.Core.Entity;
using Bayetech.DAL;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

        //添加一个游戏
        public JObject CreatGame(Game game) {
            JObject ret = new JObject();
            if (!string.IsNullOrEmpty(game.Name)&&!string.IsNullOrEmpty(game.Alias))
            {
                int flag = 0;
                using (var db = (new RepositoryBase()).BeginTrans())
                {
                    db.Insert(game);
                    flag = db.Commit();
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
    }
}
