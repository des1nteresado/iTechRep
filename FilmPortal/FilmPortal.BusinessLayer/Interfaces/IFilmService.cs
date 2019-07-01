using System.Threading.Tasks;
using FilmPortal.BusinessLayer.Helpers;
using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Interfaces
{
    public interface IFilmService
    {
        Task<Page<FilmLiteModel>> GetFilms(int pageIndex, SortState sortOrder);

        FilmLiteModel GetFilm(int filmId);

        void AddFilm(Film film);

        void DeleteFilm(int filmId);

        void UpdateFilm(Film film);
    }
}
