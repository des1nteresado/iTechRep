using System.Collections.Generic;
using FilmPortal.DataLayer.Entities;
using FilmPortal.DataLayer.Interfaces;
using FilmPortal.DataLayer.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace FilmPotal.WEB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmController : ControllerBase
    {
        protected readonly IRepository<Film> FilmRepository;

        public FilmController(IRepository<Film> filmRepository)
        {
            FilmRepository = filmRepository;
        }

        [Route("page")]
        [HttpGet]
        public IEnumerable<Film> GetFilms()
        {
            return FilmRepository.List();
        }
    }
}