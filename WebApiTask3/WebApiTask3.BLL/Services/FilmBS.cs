using System;
using System.Collections.Generic;
using System.Text;
using WebApiTask3.BLL.Entities;
using WebApiTask3.BLL.Interfaces;

namespace WebApiTask3.BLL.Services
{
    public class FilmBS : IFilmBS
    {

        public IEnumerable<Film> GetAll()
        {
            throw new NotImplementedException();
        }

        public Film Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Film> Find(Func<Film, bool> predicate)
        {
            throw new NotImplementedException();
        }

        public void Create(Film item)
        {
            throw new NotImplementedException();
        }

        public void Update(Film item)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
