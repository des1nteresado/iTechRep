using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
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

        public void Create(Film book)
        {
            filmContext.Films.Add(book);
        }

        public void Update(Film book)
        {
            filmContext.Entry(book).State = EntityState.Modified;
        }

        public IEnumerable<Film> Find(Func<Film, Boolean> predicate)
        {
            return filmContext.Films.Where(predicate).ToList();
        }

        public void Delete(int id)
        {
            Film book = filmContext.Films.Find(id);
            if (book != null)
                filmContext.Films.Remove(book);
        }
    }
}
