using Course_with_angular.Data;
using Course_with_angular.Models;
using Course_with_angular.Utils;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Course_with_angular.Utils.HttpUtility;


namespace Course_with_angular.Controllers
{
    public class ProjectController: Controller
    {
        ApplicationDbContext db;
        public ProjectController(ApplicationDbContext _db)
        {
            db = _db;

        }

        public int SetRate(int ProjectId, string UserId, int rate)
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
    }
}