var app1 = angular.module("course",
    [
        'pascalprecht.translate',
        'ngRoute',
    ]);

app1.controller('loadProjects', function ($scope, $http) {
    var response={};
    var loadProjects = function () {
        var res = $http.get('../Project/GetTopProject').then(
            function (data, status, headers, config) {
                response = data;
                $scope.projects = [];
                continueResp()
            },
            function (data, status, headers, config) {
                console.log("failure message: " + JSON.stringify({ data: data }));
            }
        )
        
    };

    loadProjects();
    var continueResp = function () {
        if (response.data.length == 0) {
            document.getElementsByClassName("TopProject")[0].innerHTML+="<p>Sorry,there are no top projects yet:(</p>"
        } else {
            if (response.data.length >= 5) {
                for (var i = 0; i < 5; i++) {
                    response.data[i].DateOfEnd = response.data[i].DateOfEnd.substr(0, 10);
                    $scope.projects.push(response.data[i])
                }
            } else {
                for (var i = 0; i < response.data.length; i++) {
                    response.data[i].DateOfEnd=response.data[i].DateOfEnd.substr(0, 10);
                    $scope.projects.push(response.data[i])
                }
            }
        }
    }
    $scope.loadMore = function () {
        var last = $scope.projects[$scope.projects.length - 1];
        if ((response.data.length - $scope.projects.length + 1) >= 10) {
            for (var i = 1; i <= 10; i++) {
                //$scope.projects.CommentsAmount = response[last + i].Comments.length;
                $scope.projects.push(response[last + i]);
            }
        }
        else {
            for (var i = 1; i <= response.length - 1; i++) {
                $scope.projects
                .CommentsAmount = response[last + i].Comments.length;
                $scope.projects.push(response[last + i]);
            }
        }
    }

});

app1.controller('loadNewProjects', function ($scope, $http) {
    var response={};
    var loadProjects = function () {
        var res = $http.get('../Project/GetNewProject').then(
            function (data, status, headers, config) {
                response = data;
                $scope.projects = [];
                continueResp()
            },
            function (data, status, headers, config) {
                console.log("failure message: " + JSON.stringify({ data: data }));
            }
        )
        
    };

    loadProjects();
    var continueResp = function () {
        if (response.data.length == 0) {
            document.getElementsByClassName("NewProject")[0].innerHTML+="<p>Sorry,there are no top projects yet:(</p>"
        } else {
            if (response.data.length >= 5) {
                for (var i = 0; i < 5; i++) {
                    response.data[i].DateOfEnd = response.data[i].DateOfEnd.substr(0, 10);
                    $scope.projects.push(response.data[i])
                }
            } else {
                for (var i = 0; i < response.data.length; i++) {
                    response.data[i].DateOfEnd=response.data[i].DateOfEnd.substr(0, 10);
                    $scope.projects.push(response.data[i])
                }
            }
        }
    }
    
   


    $scope.loadMore = function () {
        var last = $scope.projects[$scope.projects.length - 1];
        if ((response.data.length - $scope.projects.length + 1) >= 10) {
            for (var i = 1; i <= 10; i++) {
                //$scope.projects.CommentsAmount = response[last + i].Comments.length;
                $scope.projects.push(response.data[last + i]);
            }
        }
        else {
            for (var i = 1; i <= response.length - 1; i++) {
                //$scope.projects.CommentsAmount = response[last + i].Comments.length;
                $scope.projects.push(response.data[last + i]);
            }
        }
    }

});

app1.controller('loadUsers', function ($scope, $http) {var response = {};
    $scope.loadUsers = function (id) {
    var res = $http.get('../Project/GetAllUsers').then(
        function (data, status, headers, config) {
           response = data;
           $scope.users = []
           AddThem()
        },
        function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
            response = data;
        }
    )

   };

   $scope.loadUsers();
   var AddThem = function(){
    if (response.data.length == 0){
      //  document.getElementsByClassName("TopUser")[0].innerHTML+="<p>Sorry,there are no top users yet:(</p>"
    } else{
            if(response.data.length>=5){
                for(var i=0;i<5;i++){
                    $scope.users[i].push(response.data[i])
                }
            } else{
                for(var i=0;i<response.data.length;i++){
                    $scope.users[i].push(response.data[i])
                }
            }
    }
   }
   

   
 

 $scope.loadMore = function() {
   var last = $scope.users[$scope.users.length - 1];
   if((response.data.length-$scope.users.length + 1)>=10){
       for(var i = 1; i <= 10; i++) {
           $scope.users.push(response.data[last + i]);
       } 
   }
   else {
           for(var i = 1; i <= response.data.length-1; i++) {
               $scope.users.push(response.data[last + i]);
           } 
       }
   }
    
});

app1.controller('loadNews', function($scope,$http) {
    var response={
        data:[]
    };
//    $scope.loadTopMoney = function () {
        
       //var res = $http.get('/Get/GetTopNews').then(
       // function (data, status, headers, config) {
       //     response = data;
       //     console.log(data)
       // },
       // function (data, status, headers, config) {
       //     alert("failure message: " + JSON.stringify({ data: data }));
       // }
       //)
      
//    };
//    $scope.loadTopMoney();
   if(response.data.length==0){
         document.getElementsByClassName("TopNews")[0].innerHTML+="<p>Sorry,there are no news for you yet:(</p>"
   } else{
        if(response.length>=5){
            for(var i=0;i<5;i++){
                $scope.news[i].push(response.data[i])
            }
        } else{
            for(var i=0;i<response.data.length;i++){
                $scope.news[i].push(response[i])
            }
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
           for(var i = 1; i <= response.data.length-1; i++) {
               $scope.users.push(response.data[last + i]);
           } 
       }
   }
    
});