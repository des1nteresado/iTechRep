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
using Microsoft.EntityFrameworkCore.Internal;
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

        public async Task<Page<FilmLiteModel>> GetFilms(int pageIndex, SortState stateOrder = SortState.NameAsc)
        {
            var pageSize = _config.GetValue<int>("pageSize");
            var page = new Page<Film>() { CurrentPage = pageIndex + 1, PageSize = pageSize };
            var query = _repository.GetAllQueryable();


            switch (stateOrder)
            {
                case SortState.NameAsc:
                    {
                        query = query.OrderBy(p => p.Name);
                        break;
                    }
                case SortState.NameDesc:
                    {
                        query = query.OrderByDescending(p => p.Name);
                        break;
                    }
                case SortState.YearAsc:
                    {
                        query = query.OrderBy(p => p.Year);
                        break;
                    }
                case SortState.YearDesc:
                    {
                        query = query.OrderByDescending(p => p.Year);
                        break;
                    }
                case SortState.MarkAsc:
                    {
                        query = query.Where(p => p.Marks != null && p.Marks.Any())
                            .OrderBy(item => item.Marks.Average(p => p.Mark))
                            .Union(query.Where(p => p.Marks == null || !p.Marks.Any()).OrderBy(p => p.Name));
                        break;
                    }
                case SortState.MarkDesc:
                    {
                        query = query.Where(p => p.Marks == null || !p.Marks.Any()).OrderBy(p => p.Name)
                            .Union(query.Where(p => p.Marks != null && p.Marks.Any())
                            .OrderByDescending(item => item.Marks.Average(p => p.Mark)));
                        break;
                    }
                default:
                    {
                        query = query.OrderBy(p => p.Name);
                        break;
                    }

            }

            page.Records = await query.Skip(pageIndex * pageSize).Take(pageSize).ToListAsync();
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
