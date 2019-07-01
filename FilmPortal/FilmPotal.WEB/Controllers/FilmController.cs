using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.BusinessLayer.Models;
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

        //[Route("comment")]
        //[HttpPost]
        //public async Task AddComment([FromBody] AddCommentRequest request)
        //{
        //    await _blogService.AddComment(request);
        //}

        //[Authorize]
        //[Route("comment")]
        //[HttpDelete]
        //public async Task DeleteComment(int commentId)
        //{
        //    await _blogService.DeleteComment(commentId);
        //}

        //[Authorize]
        //[Route("post")]
        //[HttpPost]
        //public async Task AddPost([FromBody] AddPostRequest request)
        //{
        //    await _blogService.AddPost(request);
        //}

        //[Authorize]
        //[Route("post")]
        //[HttpDelete]
        //public async Task DeletePost(int postId)
        //{
        //    await _blogService.DeletePost(postId);
        //}

        //[Route("genres")]
        //[HttpGet]
        //public async Task<List<string>> GetTags()
        //{
        //    return await _blogService.GetTags();
        //}
    }
}