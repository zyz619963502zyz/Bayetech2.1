using Newtonsoft.Json.Linq;
using System.Web.Mvc;

namespace Bayetech.Admin01.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public JObject GetMessage() {
            var ret = new JObject();
            ret.Add("mess","OK");
            return ret;
        }
    }
}