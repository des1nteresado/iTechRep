using System.Threading.Tasks;
using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Interfaces
{
    public interface IFilmService
    {
        Page<FilmLiteModel> GetFilms(int pageIndex, string genre = null);

        FilmLiteModel GetFilm(int filmId);

        void AddFilm(Film film);

        void DeleteFilm(int filmId);

        void UpdateFilm(Film film);
    }
}
