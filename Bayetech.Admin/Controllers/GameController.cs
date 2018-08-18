using Bayetech.Core.Entity;
using Bayetech.Service;
using Bayetech.Service.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{

    public class GameController : ApiController
    {
        //游戏服务
        BaseService<Game> gameService = new BaseService<Game>();//快速读取
        GameService serviceGame = new GameService();//服务层

        /// <summary>
        /// 根据字母获得游戏名称
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JObject GetGameListByLetter(int type, string letter)
        {
            var ret = gameService.GetList(g => g.Letter.Equals(letter, StringComparison.CurrentCultureIgnoreCase) && g.Platform == type && !g.IsDelete);
            return ret;
        }

        /// <summary>
        /// 添加一个游戏(超级管理员权限)
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject AddGame(JObject json) {
            Game game = JsonConvert.DeserializeObject<Game>(json.ToString());
            return serviceGame.CreatGame(game);
        }

        /// <summary>
        /// 修改游戏
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject UpdateGame(JObject json) {
            Game game = JsonConvert.DeserializeObject<Game>(json.ToString());
            return serviceGame.UpdateGame(game);
        }

        /// <summary>
        /// 根据游戏的Alias去删除一个游戏
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject DelGameById(string alias) {
            JObject ret = new JObject();
            Game game = gameService.FindEntity(c => c.Alias == alias);
            game.IsDelete = true;
            if (gameService.Update(game)>0)
            {
                ret.Add("result", "删除成功!");
            }
            else
            {
                ret.Add("result", "删除失败，请联系管理员!");
            }
            return ret;
        }


        /// <summary>
        /// 编辑游戏的属性
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JObject UpdateGameProperty(GameProfession profession) {
            return serviceGame.UpdateExtraProperty(profession);
        }
    }
}
