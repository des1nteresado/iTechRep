using System.Collections.Generic;
using System.Linq;

namespace FilmPortal.DataLayer.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        IQueryable<T> GetAllQueryable();
        T GetById(int id);
        void Insert(T item);
        void Update(T item);
        void Delete(int id);
    }
}
