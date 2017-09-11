using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Course_with_angular.Data;
using Course_with_angular.Models;

namespace Course_with_angular.Controllers
{

    public class HomeController : Controller
    {

        ApplicationDbContext db ;
        public HomeController(ApplicationDbContext _db)
        {
            db = _db;
        }
        [Authorize(Roles = "admin,user")]
        public IActionResult Index()
        {                       
            return View();
        }
        [HttpGet]
        [Authorize(Roles = "admin,user")]
        public IActionResult Project()
        {
           
            return View();
        }

        [HttpPost]
        [Authorize(Roles = "admin,user")]
        public IActionResult Project(string Title, string Description, DateTime DateOfEnd)
        {

            Project_Model project = new Project_Model
            {
                Title = Title,
                Description = Description,
                DateOfEnd = DateOfEnd,
                Rate = 0
            };
            db.Add(project);
            db.SaveChanges();
            return View();
        }
        

        [Authorize(Roles = "admin")]
        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        [Authorize]
        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }
        [Authorize]
        public IActionResult Error()
        {
            return View();
        }
    }
}
