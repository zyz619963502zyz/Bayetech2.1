using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Bayetech.DAL.Entity;
using Newtonsoft.Json.Linq;

namespace Bayetech.Service.Services
{
    public partial class vw_OrderInfoService : IDealCheckService
    {

        //获取
        public JObject GetCheckInfo()
        {
            //using (var db = new RepositoryBase())
            //{
            //    Account _account = db.FindEntity<Account>(c => c.UserName == account);
            //    return _account == null ? true : false;//true不重复可申请，false不可申请
            //}
            throw new Exception();
        }

    }
}
