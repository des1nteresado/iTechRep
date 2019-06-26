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

        public async Task<Page<Film>> GetFilms(int index, int pageSize, string genre = null)
        {
            var result = new Page<Film>() { CurrentPage = index, PageSize = pageSize };

            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Films.AsQueryable();

                if (!string.IsNullOrWhiteSpace(genre))
                {
                    query = query.Where(p => p.Genres.Any(t => t.Name == genre));
                }

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

        public async Task AddComment(Comment comment)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Comments.Add(comment);
                await context.SaveChangesAsync();
            }
        }

        public async Task AddGenre(Genre comment)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Genres.Add(comment);
                await context.SaveChangesAsync();
            }
        }

        public async Task AddRating(Rating rating)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Marks.Add(rating);
                await context.SaveChangesAsync();
            }
        }

        public async Task AddFilm(Film film)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Films.Add(film);
                await context.SaveChangesAsync();
            }
        }

        public async Task DeleteFilm(int filmId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var film = context.Films.Find(filmId);
                if (film != null)
                {
                    context.Films.Remove(film);
                }
                await context.SaveChangesAsync();
            }
        }

        public async Task DeleteComment(int commentId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var comment = context.Comments.Find(commentId);
                if (comment != null)
                {
                    context.Comments.Remove(comment);
                }
                await context.SaveChangesAsync();
            }
        }

        public async Task DeleteGenre(int genreId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var genre = context.Genres.Find(genreId);
                if (genre != null)
                {
                    context.Genres.Remove(genre);
                }
                await context.SaveChangesAsync();
            }
        }
    }
}
