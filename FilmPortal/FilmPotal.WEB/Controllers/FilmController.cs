using System;
using System.Threading.Tasks;
using FilmPortal.BusinessLayer.Helpers;
using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.BusinessLayer.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FilmPotal.WEB.Controllers
{
    [Route("api/[controller]")]
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

        [Authorize]
        [Route("film")]
        [HttpPost]
        public IActionResult AddFilm([FromBody] AddFilmRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _filmService.AddFilm(request);

            return BadRequest();
        }

        [Authorize]
        [Route("comment")]
        [HttpPost]
        public IActionResult AddComment([FromBody] AddCommentRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (_commentService.AddComment(request))
            {
                return Ok("Comment added successfully!");
            }

            return BadRequest();
        }

        [Route("rating")]
        [HttpPost]
        public IActionResult ModifyRating([FromBody] AddRatingRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _ratingService.AddRating(request);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok("Rating modified successfully!");

        }

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

        [Authorize]
        [Route("film")]
        [HttpDelete]
        public IActionResult DeleteFilm(int filmId)
        {
            if (_filmService.DeleteFilm(filmId))
            {
                return Ok("Film deleted successfully!");
            }

            return BadRequest();
        }
    }
}