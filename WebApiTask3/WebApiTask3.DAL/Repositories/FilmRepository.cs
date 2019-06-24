using System;
using System.Collections.Generic;
using System.Linq;
using WebApiTask3.DAL.Context;
using WebApiTask3.DAL.Entities;
using WebApiTask3.DAL.Interfaces;

namespace WebApiTask3.DAL.Repositories
{
    public class FilmRepository : IRepository<Film>
    {
        private FilmContext filmContext;

        public FilmRepository(FilmContext context)
        {
            this.filmContext = context;
        }

        public IEnumerable<Film> GetAll()
        {
            return filmContext.Films;
        }

        public Film Get(int id)
        {
            return filmContext.Films.Find(id);
        }

        public void Create(Film film)
        {
            filmContext.Films.Add(film);
            Save();
        }

        public void Update(Film film, Film filmUpdated)
        {
            film.Name = filmUpdated.Name;
            film.Country = filmUpdated.Country;
            film.Year = filmUpdated.Year;
            film.Producer = filmUpdated.Producer;
            Save();
        }

        public IEnumerable<Film> Find(Func<Film, Boolean> predicate)
        {
            return filmContext.Films.Where(predicate).ToList();
        }

        public void Delete(int id)
        {
            Film film = filmContext.Films.Find(id);
            if (film != null)
            {
                filmContext.Films.Remove(film);
                Save();
            }
        }

        public void Save()
        {
            filmContext.SaveChanges();
        }
    }
}
