using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Headers;
using Serilog;
using WebApiTask3.BLL.Interfaces;
using WebApiTask3.BLL.Services;
using WebApiTask3.DAL.Context;
using WebApiTask3.DAL.Entities;
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

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton(Configuration);
            services.AddSingleton<IConfiguration>(Configuration);
            services.AddOptions();
            services.AddDbContext<FilmContext>(opts => opts.UseSqlServer(Configuration["ConnectionString:FilmsDB"],
                b => b.MigrationsAssembly("WebApiTask3.DAL")));
            services.AddScoped(typeof(IAutoMapConverter<,>), typeof(AutoMapConverter<,>));
            services.AddScoped<IRepository<Film>, FilmRepository>();
            services.AddScoped<IFilmBS, FilmBS>();

            services.AddMvc()
                .AddXmlDataContractSerializerFormatters()
                .AddMvcOptions(opts =>
                {
                    opts.FormatterMappings.SetMediaTypeMappingForFormat("xml", new MediaTypeHeaderValue("application/xml"));
                });
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory,
            IConfiguration configuration)
        {

            Log.Logger = new LoggerConfiguration()
                .WriteTo.RollingFile(pathFormat: "logs\\log-{Date}.log")
                .CreateLogger();

            if (env.IsDevelopment())
            {
                loggerFactory
                    .AddDebug()
                    .AddConsole()
                    .AddSerilog();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                loggerFactory
                    .AddSerilog();
                app.UseExceptionHandler(errorApp =>

                    errorApp.Run(async (context) =>
                    {
                        context.Response.StatusCode = 500;
                        context.Response.ContentType = "text/html";
                        await context.Response.WriteAsync("<html><body>\r\n");
                        await context.Response.WriteAsync(
                            "We're sorry, we encountered an un-expected issue with your application.<br>\r\n");

                        var error = context.Features.Get<IExceptionHandlerFeature>();
                        if (error != null)
                        {
                            await context.Response.WriteAsync("<br>Error: " +
                                                              HtmlEncoder.Default.Encode(error.Error.Message) + "<br>\r\n");
                        }
                        await context.Response.WriteAsync("<br><a href=\"/\">Home</a><br>\r\n");
                        await context.Response.WriteAsync("</body></html>\r\n");
                        await context.Response.WriteAsync(new string(' ', 512));
                    }));
            }

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
