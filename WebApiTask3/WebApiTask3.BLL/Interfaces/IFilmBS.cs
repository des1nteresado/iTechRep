using System;
using System.Collections.Generic;
using WebApiTask3.BLL.Entities;

namespace WebApiTask3.BLL.Interfaces
{
    public interface IFilmBS
    {
        IEnumerable<Film> GetAll();
        Film Get(int id);
        IEnumerable<Film> Find(Func<Film, bool> predicate);
        void Create(Film item);
        void Update(Film item);
        void Delete(int id);
    }
}
