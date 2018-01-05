﻿using Bayetech.Core.Entity;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
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
        public JObject GetGameList(int type,string name=null)
        {
            name = Core.Common.Trim(name);
            if (string.IsNullOrEmpty(name))
            {
                return gameService.GetList(g => g.Platform == type && !g.IsDelete);
            }
            else
            {
                return gameService.GetList(g => g.Platform == type && g.Name.Contains(name) && !g.IsDelete);
            }
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
        public JObject GetGameListByLetter(int type,string letter)
        {
            var list = gameService.GetList(g => g.Letter.Equals(letter, StringComparison.CurrentCultureIgnoreCase) && g.Platform == type && !g.IsDelete);
            return list;
        }

        /// <summary>
        /// 根据热门和首字母获取游戏
        /// </summary>
        /// <param name="type"></param>
        /// <param name="str"></param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetGameListByHotAndLetter(int type,string str)
        {
            var result = (string.IsNullOrEmpty(str) || str == "hot") ? GetGameList(type) : GetGameListByLetter(type, str);
            return result;
        }

        /// <summary>
        /// 根据游戏名模糊查找游戏名
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public JObject GetGameByName(int type, string name)
        {
            name = Core.Common.Trim(name);
            var list = gameService.GetList(g => g.Platform == type && g.Name.Contains(name) && !g.IsDelete);
            return list;
        }
    }
}