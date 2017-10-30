using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Bayetech.Web.Controllers
{
    public class PointTradingController : BaseController
    {
        GameRequirementsService gameRequirementsService = new GameRequirementsService();

        // GET: PointTrading
        [HttpGet]
        public IHttpActionResult GameRequirementsList(int value)
        {
            try
            {
                var list = gameRequirementsService.GameRequirementsList();
                return Json(list);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}