using Microsoft.EntityFrameworkCore.Migrations;

namespace Jp.Database.Migrations
{
    public partial class AddTenentProfileIncomplete : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProfileCompleted",
                table: "Users",
                newName: "UserProfileCompleted");

            migrationBuilder.AddColumn<bool>(
                name: "TenantProfileCompleted",
                table: "Users",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TenantProfileCompleted",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "UserProfileCompleted",
                table: "Users",
                newName: "ProfileCompleted");
        }
    }
}
