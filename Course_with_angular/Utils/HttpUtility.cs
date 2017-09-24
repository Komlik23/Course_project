using Course_with_angular.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System;

namespace Course_with_angular.Utils
{
    public static class HttpUtility
    {
        public static string GetJson(this Controller controller)
        {
            using (var reader = new StreamReader(controller.HttpContext.Request.Body))
            {
                return reader.ReadToEnd();
            }
        }


 

    }


}
