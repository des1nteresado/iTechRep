using System.Collections.Generic;
using System.Linq;
using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.DataLayer.Entities;
using FilmPortal.DataLayer.Interfaces;

namespace FilmPortal.BusinessLayer.Services
{
    public class GenreService : IGenreService
    {
        private readonly IRepository<Genre> _repository;

        public GenreService(IRepository<Genre> repository)
        {
            _repository = repository;
        }

        public List<string> GetGenres()
        {
            var result = _repository.GetAll().Select(p => p.Name).Distinct().ToList();
            return result;
        }
    }
}
