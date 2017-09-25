﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Course_with_angular.Models;
using System.Collections;

namespace Course_with_angular.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Project_Model> Projects { get; set; }
        public DbSet<Comment> Comment { get; set; }
        public DbSet<Target> Target { get; set; }
        public DbSet<Tag> Tag { get; set; }
        public DbSet<TagLink> TagLink { get; set; }
        public DbSet<Rate> Rates { get; set; }
       
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }
    }
}
