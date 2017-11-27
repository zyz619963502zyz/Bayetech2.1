using Bayetech.Core;
using Bayetech.Core.Entity;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace Bayetech.Service.Services
{
    public class GoodInfoService : BaseService<MallGoodInfo>
    {
        public IQueryable<MallGoodInfo> GetList(int gameId, int groupId, int serverId, int typeId, string keyword)
        {
            Expression<Func<MallGoodInfo, bool>> expression = t => true;
            if (gameId > 0)
            {
                expression = expression.And(t => t.GameId == gameId);
            }
            if (groupId > 0)
            {
                expression = expression.And(t => t.GameGroupId == groupId);
            }
            if (serverId > 0)
            {
                expression = expression.And(t => t.GameServerId == serverId);
            }
            if (typeId > 0)
            {
                expression = expression.And(t => t.GoodType == typeId);
            }
            if (string.IsNullOrEmpty(keyword))
            {
                expression = expression.And(t => t.GoodTitle.Contains(keyword)||t.GoodKeyWord.Contains(keyword));
            }
            return FindList(expression);
        }
    }
}
