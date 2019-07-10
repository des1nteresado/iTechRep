using Microsoft.EntityFrameworkCore.Migrations;

namespace FilmPortal.DataLayer.Migrations
{
    public partial class UpdateInitDescript : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Films",
                keyColumn: "FilmId",
                keyValue: 1,
                column: "Description",
                value: @"Robert Neville is a brilliant scientist, but even he could not contain the terrible virus that was unstoppable, incurable, and man-made. Somehow immune, Neville is now the last human survivor in what is left of New York City and maybe the world.

For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone.

Mutant victims of the plague—The Infected—lurk in the shadows, watching Neville's every move, waiting for him to make a fatal mistake...");

            migrationBuilder.UpdateData(
                table: "Films",
                keyColumn: "FilmId",
                keyValue: 2,
                column: "Description",
                value: "In 2035, techno-phobic homicide detective Del Spooner of the Chicago PD heads the investigation of the apparent suicide of leading robotics scientist, Dr. Alfred Lanning. Unconvinced of the motive, Spooner's investigation into Lanning's death reveals a trail of secrets and agendas within the USR (United States Robotics) corporation and suspicions of murder. Little does he know that his investigation would lead to uncovering a larger threat to humanity.");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
    }
}
