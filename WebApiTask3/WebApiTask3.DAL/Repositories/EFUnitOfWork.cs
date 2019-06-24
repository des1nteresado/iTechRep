using System;
using WebApiTask3.DAL.Context;
using WebApiTask3.DAL.Entities;
using WebApiTask3.DAL.Interfaces;

namespace WebApiTask3.DAL.Repositories
{
    //public class EFUnitOfWork : IUnitOfWork
    //{
    //    private FilmContext db;
    //    private FilmRepository filmRepository;

    //    public EFUnitOfWork()
    //    {
    //        db = new FilmContext(connectionString);
    //    }

    //    public IRepository<Film> Films
    //    {
    //        get
    //        {
    //            if (filmRepository == null)
    //                filmRepository = new FilmRepository(db);
    //            return filmRepository;
    //        }
    //    }

    //    public void Save()
    //    {
    //        db.SaveChanges();
    //    }

    //    private bool disposed = false;

    //    public virtual void Dispose(bool disposing)
    //    {
    //        if (!this.disposed)
    //        {
    //            if (disposing)
    //            {
    //                db.Dispose();
    //            }
    //            this.disposed = true;
    //        }
    //    }

    //    public void Dispose()
    //    {
    //        Dispose(true);
    //        GC.SuppressFinalize(this);
    //    }
    //}
}
