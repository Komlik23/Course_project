using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Course_with_angular.Models
{
    public class Cookies_Model
    {
        public string AppUserId { get; set; }
        public string UserName { get; set; }
        public string Theme { get; set; }
        public string Language { get; set; } 
        //public string Role { get; set; }
    }
}
