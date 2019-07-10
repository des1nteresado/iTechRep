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
            modelBuilder.Entity<User>().Property(u => u.Login).IsRequired();
            modelBuilder.Entity<User>().Property(u => u.Password).IsRequired();

            modelBuilder.Entity<Film>().HasData(new Film
            {
                FilmId = 1,
                Name = "I am Legend",
                Description = "Robert Neville is a brilliant scientist, but even he could not contain the terrible virus that was unstoppable, incurable, and man-made. Somehow immune, Neville is now the last human survivor in what is left of New York City and maybe the world.\r\n\r\nFor three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone.\r\n\r\nMutant victims of the plague—The Infected—lurk in the shadows, watching Neville's every move, waiting for him to make a fatal mistake...",
                Year = 2007,
                Producer = "Frensis Lourens",
                Marks = new List<Rating>(),
                Comments = new List<Comment>(),
                Genres = new List<Genre>(),
                Images = new List<Image>()
            }, new Film
            {
                FilmId = 2,
                Name = "I, Robot",
                Description = "In 2035, techno-phobic homicide detective Del Spooner of the Chicago PD heads the investigation of the apparent suicide of leading robotics scientist, Dr. Alfred Lanning. Unconvinced of the motive, Spooner's investigation into Lanning's death reveals a trail of secrets and agendas within the USR (United States Robotics) corporation and suspicions of murder. Little does he know that his investigation would lead to uncovering a larger threat to humanity.",
                Year = 2004,
                Producer = "Alex Proyas",
                Marks = new List<Rating>(),
                Comments = new List<Comment>(),
                Genres = new List<Genre>(),
                Images = new List<Image>()

            });


            modelBuilder.Entity<Image>().HasData(new Image
            {
                ImageId = 1,
                FilmId = 1,
                Path = "/images/legend1.jpg"
            }, new Image
            {
                ImageId = 2,
                FilmId = 1,
                Path = "/images/legend2.jpg"
            },
               new Image
               {
                   ImageId = 3,
                   FilmId = 2,
                   Path = "/images/robot1.jpg"
               },
            new Image
            {
                ImageId = 4,
                FilmId = 2,
                Path = "/images/robot2.jpg"
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
