using System;
using System.Collections.Generic;
using Entities = WebApiTask3.DAL.Entities;

namespace WebApiTask3.BLL.Interfaces
{
    public interface IFilmBS
    {
        IEnumerable<Entities.Film> GetAll();
        Entities.Film Get(int id);
        IEnumerable<Entities.Film> Find(Func<Entities.Film, bool> predicate);
        void Create(Entities.Film item);
        void Update(Entities.Film item, Entities.Film itemUpdated);
        void Delete(int id);
        void Save();
    }
}
