using Bayetech.Core;
using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using System;

namespace Bayetech.Service.IServices
{
    internal interface IOrderService
    {
        JObject CreatOrder(MallOrder order);

        JObject GetOrderInfo(vw_MallOrderInfo order, DateTime startTime, DateTime endTime, Pagination page = null);

    }

}