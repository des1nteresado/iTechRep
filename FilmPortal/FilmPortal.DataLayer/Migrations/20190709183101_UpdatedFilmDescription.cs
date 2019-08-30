using Microsoft.EntityFrameworkCore.Migrations;

namespace FilmPortal.DataLayer.Migrations
{
    public partial class UpdatedFilmDescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Films",
                keyColumn: "FilmId",
                keyValue: 1,
                column: "Description",
                value: "Адаптация одноименного романа Ричарда Мэтисона о неизвестном вирусе, унесшем жизни половины населения земного шара, а остальную половину превратившего в вампиров. Сюжет строится вокруг единственного уцелевшего человека с необъяснимым иммунитетом, ночами держащего бесконечную осаду упырей, а днем пытающегося найти противоядие и выяснить причины эпидемии.");

            migrationBuilder.UpdateData(
                table: "Films",
                keyColumn: "FilmId",
                keyValue: 2,
                column: "Description",
                value: @"Действие фильма происходит в будущем (2035 г.), где роботы являются обычными помощниками человека. Главный герой — полицейский, «не переваривающий» роботов, расследует дело об убийстве, в которое оказывается вовлечен робот.

Речь идет о возможном нарушении «Закона о Роботах» (робот никогда не поднимет руки на человека), что в принципе невозможно. Ситуация близка к катастрофической: если машины могут нарушать этот закон, то уже ничто не остановит их от захвата контроля над людьми, тем более, что человечество уже давно стало полностью зависимо от роботов…");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Films",
                keyColumn: "FilmId",
                keyValue: 1,
                column: "Description",
                value: "Desription");

            migrationBuilder.UpdateData(
                table: "Films",
                keyColumn: "FilmId",
                keyValue: 2,
                column: "Description",
                value: "Desription");
        }
    }
}
