using Bayetech.Core;
using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using System;

namespace Bayetech.Service
{
    internal interface IOrderService
    {
        JObject CreatOrder(MallOrder order);

        JObject GetOrderInfo(v_framework_notify order, DateTime? startTime, DateTime? endTime, Pagination page = null);

    }

}