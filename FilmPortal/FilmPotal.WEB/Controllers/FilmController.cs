using System.Threading.Tasks;
using FilmPortal.BusinessLayer.Helpers;
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
        private readonly IRatingService _ratingService;


        public FilmController(IFilmService filmService, ICommentService commentService, IRatingService ratingService)
        {
            _filmService = filmService;
            _commentService = commentService;
            _ratingService = ratingService;
        }

        [Route("page")]
        [HttpGet]
        public Task<Page<FilmLiteModel>> GetFilms(int pageIndex, SortState sortOrder)
        {
            return _filmService.GetFilms(pageIndex, sortOrder);
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

        [Route("rating")]
        [HttpPost]
        public void AddRating([FromBody] AddRatingRequest request)
        {
            _ratingService.AddRating(request);
        }

        [Authorize]
        [Route("getlogin")]
        public IActionResult GetLogin()
        {
            return Ok($"Ваш логин: {User.Identity.Name}");
        }
    }
}