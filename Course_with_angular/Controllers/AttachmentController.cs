using Course_with_angular.Data;
using Course_with_angular.Models;
using Course_with_angular.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Linq;

namespace Course_with_angular.Controllers
{
    public class AttachmentController : Controller
    {
        private readonly ApplicationDbContext _db;
        private readonly UserManager<ApplicationUser> _userManager;
        

        public AttachmentController(ApplicationDbContext db, UserManager<ApplicationUser> userManager)
        {
            _db = db;
            _userManager = userManager;
        }

        [HttpPost]
        public string AddComment()
        {
            string jsonContent = this.GetJson();
            Comment comment = JsonConvert.DeserializeObject<Comment>(jsonContent);
            var project = _db.Projects.Find(comment.ProjectId);
            if(project != null)
            {
                _db.Comment.Add(comment);
            }
            _db.SaveChanges();
            return JsonConvert.SerializeObject(comment);
        }

        [HttpPost]
        public string EditComment()
        {
            try
            {
                string json = this.GetJson();
                var editedComment = JsonConvert.DeserializeObject<Comment>(json);
                Comment existingComment = _db.Comment.Find(editedComment.Id);
                if (existingComment != null)
                {
                    existingComment.ProjectId = editedComment.ProjectId;
                    existingComment.Time = editedComment.Time;
                    existingComment.Contain = editedComment.Contain;
                    existingComment.Author = editedComment.Author;
                    _db.Comment.Update(existingComment);
                    _db.SaveChanges();
                }
                return JsonConvert.SerializeObject(ResultModel.Success());
            }
            catch (Exception e)
            {
                return JsonConvert.SerializeObject(ResultModel.Failure(e.Message));
            }
        }

        [HttpGet]
        public string DeleteComment(int commentId)
        {
            try
            {
                Comment comment = _db.Comment.Find(commentId);
                if (comment != null)
                {
                    _db.Comment.Remove(comment);
                    _db.SaveChanges();
                }
                return JsonConvert.SerializeObject(ResultModel.Success());
            }
            catch(Exception e)
            {
                return JsonConvert.SerializeObject(ResultModel.Failure(e.Message));
            }
        }

        [HttpGet]
        public void AddTag(string text, int idProject)
        {
            var dbTag = _db.Tag.FirstOrDefault(item => item.Equals(text));
            if (dbTag != null)
            {
                if (_db.Tag.Any(item => item.Text.Equals(text)))
                {
                    _db.TagLink.Add(new TagLink
                    {
                        ProjectId = idProject

                    });
                }
                else
                {
                    Tag tag = new Tag
                    {
                        Text = text
                    };

                    _db.Tag.Add(tag);
                    _db.TagLink.Add(new TagLink
                    {
                        ProjectId = idProject

                    });
                }

            }
            _db.SaveChanges();            
           
        }



        [HttpPost]
        public IActionResult AddTarget(Target target)
        {
            _db.Projects.Find(target.Id).Targets.Add(target);
            _db.SaveChanges();
            return View();
        }
    }
}
