using System.Linq;
using System.Web.Http;
using Bayetech.Service.Services;
using Bayetech.Core.Enum;
using System.Text.RegularExpressions;
using Bayetech.Service;
using Bayetech.Core.Entity;

namespace Bayetech.Web.Controllers
{
    public class SearchController : BaseController
    {
        BaseService<Game> gameService = new BaseService<Game>();
        BaseService<Server> serverService = new BaseService<Server>();
        MallTypeService mallTypeService = new MallTypeService();
        //BaseService<Core.Entity.Relationship> relationshipService = new BaseService<Core.Entity.Relationship>();

        public IHttpActionResult GetData(int type, int id)
        {
            Models.DropDownModels data = new Models.DropDownModels();
            var enumType = (SearchType)type;

            switch (enumType)
            {
                case SearchType.OnlineGames:
                    data.Title = "游戏";
                    data.Type = (int)enumType;
                    data.Child = (int)SearchType.Group;
                    data.List = gameService.FindList(a => a.Platform == type && !a.IsDelete).ToList();
                    break;
                case SearchType.MobileGames:
                    data.Title = "游戏";
                    data.Type = (int)enumType;
                    data.Child = (int)SearchType.Group;
                    data.List = gameService.FindList(a => a.Platform.Equals(type) && !a.IsDelete).ToList();
                    break;
                case SearchType.Group:
                    data.Title = "游戏区";
                    data.Type = (int)enumType;
                    data.Child = (int)SearchType.Server;
                    data.List = serverService.FindList(a =>a.ParentId==0&& a.GameId == id && !a.IsDelete).ToList();
                    break;
                case SearchType.Server:
                    data.Title = "服务器";
                    data.Type = (int)enumType;
                    data.Child = (int)SearchType.MallType;
                    data.List = serverService.FindList(a => a.ParentId != 0 && a.ParentId == id && !a.IsDelete).ToList();
                    break;
                case SearchType.MallType:
                    data.Title = "交易类型";
                    data.Type = (int)enumType;
                    data.Child = 5;
                    data.List = mallTypeService.GetDataByGameId((int)Core.Enum.Relationship.Game_MallType,1);
                    break;
            }
            return Json(data);
        }
    }
}