using System;
using System.Linq;
using System.Threading.Tasks;
using FilmPortal.DataLayer.Entities;
using FilmPortal.DataLayer.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FilmPortal.DataLayer.Repositories
{
    class FilmRepository : BaseRepository, IFilmRepository
    {
        public FilmRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory)
        { }

        public async Task<Page<Film>> GetFilms(int index, int pageSize)
        {
            var result = new Page<Film>() { CurrentPage = index, PageSize = pageSize };

            using (var context = ContextFactory.CreateDbContext(ConnectionString)) 
            {
                var query = context.Films.AsQueryable();

                result.TotalPages = await query.CountAsync();
                result.Records = await query.Include(p => p.Marks).Include(p => p.Comments).OrderByDescending(p => p.Name).Skip(index * pageSize).Take(pageSize).ToListAsync();
            }

            return result;
        }

        public async Task<Film> GetFilm(int filmId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Films.Include(p => p.Marks).Include(p => p.Comments)
                    .FirstOrDefaultAsync(p => p.FilmId == filmId);
            }
        }

        public Task AddComment(Comment comment)
        {
            throw new NotImplementedException();
        }

        public Task AddRating(Rating rating)
        {
            throw new NotImplementedException();
        }

        public Task AddFilm(Film film)
        {
            throw new NotImplementedException();
        }

        public Task DeleteFilm(int filmId)
        {
            throw new NotImplementedException();
        }

        public Task DeleteComment(int commentId)
        {
            throw new NotImplementedException();
        }
    }
}
