using System.ComponentModel.DataAnnotations;

namespace WebApiTask3.DAL.Entities
{
    public class Film
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Country { get; set; }

        public int Year { get; set; }

        public string Producer { get; set; }

    }
}
