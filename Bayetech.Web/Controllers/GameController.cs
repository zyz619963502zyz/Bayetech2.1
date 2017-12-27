using Bayetech.Core.Entity;
using Bayetech.Service;
using System;
using System.Linq;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class GameController : BaseController
    {
        BaseService<Game> gameService = new BaseService<Game>();

        /// <summary>
        /// 获取游戏
        /// </summary>
        /// <param name="type">类型</param>
        /// <param name="count">条数</param>
        /// <returns></returns>
        public IHttpActionResult GetGameList(int type)
        {
            var data = gameService.FindList(g=> g.Platform == type && !g.IsDelete).ToList();
            return Json(data);
        }

        /// <summary>
        /// 获取热门游戏
        /// </summary>
        /// <param name="type">类型</param>
        /// <param name="count">条数</param>
        /// <returns></returns>
        public IHttpActionResult GetHotGameList(int type, int count)
        {
            var data = gameService.FindList(g => g.IsHot && !g.IsDelete).Take(count).ToList();
            return Json(data);
        }

        /// <summary>
        /// 获取游戏排行榜
        /// </summary>
        /// <param name="type"></param>
        /// <param name="count"></param>
        /// <returns></returns>
        public IHttpActionResult GetGameRanking(int type, int count)
        {
            var data = gameService.FindList(g => !g.IsDelete).OrderBy(g => g.Order).Take(count).ToList();
            return Json(data);
        }

        /// <summary>
        /// 根据中文首字母获取游戏
        /// </summary>
        /// <param name="letter"></param>
        /// <param name="type"></param>
        /// <returns></returns>
        public IHttpActionResult GetGameListByLetter(int type,string letter)
        {
            var list = gameService.FindList(g => g.Letter.Equals(letter, StringComparison.CurrentCultureIgnoreCase) && g.Platform == type && !g.IsDelete).ToList();
            return Json(list);
        }

        /// <summary>
        /// 根据热门和首字母获取游戏
        /// </summary>
        /// <param name="type"></param>
        /// <param name="str"></param>
        /// <returns></returns>
        [HttpGet]
        public IHttpActionResult GetGameListByHotAndLetter(int type,string str)
        {
            var result = (string.IsNullOrEmpty(str) || str == "hot") ? GetGameList(type) : GetGameListByLetter(type, str);
            return result;
        }

        /// <summary>
        /// 根据游戏名模糊查找游戏名
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public IHttpActionResult GetGameByName(int type, string name)
        {
            var list = gameService.FindList(g => g.Platform == type && g.Name.Contains(name) && !g.IsDelete).ToList();
            return Json(list);
        }
    }
}