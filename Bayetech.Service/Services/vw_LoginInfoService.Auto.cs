using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace Bayetech.Service.Services
{
    public class v_LoginInfoService : IBaseService<vw_LoginInfoService>
    {
        public int Delete(object keyValue)
        {
            throw new NotImplementedException();
        }

        public IQueryable<vw_LoginInfoService> FindList(Expression<Func<vw_LoginInfoService, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public int Insert(JObject json)
        {
            throw new NotImplementedException();
        }

        public int Update(JObject json)
        {
            throw new NotImplementedException();
        }

        vw_LoginInfoService IBaseService<vw_LoginInfoService>.FindEntity(object keyValue)
        {
            throw new NotImplementedException();
        }
    }
}
