using Bayetech.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using Newtonsoft.Json;

namespace Bayetech.Service
{
    public class ServiceBase<TEntity> : IArticleService where TEntity : class, new()
    {
        public int Delete(object keyValue)
        {
            throw new NotImplementedException();
        }

        public JObject FindEntity(object keyValue)
        {
            var obj = new RepositoryBase().FindEntity<TEntity>(keyValue);
            var json = JObject.Parse(JsonConvert.SerializeObject(obj));
            return json;
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
