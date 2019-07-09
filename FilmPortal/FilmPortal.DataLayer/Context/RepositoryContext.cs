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
                Description = "Адаптация одноименного романа Ричарда Мэтисона о неизвестном вирусе, унесшем жизни половины населения земного шара, а остальную половину превратившего в вампиров. Сюжет строится вокруг единственного уцелевшего человека с необъяснимым иммунитетом, ночами держащего бесконечную осаду упырей, а днем пытающегося найти противоядие и выяснить причины эпидемии.",
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
                Description = "Действие фильма происходит в будущем (2035 г.), где роботы являются обычными помощниками человека. Главный герой — полицейский, «не переваривающий» роботов, расследует дело об убийстве, в которое оказывается вовлечен робот.\r\n\r\nРечь идет о возможном нарушении «Закона о Роботах» (робот никогда не поднимет руки на человека), что в принципе невозможно. Ситуация близка к катастрофической: если машины могут нарушать этот закон, то уже ничто не остановит их от захвата контроля над людьми, тем более, что человечество уже давно стало полностью зависимо от роботов…",
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
