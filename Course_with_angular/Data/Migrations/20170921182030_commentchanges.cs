using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Course_with_angular.Data.Migrations
{
    public partial class commentchanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Projects_Project_ModelId",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_AspNetUsers_UserId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Projects_UserId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Comment_Project_ModelId",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "Project_ModelId",
                table: "Comment");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Projects",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ProjectId",
                table: "Comment",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Comment_ProjectId",
                table: "Comment",
                column: "ProjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Projects_ProjectId",
                table: "Comment",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Projects_ProjectId",
                table: "Comment");

            migrationBuilder.DropIndex(
                name: "IX_Comment_ProjectId",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "ProjectId",
                table: "Comment");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Projects",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Project_ModelId",
                table: "Comment",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Projects_UserId",
                table: "Projects",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Comment_Project_ModelId",
                table: "Comment",
                column: "Project_ModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Projects_Project_ModelId",
                table: "Comment",
                column: "Project_ModelId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_AspNetUsers_UserId",
                table: "Projects",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
