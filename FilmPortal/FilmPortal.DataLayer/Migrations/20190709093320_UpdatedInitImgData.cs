using Microsoft.EntityFrameworkCore.Migrations;

namespace FilmPortal.DataLayer.Migrations
{
    public partial class UpdatedInitImgData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Image",
                keyColumn: "ImageId",
                keyValue: 1,
                column: "Path",
                value: "/images/legend1.jpg");

            migrationBuilder.UpdateData(
                table: "Image",
                keyColumn: "ImageId",
                keyValue: 2,
                column: "Path",
                value: "/images/legend2.jpg");

            migrationBuilder.UpdateData(
                table: "Image",
                keyColumn: "ImageId",
                keyValue: 3,
                column: "Path",
                value: "/images/robot1.jpg");

            migrationBuilder.UpdateData(
                table: "Image",
                keyColumn: "ImageId",
                keyValue: 4,
                column: "Path",
                value: "/images/robot2.jpg");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Image",
                keyColumn: "ImageId",
                keyValue: 1,
                column: "Path",
                value: "~/images/legend1.jpg");

            migrationBuilder.UpdateData(
                table: "Image",
                keyColumn: "ImageId",
                keyValue: 2,
                column: "Path",
                value: "~/images/legend2.jpg");

            migrationBuilder.UpdateData(
                table: "Image",
                keyColumn: "ImageId",
                keyValue: 3,
                column: "Path",
                value: "~/images/robot1.jpg");

            migrationBuilder.UpdateData(
                table: "Image",
                keyColumn: "ImageId",
                keyValue: 4,
                column: "Path",
                value: "~/images/robot2.jpg");
        }
    }
}
