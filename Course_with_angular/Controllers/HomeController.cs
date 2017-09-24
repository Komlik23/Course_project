﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Course_with_angular.Data;
using Course_with_angular.Models;
using Newtonsoft.Json;
using Course_with_angular.Utils;

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

        [HttpPost]
        public string AddProject()
        {
            string jsonContent = this.GetJson();
            Project_Model project = JsonConvert.DeserializeObject<Project_Model>(jsonContent);
            project.CreatedOn = DateTime.Now;
            project.UserId = "e8ed1ddd-2161-4ffc-8f4c-6fb0c5fb6ed4";
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
        public string GetProject(int id)
        {
            var project = FindProjectById(id);
            ViewBag.project = project;
            return JsonConvert.SerializeObject(project);

        }

        [HttpGet]
        public string GetProjects()//int page
        {
            var project = db.Projects;
            //var project = db.Projects.Skip((page - 1) * PageSize).Take(PageSize);
            return JsonConvert.SerializeObject(project);
        }

        private Project_Model FindProjectById(int id)
        {
            return db.Projects.FirstOrDefault(item => item.Id == id);
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
