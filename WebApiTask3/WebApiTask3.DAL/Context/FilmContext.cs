using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using WebApiTask3.DAL.Entities;

namespace WebApiTask3.DAL.Context
{
    public class FilmContext : DbContext
    {
        public DbSet<Film> Films { get; set; }
        public FilmContext(DbContextOptions<FilmContext> options)
            : base(options)
        { }

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
