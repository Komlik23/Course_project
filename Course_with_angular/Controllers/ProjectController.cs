using Course_with_angular.Data;
using Course_with_angular.Models;
using Course_with_angular.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Course_with_angular.Utils.HttpUtility;


namespace Course_with_angular.Controllers
{
    public class ProjectController: Controller
    {
        private readonly ApplicationDbContext db;
        private const int NewProjectAmount = 10; 

        public ProjectController(ApplicationDbContext _db)
        {
            db = _db;

        }

        public double SetRate(int ProjectId, string UserId, int rate)
        {
            Rate CurrentRate = new Rate
            {
                Mark = rate,
                UserId = UserId,
                ProjectId = ProjectId
            };
            
            if (db.Projects.Find(ProjectId).Rates == null)
            {
                List<Rate> RatesNew = new List<Rate>();
                db.Projects.Find(ProjectId).Rates = RatesNew;
            }
            db.Projects.Find(ProjectId).Rates.Add(CurrentRate);
            db.SaveChanges();     
            return Getter.GetRate(db.Projects.Find(ProjectId).Rates);
        }

        public string GetNewProjects()
        {
            var projects = db.Projects.OrderByDescending(project => project.CreatedOn).Take(NewProjectAmount);
            return JsonConvert.SerializeObject(projects);
        }

        public string GetTopProject()
        {
            var projects = db.Projects.Select(project => project.Rates.OrderByDescending(item => item.Mark)).
                Take(NewProjectAmount);
            return JsonConvert.SerializeObject(projects);
        }

        
        public string GetAllUsers()
        {
            return JsonConvert.SerializeObject(db.Users);
            
        }


    }
}