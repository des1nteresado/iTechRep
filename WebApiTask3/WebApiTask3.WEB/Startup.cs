using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebApiTask3.DAL.Context;
using WebApiTask3.DAL.Interfaces;
using WebApiTask3.DAL.Repositories;

namespace WebApiTask3.WEB
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //Also make top level configuration available (for EF configuration and access to connection string)
            services.AddSingleton(Configuration); //IConfigurationRoot
            services.AddSingleton<IConfiguration>(Configuration);

            //Add Support for strongly typed Configuration and map to class
            services.AddOptions();

            //Set database.
            services.AddDbContext<FilmContext>(opts => opts.UseSqlServer(Configuration["ConnectionString:FilmsDB"],
                b => b.MigrationsAssembly("WebApiTask3.DAL")));


            //Instance injection
            //services.AddScoped(typeof(IRepository<>), typeof(FilmRepository));
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
