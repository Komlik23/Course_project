using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Course_with_angular.Data.Migrations
{
    public partial class Project_modelchanged : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rate",
                table: "Projects");

            migrationBuilder.CreateTable(
                name: "Rates",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Mark = table.Column<float>(nullable: false),
                    ProjectId = table.Column<int>(nullable: false),
                    Project_ModelId = table.Column<int>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rates", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Rates_Projects_Project_ModelId",
                        column: x => x.Project_ModelId,
                        principalTable: "Projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Rates_Project_ModelId",
                table: "Rates",
                column: "Project_ModelId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Rates");

            migrationBuilder.AddColumn<int>(
                name: "Rate",
                table: "Projects",
                nullable: false,
                defaultValue: 0);
        }
    }
}
