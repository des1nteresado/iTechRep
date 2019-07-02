﻿// <auto-generated />
using System;
using FilmPortal.DataLayer.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FilmPortal.DataLayer.Migrations
{
    [DbContext(typeof(RepositoryContext))]
    [Migration("20190628101259_Update-Models")]
    partial class UpdateModels
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FilmPortal.DataLayer.Entities.Comment", b =>
                {
                    b.Property<int>("CommentId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Body");

                    b.Property<DateTime>("CreateDate");

                    b.Property<int>("FilmId");

                    b.Property<int>("UserId");

                    b.HasKey("CommentId");

                    b.HasIndex("FilmId");

                    b.HasIndex("UserId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("FilmPortal.DataLayer.Entities.Film", b =>
                {
                    b.Property<int>("FilmId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<string>("Producer");

                    b.Property<int>("Year");

                    b.HasKey("FilmId");

                    b.ToTable("Films");

                    b.HasData(
                        new
                        {
                            FilmId = 1,
                            Description = "Desription",
                            Name = "I am Legend",
                            Producer = "Frensis Lourens",
                            Year = 2007
                        });
                });

            modelBuilder.Entity("FilmPortal.DataLayer.Entities.Genre", b =>
                {
                    b.Property<int>("GenreId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("FilmId");

                    b.Property<string>("Name");

                    b.HasKey("GenreId");

                    b.HasIndex("FilmId");

                    b.ToTable("Genres");
                });

            modelBuilder.Entity("FilmPortal.DataLayer.Entities.Rating", b =>
                {
                    b.Property<int>("RatingId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("FilmId");

                    b.Property<int>("Mark");

                    b.Property<int>("UserId");

                    b.HasKey("RatingId");

                    b.HasIndex("FilmId");

                    b.HasIndex("UserId");

                    b.ToTable("Marks");
                });

            modelBuilder.Entity("FilmPortal.DataLayer.Entities.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Login");

                    b.Property<string>("Password");

                    b.Property<bool>("isAdmin");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("FilmPortal.DataLayer.Entities.Comment", b =>
                {
                    b.HasOne("FilmPortal.DataLayer.Entities.Film", "Film")
                        .WithMany("Comments")
                        .HasForeignKey("FilmId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("FilmPortal.DataLayer.Entities.User", "User")
                        .WithMany("Comments")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FilmPortal.DataLayer.Entities.Genre", b =>
                {
                    b.HasOne("FilmPortal.DataLayer.Entities.Film")
                        .WithMany("Genres")
                        .HasForeignKey("FilmId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FilmPortal.DataLayer.Entities.Rating", b =>
                {
                    b.HasOne("FilmPortal.DataLayer.Entities.Film")
                        .WithMany("Marks")
                        .HasForeignKey("FilmId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("FilmPortal.DataLayer.Entities.User")
                        .WithMany("Marks")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
