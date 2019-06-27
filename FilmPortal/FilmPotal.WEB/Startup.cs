using FilmPortal.DataLayer.Context;
using FilmPortal.DataLayer.Interfaces;
using FilmPortal.DataLayer.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace FilmPotal.WEB
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddScoped<IRepositoryContextFactory, RepositoryContextFactory>();
            services.AddScoped<IFilmRepository>(provider =>
                new FilmRepository(Configuration.GetConnectionString("FilmPortalDB"),
                provider.GetService<IRepositoryContextFactory>()));
            services.AddDbContext<RepositoryContext>(options => options.UseSqlServer(Configuration.GetConnectionString("FilmPortalDB")));
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}
