using Course_with_angular.Data;
using Course_with_angular.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Course_with_angular.Controllers
{
    [Route("api/")]
    public class ProjectController: Controller
    {
        private const int PageSize = 25;
        private readonly ApplicationDbContext db;

        public ProjectController(ApplicationDbContext _db)
        {
            db = _db;
        }

        [HttpPost("[action]")]
        public IActionResult AddProject( Project_Model project)
        {
            db.Add(project);
            db.SaveChanges();
            return View();
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
            catch(Exception e)
            {
                JsonConvert.SerializeObject(ResultModel.Failure(e.Message));
            }
            return JsonConvert.SerializeObject(ResultModel.Success());
        }

        [HttpPost]
        public string Edit(string jsonContent)
        {
            try
            {
                var project = JsonConvert.DeserializeObject<Project_Model>(jsonContent);
                db.Update(project);
                db.SaveChanges();
            }
            catch (Exception e)
            {
                return JsonConvert.SerializeObject(ResultModel.Failure(e.Message));
            }
            return JsonConvert.SerializeObject(ResultModel.Success());
        }

        [HttpGet("[action]")]
        public IActionResult GetProject(int id)
        {
            var project = FindProjectById(id);
            ViewBag.project = project;
            //return JsonConvert.SerializeObject(project);
            return View();
        }

        [HttpGet]
        public string GetProjects(int page)
        {
            var project = db.Projects.Skip((page - 1) * PageSize).Take(PageSize);
            return JsonConvert.SerializeObject(project);
        }

        private Project_Model FindProjectById(int id)
        {
            return db.Projects.FirstOrDefault(item => item.Id == id);
        }


    }
}
