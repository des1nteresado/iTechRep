using Microsoft.EntityFrameworkCore;
using WebApiTask3.DAL.Entities;

namespace WebApiTask3.DAL.Context
{
    class FilmContext : DbContext
    {
        public DbSet<Film> Films { get; set; }
        public FilmContext(DbContextOptions<FilmContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

    }
}
