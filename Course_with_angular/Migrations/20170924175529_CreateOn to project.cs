using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Course_with_angular.Migrations
{
    public partial class CreateOntoproject : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Mark",
                table: "Rates",
                nullable: false,
                oldClrType: typeof(float));

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "Projects",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "Projects");

            migrationBuilder.AlterColumn<float>(
                name: "Mark",
                table: "Rates",
                nullable: false,
                oldClrType: typeof(int));
        }
    }
}
