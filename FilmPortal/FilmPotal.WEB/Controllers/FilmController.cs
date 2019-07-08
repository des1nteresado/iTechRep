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

            try
            {
                _filmService.AddFilm(request);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok("Film added successfully!");
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

            try
            {
                _commentService.AddComment(request);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


            return Ok("Comment added successfully!");
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
            try
            {
                _commentService.DeleteComment(commentId);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok("Comment deleted successfully!");
        }

        [Authorize]
        [Route("film")]
        [HttpDelete]
        public IActionResult DeleteFilm(int filmId)
        {
            try
            {
                _filmService.DeleteFilm(filmId);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok("Film deleted successfully!");
        }
    }
}