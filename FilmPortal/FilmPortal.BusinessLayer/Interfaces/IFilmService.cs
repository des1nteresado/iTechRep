using System.Threading.Tasks;
using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Interfaces
{
    public interface IFilmService
    {
        Page<FilmLiteModel> GetFilms(int pageIndex, string genre = null);

        Film GetFilm(int filmId);

        //Task<List<string>> GetGenresAsync();

        //Task AddCommentAsync(Comment comment);

        //Task AddGenreAsync(Genre comment);

        //Task AddRatingAsync(Rating rating);

        void AddFilm(Film film);

        void DeleteFilm(int filmId);

        void UpdateFilm(Film film);

        //Task DeleteCommentAsync(int commentId);

        //Task DeleteGenreAsync(int genreId);

        //Task DeleteRatingAsync(int ratingId);
    }
}
