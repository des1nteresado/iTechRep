using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using Microsoft.EntityFrameworkCore;
using WebApiTask3.DAL.Context;
using WebApiTask3.DAL.Entities;
using WebApiTask3.DAL.Interfaces;

namespace WebApiTask3.DAL.Repositories
{
    //class FilmRepository : IRepository<Film>
    //{
    //    private FilmContext db;

    //    public FilmRepository(FilmContext context)
    //    {
    //        this.db = context;
    //    }

    //    public IEnumerable<Film> GetAll()
    //    {
    //        return db.Films;
    //    }

    //    public Film Get(int id)
    //    {
    //        return db.Films.Find(id);
    //    }

    //    public void Create(Film book)
    //    {
    //        db.Films.Add(book);
    //    }

    //    public void Update(Film book)
    //    {
    //        db.Entry(book).State = EntityState.Modified;
    //    }

    //    public IEnumerable<Film> Find(Func<Film, Boolean> predicate)
    //    {
    //        return db.Films.Where(predicate).ToList();
    //    }

    //    public void Delete(int id)
    //    {
    //        Film book = db.Films.Find(id);
    //        if (book != null)
    //            db.Films.Remove(book);
    //    }
    //}

}
