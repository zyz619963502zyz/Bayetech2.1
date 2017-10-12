using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service.Interface
{
    public interface IBaseService
    {
        int Insert(JObject json);
        int Update(JObject json);
        int Delete(object keyValue);
        JObject FindEntity(object keyValue);
    }
}
