using System.Collections.Generic;
using FilmPortal.DataLayer.Entities;
using Microsoft.EntityFrameworkCore;

namespace FilmPortal.DataLayer.Context
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions<RepositoryContext> options) : base(options)
        {

        }

        public DbSet<Film> Films { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Rating> Marks { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Genre> Genres { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Film>().HasData(new Film
            {
                FilmId = 1,
                Name = "I am Legend",
                Description = "Desription",
                Year = 2007,
                Producer = "Frensis Lourens",
                Marks = new List<Rating>(),
                Comments = new List<Comment>(),
                Genres = new List<Genre>()
            });
            base.OnModelCreating(modelBuilder);
        }
    }
}
