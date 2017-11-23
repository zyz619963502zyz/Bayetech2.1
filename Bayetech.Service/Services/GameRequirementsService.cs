using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using Newtonsoft.Json;
using Bayetech.Core.Entity;
using System;
using Bayetech.Core;
using Bayetech.Service.IServices;
using System.Collections.Generic;
using System.Linq;

namespace Bayetech.Service.Services
{
    public partial class GameRequirementsService  : BaseService<GameRequirements>, IGameRequirementsService
    {
        /// <summary>
        /// 获取出售需求列表
        /// </summary>
        /// <returns></returns>
        public List<GameRequirements> GameRequirementsList()
        {
            List<GameRequirements> list = null;
            list = repository.IQueryable<GameRequirements>().ToList();
            return list;
        }
    }
}
