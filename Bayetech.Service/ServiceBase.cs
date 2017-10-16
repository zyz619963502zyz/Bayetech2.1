using Bayetech.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using Newtonsoft.Json;
using System.Linq.Expressions;

namespace Bayetech.Service
{
    public class ServiceBase<TEntity> : IBaseService<TEntity> where TEntity : class, new()
    {
        protected RepositoryBase repository = new RepositoryBase();
        public int Delete(object keyValue)
        {
            throw new NotImplementedException();
        }

        public TEntity FindEntity(object keyValue)
        {
            return repository.FindEntity<TEntity>(keyValue);
        }

        public IQueryable<TEntity> FindList(Expression<Func<TEntity, bool>> predicate)
        {
            return repository.IQueryable<TEntity>(predicate);
        }

        public int Insert(JObject json)
        {
            throw new NotImplementedException();
        }

        public int Update(JObject json)
        {
            throw new NotImplementedException();
        }
    }
}
