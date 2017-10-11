using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using Newtonsoft.Json;
using Bayetech.DAL.Entity;

namespace Bayetech.Service
{
    public class LoginSignService : ILoginSignService
    {
    
        public int CreatAccount(JObject json)
        {
            using (var db = new RepositoryBase().BeginTrans())
            {
                Account _account = (Account)JsonConvert.DeserializeObject(json["model"].ToString(), typeof(Account));
                int count = db.Insert(_account);
                db.Commit();
                return count;
            }
        }
        public int CheckAccount(string account)
        {
            throw new NotImplementedException();
        }
    }
}
