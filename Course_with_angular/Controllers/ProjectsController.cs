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

namespace Course_with_angular.Controllers
{

    public class ProjectsController : Controller
    {
        ApplicationDbContext db;
        private const int PageSize = 25;
        public HomeController(ApplicationDbContext _db)
        {
            db = _db;
        }

        public IActionResult Projects()
        {
            return View();
        }


    }
}
