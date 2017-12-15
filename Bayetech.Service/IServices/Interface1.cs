using Bayetech.Core.Entity;
using System.Collections.Generic;

namespace Bayetech.Service.IServices
{
    public partial interface IMallTypeService
    {
        List<MallType> GetDataByGameId(int id);
    }
}
