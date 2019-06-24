using Microsoft.EntityFrameworkCore;
using WebApiTask3.Entities;

namespace WebApiTask3.Context
{
    public class FilmContext : DbContext
    {
        public DbSet<Film> Films { get; set; }
        public FilmContext(DbContextOptions<FilmContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Film>().HasData(new Film { Id = 1, Name = "Back to the Future", Country = "USA", Year = 1986, Producer = "Roberto" }, new Film { Id = 2, Name = "Back to the Future 2", Country = "USA", Year = 1989, Producer = "Roberto" });
            base.OnModelCreating(modelBuilder);
        }

    }
}
