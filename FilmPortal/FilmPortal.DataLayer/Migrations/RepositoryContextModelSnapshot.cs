﻿// <auto-generated />
using System;
using FilmPortal.DataLayer.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FilmPortal.DataLayer.Migrations
{
    [DbContext(typeof(RepositoryContext))]
    partial class RepositoryContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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
                            Description = @"Robert Neville is a brilliant scientist, but even he could not contain the terrible virus that was unstoppable, incurable, and man-made. Somehow immune, Neville is now the last human survivor in what is left of New York City and maybe the world.

For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone.

Mutant victims of the plague—The Infected—lurk in the shadows, watching Neville's every move, waiting for him to make a fatal mistake...",
                            Name = "I am Legend",
                            Producer = "Frensis Lourens",
                            Year = 2007
                        },
                        new
                        {
                            FilmId = 2,
                            Description = "In 2035, techno-phobic homicide detective Del Spooner of the Chicago PD heads the investigation of the apparent suicide of leading robotics scientist, Dr. Alfred Lanning. Unconvinced of the motive, Spooner's investigation into Lanning's death reveals a trail of secrets and agendas within the USR (United States Robotics) corporation and suspicions of murder. Little does he know that his investigation would lead to uncovering a larger threat to humanity.",
                            Name = "I, Robot",
                            Producer = "Alex Proyas",
                            Year = 2004
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

            modelBuilder.Entity("FilmPortal.DataLayer.Entities.Image", b =>
                {
                    b.Property<int>("ImageId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("FilmId");

                    b.Property<string>("Path");

                    b.HasKey("ImageId");

                    b.HasIndex("FilmId");

                    b.ToTable("Image");

                    b.HasData(
                        new
                        {
                            ImageId = 1,
                            FilmId = 1,
                            Path = "/images/legend1.jpg"
                        },
                        new
                        {
                            ImageId = 2,
                            FilmId = 1,
                            Path = "/images/legend2.jpg"
                        },
                        new
                        {
                            ImageId = 3,
                            FilmId = 2,
                            Path = "/images/robot1.jpg"
                        },
                        new
                        {
                            ImageId = 4,
                            FilmId = 2,
                            Path = "/images/robot2.jpg"
                        });
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

                    b.Property<string>("Login")
                        .IsRequired();

                    b.Property<string>("Password")
                        .IsRequired();

                    b.Property<bool>("isAdmin");

                    b.HasKey("UserId");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            Login = "admin",
                            Password = "jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg=",
                            isAdmin = true
                        },
                        new
                        {
                            UserId = 2,
                            Login = "user",
                            Password = "BPiZbadjt6lpsQKO4wB1aerzpjVIbdqyEdUSyFud+Ps=",
                            isAdmin = false
                        });
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

            modelBuilder.Entity("FilmPortal.DataLayer.Entities.Image", b =>
                {
                    b.HasOne("FilmPortal.DataLayer.Entities.Film")
                        .WithMany("Images")
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
