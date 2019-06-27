using System.Collections.Generic;

namespace FilmPortal.DataLayer.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> List(); 
        T GetById(int id); 
        void Insert(T item); 
        void Update(T item); 
        void Delete(int id); 
    }
}
