using WebApiTask3.DAL.Entities;

namespace WebApiTask3.DAL.Context
{
    public static class FilmDataInitializer
    {
        public static void Initialize(FilmContext context)
        {
            context.Database.EnsureCreated();

            var films = new[]
            {
                    new Film
                    {
                        Name = "Back to the Future", Country = "USA", Year = 1986, Producer = "Roberto"
                    },
                    new Film
                    {
                        Name = "Back to the Future 2", Country = "USA", Year = 1989, Producer = "Roberto"
                    },
                    new Film
                    {
                        Name = "Back to the Future 3", Country = "USA", Year = 1989, Producer = "Roberto"
                    },
                    new Film
                    {
                        Name = "Back to the Future 34", Country = "USA", Year = 1989, Producer = "Roberto"
                    }
                };

            context.Films.AddRange(films);

            context.SaveChanges();
        }
    }
}
