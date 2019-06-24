﻿using System;
using System.Collections.Generic;
using System.Text;

namespace WebApiTask3.DAL.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        T Get(int id);
        IEnumerable<T> Find(Func<T, bool> predicate);
        void Create(T item);
        void Update(T item, T itemUpdated);
        void Delete(int id);
        void Save();
    }
}
