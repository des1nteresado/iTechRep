using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Interfaces
{
    public interface IFilmService
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
        Task DeleteRating(int ratingId);

    }
}
