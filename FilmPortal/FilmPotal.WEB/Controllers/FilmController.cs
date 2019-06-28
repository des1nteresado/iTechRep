using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.BusinessLayer.Models;
using Microsoft.AspNetCore.Mvc;

namespace FilmPotal.WEB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmController : ControllerBase
    {
        protected readonly IFilmService _filmService;

        public FilmController(IFilmService filmService)
        {
            _filmService = filmService;
        }

        [Route("page")]
        [HttpGet]
        public Page<FilmLiteModel> GetFilms(int pageIndex, string genre)
        {
            return _filmService.GetFilms(pageIndex, genre);
        }
    }
}