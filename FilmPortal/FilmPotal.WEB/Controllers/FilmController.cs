using System.Threading.Tasks;
using FilmPortal.BusinessLayer.Helpers;
using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.BusinessLayer.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FilmPotal.WEB.Controllers
{
    [Route("catalog")]
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

        [Route("films")]
        [HttpGet]
        public async Task<IActionResult> GetFilms(int pageIndex, SortState sortOrder)
        {
            var page = await _filmService.GetFilms(pageIndex, sortOrder);

            if (page == null)
            {
                return NoContent();
            }

            return Ok(page);
        }

        [Route("film")]
        [HttpGet]
        public IActionResult GetFilm(int filmId)
        {
            var film = _filmService.GetFilm(filmId);

            if (film == null)
            {
                return NoContent();
            }

            return Ok(film);
        }

        [Route("comment")]
        [HttpPost]
        public IActionResult AddComment([FromBody] AddCommentRequest request)
        {
            if (_commentService.AddComment(request))
            {
                return Ok("Comment added successfully!");
            }

            return BadRequest();
        }

        [Route("rating")]
        [HttpPost]
        public IActionResult AddRating([FromBody] AddRatingRequest request)
        {
            if (_ratingService.AddRating(request))
            {
                return Ok("Rating added successfully!");
            }

            return BadRequest();
        }

        //[Route("comment")]
        //[HttpPut]
        //public IActionResult UpdateComment([FromBody] Comment request)
        //{
        //    if (_commentService.UpdateComment(request))
        //    {
        //        return Ok("Comment updated successfully!");
        //    }

        //    return BadRequest();
        //}

        //[Route("rating")]
        //[HttpPut]
        //public IActionResult UpdateRating([FromBody] Rating request)
        //{
        //    if (_ratingService.AddRating(request))
        //    {
        //        return Ok("Rating updated successfully!");
        //    }

        //    return BadRequest();
        //}

        [Route("comment")]
        [HttpDelete]
        public IActionResult DeleteComment(int commentId)
        {
            if (_commentService.DeleteComment(commentId))
            {
                return Ok("Comment deleted successfully!");
            }

            return BadRequest();
        }

        [Route("rating")]
        [HttpDelete]
        public IActionResult DeleteRating(int ratingId)
        {
            if (_ratingService.DeleteRating(ratingId))
            {
                return Ok("Rating deleted successfully!");
            }

            return BadRequest();
        }

        [Authorize]
        [Route("getlogin")]
        public IActionResult GetLogin()
        {
            return Ok($"Ваш логин: {User.Identity.Name}");
        }
    }
}