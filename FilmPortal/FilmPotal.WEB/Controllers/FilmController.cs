using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FilmPortal.DataLayer.Entities;
using FilmPortal.DataLayer.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FilmPotal.WEB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmController : ControllerBase
    {
        protected readonly IFilmRepository _filmRepository;

        public FilmController(IFilmRepository filmRepository)
        {
            _filmRepository = filmRepository;
        }

        [Route("page")]
        [HttpGet]
        public async Task<Page<Film>> GetFilms(int pageIndex, string genre)
        {
            return await _filmRepository.GetFilms(pageIndex, 10, genre);
        }
    }
}