using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Course_with_angular.Data;
using Course_with_angular.Models;
using Newtonsoft.Json;
using Course_with_angular.Utils;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Hosting.Server;
using System.IO;


namespace Course_with_angular.Controllers
{

    public class HomeController : Controller
    {

        ApplicationDbContext db;
        private const int PageSize = 25;
        public HomeController(ApplicationDbContext _db)
        {
            db = _db;
        }

        [HttpGet]
        public string SendProfileSettings()
        {
            try
            {
                var model = this.GetJson();
                var cookieModel = JsonConvert.DeserializeObject<Cookies_Model>(model);
                Cookies_Model cookie = db.CookieModel.Find(cookieModel);
                if (cookie != null)
                {
                    cookie.AppUserId = cookieModel.AppUserId;
                    cookie.Language = cookieModel.Language;
                    cookie.Theme = cookieModel.Theme;
                    cookie.UserName = cookieModel.UserName;
                    db.CookieModel.Update(cookie);
                    db.SaveChanges();
                }
                return JsonConvert.SerializeObject(ResultModel.Success());
            }

            catch (Exception e)
            {
                return JsonConvert.SerializeObject(ResultModel.Failure(e.Message));
            }
        }

        
        [HttpPost]
        public string AddProject()
        {
            string jsonContent = this.GetJson();
            Project_Model project = JsonConvert.DeserializeObject<Project_Model>(jsonContent);
            project.CreatedOn = DateTime.Now;
            // project.UserId = "e8ed1ddd-2161-4ffc-8f4c-6fb0c5fb6ed4";
            db.Add(project);
            db.SaveChanges();
            return JsonConvert.SerializeObject(project);
        }

        [HttpGet]
        public string Delete(int id)
        {
            try
            {
                var project = db.Projects.FirstOrDefault(item => item.Id == id);
                db.Remove(project);
                db.SaveChanges();
            }
            catch (Exception e)
            {
                JsonConvert.SerializeObject(ResultModel.Failure(e.Message));
            }
            return JsonConvert.SerializeObject(ResultModel.Success());
        }

        [HttpPost]
        public string Edit()
        {
            try
            {
                string json = this.GetJson();
                var project = JsonConvert.DeserializeObject<Project_Model>(json);
                Project_Model existingProject = db.Projects.Find(project.Id);
                if (existingProject != null)
                {
                    existingProject.Content = project.Content;
                    existingProject.DateOfEnd = project.DateOfEnd;
                    existingProject.Description = project.Description;
                    existingProject.Title = project.Title;
                    existingProject.ImageReference = project.ImageReference;
                    existingProject.UserName = project.UserName;

                    db.Update(existingProject);
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                return JsonConvert.SerializeObject(ResultModel.Failure(e.Message));
            }
            return JsonConvert.SerializeObject(ResultModel.Success());
        }

        [HttpGet]
        public IActionResult GetProject(int id)
        {
            var project = FindProjectById(id);
            ViewBag.project = project;
            //return JsonConvert.SerializeObject(project);
            ViewBag.ProjectId = id;
            ViewBag.UserName = "Adminchik";
            ViewBag.UserId = "e8ed1ddd-2161-4ffc-8f4c-6fb0c5fb6ed4";
            return View();

        }

        [HttpGet]
        public string GetSingleProject(int id)
        {
            var project = FindProjectById(id);
            return JsonConvert.SerializeObject(project);
        }

        [HttpGet]
        public string GetProjects()
        {
            var project = db.Projects;
            return JsonConvert.SerializeObject(project);
        }

        private Project_Model FindProjectById(int id)
        {
            return db.Projects.FirstOrDefault(item => item.Id == id);
        }


        private Comment FindCommentById(int id)
        {
            return db.Comment.FirstOrDefault(item => item.ProjectId == id);
        }

        [HttpGet]
        public string GetComment(int id)
        {
            var comment = FindCommentById(id);
            return JsonConvert.SerializeObject(comment);
        }


        private TagLink FindTagById(int id)
        {
            return db.TagLink.FirstOrDefault(item => item.ProjectId == id);
        }


        [HttpGet]
        public string GetTag(int id)
        {
            try
            {
                var tagsLink = FindTagById(id);
                var tmp = db.Tag.FirstOrDefault(p => p.Id == tagsLink.TagId);
                return JsonConvert.SerializeObject(tmp.Text);
            }
            catch (Exception e)
            {
                return JsonConvert.SerializeObject(ResultModel.Failure(e.Message));
            }
        }

        [HttpGet]
        public string GetTags()
        {
            return JsonConvert.SerializeObject(db.Tag);  
           
        }




        public IActionResult Profile()
        {
            return View();
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


        public IActionResult Projects()
        {
            ApplicationUser user = new ApplicationUser();
            ViewBag.UserId = "e8ed1ddd-2161-4ffc-8f4c-6fb0c5fb6ed4";
            return View();
        }

        public IActionResult Index()
        {
            IEnumerable<Project_Model> projects = db.Projects;
            ViewBag.projects = projects;
            int amount = 0;
            foreach (var project in projects)
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

        //[HttpPost]
        //public void Upload()
        //{
        //    for (int i = 0; i < Request.Files.Count; i++)
        //    {
        //        var file = Request.Files[i];

        //        var fileName = System.IO.Path.GetFileName(file.FileName);

        //        var path = Path.Combine(Server.MapPath("~/App_Data/"), fileName);
        //        file.SaveAs(path);
        //    }

        //}

        [Authorize(Roles ="admin")]
        public IActionResult Admin()
        {
            return View();
        }

       /* [Authorize]
        public IActionResult VerifyForm()
        {
            return View();
        }*/

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
