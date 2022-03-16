using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers.Views
{
    public class QuizController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
