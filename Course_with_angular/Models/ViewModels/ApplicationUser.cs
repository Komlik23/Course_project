using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Course_with_angular.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public string Theme { get; set; }
        public string Passport { get; set; }
        public bool IsValidatedByAdmin { get; set; }
        public bool IsDeleted { get; set; }
    }
}