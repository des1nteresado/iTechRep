using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Interfaces
{
    public interface IRatingService
    {
        void AddRating(AddRatingRequest rating);

        void DeleteRating(int ratingId);

        int GetRatingFilm(int userId, int filmId);
    }
}
