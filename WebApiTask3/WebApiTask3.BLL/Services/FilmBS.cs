using System;
using System.Collections.Generic;
using WebApiTask3.BLL.Interfaces;
using WebApiTask3.DAL.Interfaces;
using Entities = WebApiTask3.DAL.Entities;

namespace WebApiTask3.BLL.Services
{
    public class FilmBS : IFilmBS
    {
        private IRepository<Entities.Film> _filmRepository;

        public FilmBS(IRepository<Entities.Film> filmRepository)
        {
            if (filmRepository != null)
                _filmRepository = filmRepository;
        }

        public IEnumerable<Entities.Film> GetAll()
        {
            return _filmRepository.GetAll();
        }

        public Entities.Film Get(int id)
        {
            return _filmRepository.Get(id);

        }

        public IEnumerable<Entities.Film> Find(Func<Entities.Film, bool> predicate)
        {
            return _filmRepository.Find(predicate);

        }

        public void Create(Entities.Film item)
        {
            _filmRepository.Create(item);
            Save();
        }

        public void Update(Entities.Film item, Entities.Film itemUpdated)
        {
            _filmRepository.Update(item, itemUpdated);
            Save();
        }

        public void Delete(int id)
        {
            _filmRepository.Delete(id);
            Save();
        }

        public void Save()
        {
            _filmRepository.Save();
        }
    }
}
