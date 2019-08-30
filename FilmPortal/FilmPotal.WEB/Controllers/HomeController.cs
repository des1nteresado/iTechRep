using Microsoft.AspNetCore.Mvc;

namespace FilmPotal.WEB.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}