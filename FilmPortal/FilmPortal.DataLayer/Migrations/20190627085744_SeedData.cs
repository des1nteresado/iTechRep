using Microsoft.EntityFrameworkCore.Migrations;

namespace FilmPortal.DataLayer.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Films",
                columns: new[] { "FilmId", "Description", "Name", "Producer", "Year" },
                values: new object[] { 1, "Desription", "I am Legend", "Frensis Lourens", 2007 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Films",
                keyColumn: "FilmId",
                keyValue: 1);
        }
    }
}
