using System.Web.Mvc;

namespace Bayetech.Web.Controllers
{
    public class HomeController : Controller
    { 
        public ActionResult Index() 
        {
            ViewBag.Title = "Home Page";

            //Bayetech.Core.Common.CreatOrderNo();
            return View();
        }
    }
}
