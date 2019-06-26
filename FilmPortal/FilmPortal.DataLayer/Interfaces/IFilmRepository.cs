using System.Threading.Tasks;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.DataLayer.Interfaces
{
    public interface IFilmRepository
    {
        Task<Page<Film>> GetFilms(int index, int pageSize, string genre = null);
        Task<Film> GetFilm(int filmId);
        Task AddComment(Comment comment);
        Task AddGenre(Genre comment);
        Task AddRating(Rating rating);
        Task AddFilm(Film film);
        Task DeleteFilm(int filmId);
        Task DeleteComment(int commentId);
        Task DeleteGenre(int genreId);
    }
}
