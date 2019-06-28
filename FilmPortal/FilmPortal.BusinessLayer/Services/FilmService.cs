using System.Linq;
using AutoMapper;
using FilmPortal.BusinessLayer.Helpers;
using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;
using FilmPortal.DataLayer.Interfaces;
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

        public Page<FilmLiteModel> GetFilms(int pageIndex, string genre = null)
        {
            var pageSize = _config.GetValue<int>("pageSize");
            var page = new Page<Film>() { CurrentPage = pageIndex, PageSize = pageSize };
            var query = _repository.List().AsQueryable();

            if (!string.IsNullOrWhiteSpace(genre))
            {
                query = query.Where(p => p.Genres.Any(t => t.Name == genre));
            }

            page.TotalPages = query.Count();
            page.Records = query.OrderByDescending(p => p.Name).Skip(pageIndex * pageSize).Take(pageSize).ToList();
            var result = _mapper.ToMappedPage<Film, FilmLiteModel>(page);

            return result;
        }

        public Film GetFilm(int filmId)
        {
            return _repository.GetById(filmId);
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


        //public async Task<List<string>> GetGenresAsync();
        //{

        //}
        //public async Task AddCommentAsync(Comment comment)
        //{
        //    using (var context = ContextFactory.CreateDbContext(ConnectionString))
        //    {
        //        context.Comments.Add(comment);
        //        await context.SaveChangesAsync();
        //    }
        //}

        //public async Task AddGenreAsync(Genre comment)
        //{
        //    using (var context = ContextFactory.CreateDbContext(ConnectionString))
        //    {
        //        context.Genres.Add(comment);
        //        await context.SaveChangesAsync();
        //    }
        //}

        //public async Task AddRatingAsync(Rating rating)
        //{
        //    using (var context = ContextFactory.CreateDbContext(ConnectionString))
        //    {
        //        context.Marks.Add(rating);
        //        await context.SaveChangesAsync();
        //    }
        //}



        //public async Task DeleteCommentAsync(int commentId)
        //{
        //    using (var context = ContextFactory.CreateDbContext(ConnectionString))
        //    {
        //        var comment = context.Comments.Find(commentId);
        //        if (comment != null)
        //        {
        //            context.Comments.Remove(comment);
        //        }
        //        await context.SaveChangesAsync();
        //    }
        //}

        //public async Task DeleteGenreAsync(int genreId)
        //{
        //    using (var context = ContextFactory.CreateDbContext(ConnectionString))
        //    {
        //        var genre = context.Genres.Find(genreId);
        //        if (genre != null)
        //        {
        //            context.Genres.Remove(genre);
        //        }
        //        await context.SaveChangesAsync();
        //    }
        //}

        //public async Task DeleteRatingAsync(int ratingId)
        //{
        //    using (var context = ContextFactory.CreateDbContext(ConnectionString))
        //    {
        //        var mark = context.Marks.Find(ratingId);
        //        if (mark != null)
        //        {
        //            context.Marks.Remove(mark);
        //        }
        //        await context.SaveChangesAsync();
        //    }
        //}
    }
}
