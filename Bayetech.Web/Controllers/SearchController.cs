using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Bayetech.Service.Services;
using System.Web.Mvc;

namespace Bayetech.Web.Controllers
{
    public class SearchController : BaseController
    {
        GameService gameService = new GameService();
        ServerService serverService = new ServerService();
        MallTypeService tradeTypeService = new MallTypeService();
        RelationshipService relationshipService = new RelationshipService();

        public IHttpActionResult GetData(string type, int id)
        {
            Models.DropDownModels data = new Models.DropDownModels();
            switch (type)
            {
                case "pcgame":
                    data.title = "游戏";
                    data.type = type;
                    data.child = "group";
                    data.list = gameService.FindList(a => a.platform.Equals("pc") && !a.isdelete).ToList();
                    break;
                case "mobilegame":
                    data.title = "游戏";
                    data.type = type;
                    data.child = "group";
                    data.list = gameService.FindList(a => a.platform.Equals("mobile") && !a.isdelete).ToList();
                    break;
                case "group":
                    data.title = "游戏区";
                    data.type = type;
                    data.child = "server";
                    var a2 = serverService.FindList(a1 => a1.type == 1 && a1.gameid.Equals(id) && !a1.isdelete);
                    data.list = serverService.FindList(a => a.type == 1 && a.gameid == id && !a.isdelete).ToList();
                    break;
                case "server":
                    data.title = "服务器";
                    data.type = type;
                    data.child = "type";
                    data.list = serverService.FindList(a => a.type == 2 && a.parentid.Equals(id) && !a.isdelete).ToList();
                    break;
                case "type":
                    data.title = "交易类型";
                    data.type = type;
                    data.child = "type";
                    //tradeTypeService.FindList(t => t.id == t.Relationship)
                    //relationshipService.FindList(a => a.ParentKey.Equals(id)).
                    //tradeTypeService.FindList(t => t.id ==())
                    ;
                    // data.list = serverService.FindList(a => a.type == 2 && a.parentid.Equals(id) && !a.isdelete).ToList();
                    break;
            }
            return Json(data);
        }

        public IHttpActionResult GetDataByAlphabet(string letter, string type)
        {
            type = type.Split(new string[] { "game" }, StringSplitOptions.RemoveEmptyEntries)[0];
            var list = gameService.FindList(a => a.letter.Equals(letter, StringComparison.CurrentCultureIgnoreCase) && a.platform.Equals(type) && !a.isdelete).ToList();
            return Json(list);
        }
    }
}