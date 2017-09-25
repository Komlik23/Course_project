using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace Course_with_angular.Controllers
{
    public class Uploader
    {
        void Main()
        {
            Account account = new Account(
 "dtd0hg3aj",
 "543646488343735",
 "qAJ0u9AA3_gS-AyI_dzQ4WFlKiE");

            Cloudinary cloudinary = new Cloudinary(account);

            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription(@"http://www.example.com/image.jpg")
            };
            var uploadResult = cloudinary.UploadAsync(uploadParams);
        }
    }
       
}
