using System.Collections.Generic;
using System.Linq;
using FilmPortal.DataLayer.Context;
using FilmPortal.DataLayer.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FilmPortal.DataLayer.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly RepositoryContext _context;

        public Repository(RepositoryContext context)
        {
            _context = context;
        }

        public virtual IEnumerable<T> List()
        {
            return _context.Set<T>().AsEnumerable();
        }

        public IQueryable<T> GetAllQueryable()
        {
            return _context.Set<T>();
        }

        public T GetById(int id)
        {
            return _context.Set<T>().Find(id);
        }

        public void Insert(T item)
        {
            _context.Set<T>().Add(item);
            _context.SaveChanges();
        }

        public void Update(T item)
        {
            _context.Entry(item).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var item = GetById(id);
            _context.Set<T>().Remove(item);
            _context.SaveChanges();
        }
    }
}
