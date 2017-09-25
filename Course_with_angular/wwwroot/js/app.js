


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
    
    var images=[
        "https://avatars1.githubusercontent.com/u/6884519?v=4&s=72",
        "https://avatars3.githubusercontent.com/u/26977068?v=4&s=88",
        "https://avatars3.githubusercontent.com/u/13986045?v=4&s=88",
        "https://avatars3.githubusercontent.com/u/17493676?v=4&s=88"
    ]
    $scope.update = function (project) {
        $scope.project.DateOfEnd = "2012-04-23T18:25:43.511Z";





        //HERE!!!!!!!!!!!1










        $scope.project.Comments = [];
        $scope.project.Rate = 0;
        $scope.project.UserId = "15454";
        $scope.project.ImageReference = images[Math.floor(Math.random() * 5)];
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

    };

    
    
}]);


app.controller("TestEverything", ['$scope',"$http", function ($scope,$http) {
    
   

    $scope.getTags = function () {
        
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

    $scope.deleteUser = function (id) {
        
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

    $scope.passConfirmation = function (confirmation) {
        
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

    

    

     $scope.setStatus = function (status) {
        
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

   

    $scope.pay = function (payment) {
        
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

    $scope.subscribe = function (id) {
        
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

    $scope.setColor = function (color) {
        
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

    $scope.setLanguage = function (language) {
        
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

    $scope.sendQuery = function (query) {
        
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

    
}]);