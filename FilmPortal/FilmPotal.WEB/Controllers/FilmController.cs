using System.Threading.Tasks;
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
        private readonly ICommentService _commentService;


        public FilmController(IFilmService filmService, ICommentService commentService)
        {
            _filmService = filmService;
            _commentService = commentService;
        }

        [Route("page")]
        [HttpGet]
        public Task<Page<FilmLiteModel>> GetFilms(int pageIndex, string genre)
        {
            return _filmService.GetFilms(pageIndex, genre);
        }

        [Route("film")]
        [HttpGet]
        public FilmLiteModel GetFilm(int filmId)
        {
            return _filmService.GetFilm(filmId);
        }


        [Route("comment")]
        [HttpPost]
        public void AddComment([FromBody] AddCommentRequest request)
        {
            _commentService.AddComment(request);
        }



        [Authorize]
        [Route("getlogin")]
        public IActionResult GetLogin()
        {
            return Ok($"Ваш логин: {User.Identity.Name}");
        }
    }
}