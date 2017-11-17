using Bayetech.DAL.Entity;
using System.Collections.Generic;

namespace Bayetech.Service.IServices
{
    public partial interface IMallTypeService
    {
        List<MallType> GetDataByGameId(int type, int id);
    }
}
