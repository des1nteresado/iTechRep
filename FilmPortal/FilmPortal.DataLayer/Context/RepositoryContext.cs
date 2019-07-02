using System.Collections.Generic;
using FilmPortal.DataLayer.Entities;
using Microsoft.EntityFrameworkCore;

namespace FilmPortal.DataLayer.Context
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions<RepositoryContext> options) : base(options)
        {
            Database.EnsureCreated();
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
            }, new Film
            {
                FilmId = 2,
                Name = "I, Robot",
                Description = "Desription",
                Year = 2004,
                Producer = "Alex Proyas",
                Marks = new List<Rating>(),
                Comments = new List<Comment>(),
                Genres = new List<Genre>()
            });

            modelBuilder.Entity<User>().HasData(new User
            {
                UserId = 1,
                Login = "admin",
                Password = "jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg=",
                isAdmin = true,
                Marks = new List<Rating>(),
                Comments = new List<Comment>()
            }, new User
            {
                UserId = 2,
                Login = "user",
                Password = "BPiZbadjt6lpsQKO4wB1aerzpjVIbdqyEdUSyFud+Ps=",
                isAdmin = false,
                Marks = new List<Rating>(),
                Comments = new List<Comment>()
            });
            base.OnModelCreating(modelBuilder);
        }
    }
}
