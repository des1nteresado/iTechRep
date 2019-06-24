using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using WebApiTask3.DAL.Entities;

namespace WebApiTask3.DAL.Context
{
    public class FilmContext : DbContext
    {
        public DbSet<Film> Films { get; set; }
        public FilmContext(DbContextOptions<FilmContext> options)
            : base(options)
        {
            //Database.EnsureCreated();
        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Film>().HasData(new Film { Id = 1, Name = "Back to the Future", Country = "USA", Year = 1986, Producer = "Roberto" }, new Film { Id = 2, Name = "Back to the Future 2", Country = "USA", Year = 1989, Producer = "Roberto" });
        //    base.OnModelCreating(modelBuilder);
        //}

    }


    public class FilmContextFactory : IDesignTimeDbContextFactory<FilmContext>
    {
        public FilmContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<FilmContext>();

            builder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=FilmsDB;Trusted_Connection=True;MultipleActiveResultSets=true;", b => b.MigrationsAssembly("WebApiTask3.DAL"));

            return new FilmContext(builder.Options);
        }
    }
}
