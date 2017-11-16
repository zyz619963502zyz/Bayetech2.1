using System.Linq;
using System.Web.Http;
using Bayetech.Service.Services;
using Bayetech.Core.Enum;
using System.Text.RegularExpressions;

namespace Bayetech.Web.Controllers
{
    public class SearchController : BaseController
    {
        GameService gameService = new GameService();
        ServerService serverService = new ServerService();
        MallTypeService mallTypeService = new MallTypeService();
        RelationshipService relationshipService = new RelationshipService();

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
                    data.List = gameService.FindList(a => a.Platform.Equals(type) && !a.IsDelete).ToList();
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
                    var a2 = serverService.FindList(a1 => a1.Type == 1 && a1.Gameid.Equals(id) && !a1.IsDelete);
                    data.List = serverService.FindList(a => a.Type == 1 && a.Gameid == id && !a.IsDelete).ToList();
                    break;
                case SearchType.Server:
                    data.Title = "服务器";
                    data.Type = (int)enumType;
                    data.Child = (int)SearchType.MallType;
                    data.List = serverService.FindList(a => a.Type == 2 && a.ParentId.Equals(id) && !a.IsDelete).ToList();
                    break;
                case SearchType.MallType:
                    data.Title = "交易类型";
                    data.Type = (int)enumType;
                    data.Child = 0;
                    data.List = mallTypeService.GetDataByGameId((int)Relationship.Game_MallType,1);
                    break;
            }
            return Json(data);
        }
    }
}