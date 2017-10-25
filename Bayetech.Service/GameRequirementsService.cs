using Bayetech.DAL;
using Bayetech.DAL.Entity;
using Bayetech.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service
{
    public class GameRequirementsService : IGameRequirementsService
    {
        public List<GameRequirements> GameRequirementsList()
        {
            List<GameRequirements> list = null;
            using (var db = new RepositoryBase())
            {
                list = db.IQueryable<GameRequirements>().ToList();
                return list;
            }
        }
    }
}
