using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.BusinessLayer.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FilmPotal.WEB.Controllers
{
    [Route("films")]
    [ApiController]
    public class FilmController : ControllerBase
    {
        private readonly IFilmService _filmService;

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

        [Route("film")]
        [HttpGet]
        public FilmLiteModel GetFilm(int filmId)
        {
            return _filmService.GetFilm(filmId);
        }

        [Authorize]
        [Route("getlogin")]
        public IActionResult GetLogin()
        {
            return Ok($"Ваш логин: {User.Identity.Name}");
        }
    }
}