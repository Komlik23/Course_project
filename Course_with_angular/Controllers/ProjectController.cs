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
    public class ProjectController: Controller
    {
        private const int PageSize = 25;
        private readonly ApplicationDbContext db;

        public ProjectController(ApplicationDbContext _db)
        {
            db = _db;
        }

        [HttpPost]
        public string AddProject(string jsonContent)
        {
            var project = JsonConvert.DeserializeObject<Project_Model>(jsonContent);
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

        [HttpGet]
        public string GetProject(int id)
        {
            var project = FindProjectById(id);
            return JsonConvert.SerializeObject(project);
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
