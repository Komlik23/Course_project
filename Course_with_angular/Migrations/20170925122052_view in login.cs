using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Course_with_angular.Migrations
{
    public partial class viewinlogin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CookieModel",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    AppUserId = table.Column<string>(nullable: true),
                    Language = table.Column<string>(nullable: true),
                    Theme = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CookieModel", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CookieModel");
        }
    }
}
