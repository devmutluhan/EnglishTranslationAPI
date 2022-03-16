using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers.Views
{
    public class VocableController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
