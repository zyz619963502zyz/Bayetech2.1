using Bayetech.DAL.Entity;
using Bayetech.Service.IServices;
using System.Collections.Generic;
using System.Linq;

namespace Bayetech.Service.Services
{
    public partial class MallTypeService: IMallTypeService
    {
        public List<MallType> GetDataByGameId(int type,int id)
        {
            var db = GetContext();
            var query = (from r in db.Relationship join m in db.MallType on r.Key equals m.Id
                        where r.Type == type && r.ParentKey == id
                        select new { Id = r.Key, Title = m.Name });
            return query.ToList().Select(m=>new MallType {Id = m.Id,Name = m.Title }).ToList();
        }
    }
}
