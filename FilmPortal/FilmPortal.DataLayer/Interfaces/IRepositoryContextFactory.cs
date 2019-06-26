using FilmPortal.DataLayer.Context;

namespace FilmPortal.DataLayer.Interfaces
{
    public interface IRepositoryContextFactory
    {
        RepositoryContext CreateDbContext(string connectionString);
    }
}
