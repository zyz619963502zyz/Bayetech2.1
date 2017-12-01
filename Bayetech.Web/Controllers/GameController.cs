using Bayetech.Core.Entity;
using Bayetech.Service;
using Bayetech.Service.Services;
using System;
using System.Linq;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class GameController : BaseController
    {
        BaseService<Game> gameService = new BaseService<Game>();

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
        public IHttpActionResult GetGameListByLetter(string letter, int type)
        {
            var list = gameService.FindList(a => a.Letter.Equals(letter, StringComparison.CurrentCultureIgnoreCase) && a.Platform.Equals(type) && !a.IsDelete).ToList();
            return Json(list);
        }

        /// <summary>
        /// 根据游戏名模糊查找游戏名
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public IHttpActionResult GetGameByName(int type, string name)
        {
            var list = gameService.FindList(a => a.Platform == type && a.Name.Contains(name) && !a.IsDelete).ToList();
            return Json(list);
        }
    }
}