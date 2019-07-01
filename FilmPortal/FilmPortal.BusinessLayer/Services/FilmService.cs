using System;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FilmPortal.BusinessLayer.Helpers;
using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;
using FilmPortal.DataLayer.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace FilmPortal.BusinessLayer.Services
{
    public class FilmService : IFilmService
    {
        private readonly IRepository<Film> _repository;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;

        public FilmService(IRepository<Film> repository, IConfiguration config, IMapper mapper)
        {
            _repository = repository;
            _config = config;
            _mapper = mapper;
        }

        public async Task<Page<FilmLiteModel>> GetFilms(int pageIndex, string genre = null)
        {
            var pageSize = _config.GetValue<int>("pageSize");
            var page = new Page<Film>() { CurrentPage = pageIndex + 1, PageSize = pageSize };
            var query = _repository.GetAllQueryable();

            if (!string.IsNullOrWhiteSpace(genre))
            {
                query = query.Where(p => p.Genres.Any(t => t.Name == genre));
            }

            page.Records = await query.OrderBy(p => p.Name).Skip(pageIndex * pageSize).Take(pageSize).ToListAsync();
            page.TotalPages = (int)Math.Ceiling(page.Records.Count / (double)pageSize);
            var result = _mapper.ToMappedPage<Film, FilmLiteModel>(page);

            return result;
        }

        public FilmLiteModel GetFilm(int filmId)
        {
            var film = _repository.GetById(filmId);
            return _mapper.Map<Film, FilmLiteModel>(film);
        }

        public void AddFilm(Film film)
        {
            _repository.Insert(film);
        }

        public void UpdateFilm(Film film)
        {
            _repository.Update(film);
        }

        public void DeleteFilm(int filmId)
        {
            _repository.Delete(filmId);
        }
    }
}
