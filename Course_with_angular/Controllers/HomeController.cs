using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Course_with_angular.Data;
using Course_with_angular.Models;
using Newtonsoft.Json;

namespace Course_with_angular.Controllers
{

    public class HomeController : Controller
    {

        ApplicationDbContext db ;
        public HomeController(ApplicationDbContext _db)
        {
            db = _db;
        }
        public IActionResult Test()
        {
            return View();
        }

        public object returnLanguage(string lang)
        {
            string fileName = @"c:\language" + lang + ".json";
            string allText = System.IO.File.ReadAllText(fileName);

            object jsonObject = JsonConvert.DeserializeObject(allText);
            return jsonObject;
        }

        public IActionResult Index()
        {
            IEnumerable<Project_Model> projects = db.Projects;
            ViewBag.projects = projects;
            int amount = 0;
            foreach(var project in projects)
            {
                amount++;
            }
            ViewBag.length = amount;
            return View();
        }
        [HttpGet]
        public IActionResult Project()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddComment(Comment comment)
        {
            db.Projects.Find(comment.Id).Comments.Add(comment);
            db.SaveChanges();
            return View();
        }

        [HttpPost]
        public IActionResult AddTarget(Target target)
        {
            db.Projects.Find(target.Id).Targets.Add(target);
            db.SaveChanges();
            return View();
        }

        [HttpPost]
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
