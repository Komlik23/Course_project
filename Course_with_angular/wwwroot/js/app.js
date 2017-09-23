


var app = angular.module("course",
    [
        'pascalprecht.translate',
        'ngRoute',
    ]);

app.config(["$translateProvider", function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: '../../resources/translation_',
        suffix: '.json'
    })

    $translateProvider.preferredLanguage('en');

}]);

app.controller("translateController", ["$scope", "$translate", function ($scope, $translate) {
    $scope.changeLanguage = function (lang) {
        $translate.use(lang);
    };
}]);



var numbersController = function ($scope) {
    $scope.numbers = [];
    $scope.counter = 0;

    $scope.loadMore = function () {
        for (var i = 0; i <4 ; i++) {
            $scope.numbers.push(++$scope.counter);
        };
    }
    $scope.loadMore();
}
app.controller('numbersController', numbersController); 

app.controller("sendProjectController", ['$scope',"$http", function ($scope,$http) {
    $scope.update = function (project) {
        
        $scope.project.DateOfEnd = "2012-04-23T18:25:43.511Z";
        $scope.project.Content = "drew";
        $scope.project.Comments = [];
        $scope.project.Rate = 0;
        $scope.project.UserId = "15454";
        $scope.project.ImageReference = "dsfbgws";
        jsonContent = angular.copy(project);
        console.log(jsonContent)
        
        var res = $http.post('AddProject',  JSON.stringify( jsonContent) ).then(
            function (data, status, headers, config) {
                $scope.message = data;
                console.log(data)
            },
            function (data, status, headers, config) {
                console.log("failure message: " + JSON.stringify({ data: data }));
            }
        )

    //    $http({
    //        method: 'POST',
    //        url: 'http://localhost:54987/api/AddProject',
    //        //IMPORTANT!!! You might think this should be set to 'multipart/form-data' 
    //        // but this is not true because when we are sending up files the request 
    //        // needs to include a 'boundary' parameter which identifies the boundary 
    //        // name between parts in this multi-part request and setting the Content-type 
    //        // manually will not set this boundary parameter. For whatever reason, 
    //        // setting the Content-type to 'false' will force the request to automatically
    //        // populate the headers properly including the boundary parameter.
    //        headers: { 'Content-Type': false },
    //        //This method will allow us to change how the data is sent up to the server
    //        // for which we'll need to encapsulate the model data in 'FormData'
    //        transformRequest: function (data) {
    //            var formData = new FormData();
    //            //need to convert our json object to a string version of json otherwise
    //            // the browser will do a 'toString()' on the object which will result 
    //            // in the value '[Object object]' on the server.
    //            formData.append("jsonContent", angular.toJson(project));
    //            //now add all of the assigned files

    //            return formData;
    //        },
    //        //Create an object that contains the model and files which will be transformed
    //        // in the above transformRequest method
    //        data: { jsonContent: $scope.project }
    //    }).
    //        success(function (data, status, headers, config) {
    //            alert("success!");
    //        }).
    //        error(function (data, status, headers, config) {
    //            alert("failed!");
    //        });

    };

    
    
}]);

app.controller('loadUsers', function($scope) {
    var response
    $scope.loadUsers = function (id) {
        
        var res = $http.get('/Get/GetTopUsers');
        res.success(function (data, status, headers, config) {
            response = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    GetUSers;
    if(response.length>=5){
        for(var i=0;i<5;i++){
            $scope.users[i]=response[i]
        }
    }
 

  $scope.loadMore = function() {
    var last = $scope.users[$scope.users.length - 1];
    if((response.length-$scope.users.length + 1)>=10){
        for(var i = 1; i <= 10; i++) {
            $scope.users.push(response[last + i]);
        } 
    }
    else {
            for(var i = 1; i <= response.length-1; i++) {
                $scope.users.push(response[last + i]);
            } 
        }
    }
    
});

app.controller('loadNews', function($scope) {
    var response;
    $scope.loadTopMoney = function () {
        
        var res = $http.get('/Get/GetTopNews');
        res.success(function (data, status, headers, config) {
            response = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };
    loadTopMoney();
    if(response.length>=5){
        for(var i=0;i<5;i++){
            $scope.news[i]=response[i]
        }
    }
 

  $scope.loadMore = function() {
    var last = $scope.news[$scope.news.length - 1];
    if((response.length-$scope.news.length + 1)>=10){
        for(var i = 1; i <= 10; i++) {
            $scope.news.push(response[last + i]);
        } 
    }
    else {
            for(var i = 1; i <= response.length-1; i++) {
                $scope.users.push(response[last + i]);
            } 
        }
    }
    
});

app.controller('loadProjects', function($scope) {
    var response
    $scope.loadProjects = function () {
        
        var res = $http.get('/Get/GetProjects');
        res.success(function (data, status, headers, config) {
            response = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    loadProjects();
    if(response.length>=5){
        for(var i=0;i<5;i++){
            $scope.projects[i]=response[i]
        }
    }
 

  $scope.loadMore = function() {
    var last = $scope.projects[$scope.projects.length - 1];
    if((response.length-$scope.projects.length + 1)>=10){
        for(var i = 1; i <= 10; i++) {
             $scope.projects.CommentsAmount=response[last + i].Comments.length;
            $scope.projects.push(response[last + i]);
        } 
    }
    else {
            for(var i = 1; i <= response.length-1; i++) {
                 $scope.projects.CommentsAmount=response[last + i].Comments.length;
                $scope.projects.push(response[last + i]);
            } 
        }
    }
    
});

app.controller('loadNewProjects', function($scope) {
    var response
    $scope.loadNewProjects = function () {
        
        var res = $http.get('/Get/loadNewProjects');
        res.success(function (data, status, headers, config) {
            response = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    loadNewProjects();
        if(response.length>=5){
        for(var i=0;i<5;i++){
            $scope.projects[i]=response[i]
        }
    }
 

  $scope.loadMore = function() {
    var last = $scope.projects[$scope.projects.length - 1];
    if((response.length-$scope.projects.length + 1)>=10){
        for(var i = 1; i <= 10; i++) {
            $scope.projects.CommentsAmount=response[last + i].Comments.length;
            $scope.projects.push(response[last + i]);
        } 
    }
    else {
            for(var i = 1; i <= response.length-1; i++) {
                 $scope.projects.CommentsAmount=response[last + i].Comments.length;
                $scope.projects.push(response[last + i]);
            } 
        }
    }
    
});

app.controller("TestEverything", ['$scope',"$http", function ($scope,$http) {
    $scope.loadMore = function () {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };


    $scope.loadTopMoney = function () {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    $scope.loadNewProjects = function () {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };
    
    $scope.loadTopProjects = function () {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

   

    $scope.getTags = function () {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    $scope.deleteUser = function (id) {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    $scope.confirmUser = function (id) {
        
        var res = $http.get('/Project/addProject').then(
            function (data, status, headers, config) {
                $scope.message = data;
                console.log(data)
            },
            function (data, status, headers, config) {
                alert("failure message: " + JSON.stringify({ data: data }));
            }
        )
        
    };

    $scope.blockUser = function (id) {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    $scope.passConfirmation = function (confirmation) {
        
        var res = $http.post('/Project/addProject',data);
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    $scope.getProject = function (title) {
        
        var res = $http.get('../api/GetProject?id=1').then(
            function (data, status, headers, config) {
                $scope.message = data;
                console.log(data)
            },
            function (data, status, headers, config) {
                alert("failure message: " + JSON.stringify({ data: data }));
            }
        )
        
    };

    $scope.setRate = function (rate) {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    $scope.setStatus = function (status) {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    $scope.addComment = function (comment) {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    $scope.pay = function (payment) {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    $scope.subscribe = function (id) {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    $scope.setColor = function (color) {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    $scope.setLanguage = function (language) {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    $scope.sendQuery = function (query) {
        
        var res = $http.get('/Project/addProject');
        res.success(function (data, status, headers, config) {
            $scope.message = data;
            console.log(data)
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    
}]);