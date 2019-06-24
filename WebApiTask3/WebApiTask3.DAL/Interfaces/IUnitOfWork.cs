using System;
using System.Collections.Generic;
using System.Text;
using WebApiTask3.DAL.Entities;

namespace WebApiTask3.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Film> Films { get; }
        void Save();
    }
}
