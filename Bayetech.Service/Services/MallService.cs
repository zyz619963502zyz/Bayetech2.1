using Bayetech.Core;
using Bayetech.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service.Services
{
    public class MallService : BaseService<MallGoodInfo>
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
                expression = expression.And(t => t.Id == groupId);
            }
            return FindList(expression);
        }
    }
}
