var app1 = angular.module("course",
    [
        'pascalprecht.translate',
        'ngRoute',
    ]);

app1.controller('loadProjects', function ($scope, $http) {
    var response = {};

    var loadProjects = function () {

        var res = $http.get('../Project/GetTopProject').then(
            function (data, status, headers, config) {
                response = data;
                console.log("Data is below:")
                console.log(data)
                $scope.projects = [];
                console.log("responsedate")
                console.log(response.data) 
                
               
                continueResp()
            },
            function (data, status, headers, config) {
                console.log("failure message: " + JSON.stringify({ data: data }));
            }
        )
        
    };

    loadProjects();
    console.log(response)
    var continueResp = function () {
        if (response.data.length == 0) {
            //document.getElementsByClassName("TopProject")[0].innerHTML+="<p>Sorry,there are no top projects yet:(</p>"
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
        if ((response.length - $scope.projects.length + 1) >= 10) {
            for (var i = 1; i <= 10; i++) {
                $scope.projects.CommentsAmount = response[last + i].Comments.length;
                $scope.projects.push(response[last + i]);
            }
        }
        else {
            for (var i = 1; i <= response.length - 1; i++) {
                $scope.projects.CommentsAmount = response[last + i].Comments.length;
                $scope.projects.push(response[last + i]);
            }
        }
    }

});

app1.controller('loadNewProjects', function ($scope,$http) {
    var response
    var projects=this
    $scope.loadNewProjects = function () {

        var res = $http.get('../Project/GetNewProjects').then(
            function (data, status, headers, config) {
            response = data;
            console.log(data)
                this.arr=response
            },
            function (data, status, headers, config) {
                alert("failure message: " + JSON.stringify({ data: data }));
            }
        )

    };
    if(response==null){
         //document.getElementsByClassName("NewProject")[0].innerHTML+="<p>Sorry,there are no new projects:(</p>"
    }else{
        if (response.length >= 5) {
            for (var i = 0; i < 5; i++) {
                $scope.projects[i] = response[i]
            }
        } else{
            for (var i = 0; i < response.length; i++) {
                $scope.projects[i] = response[i]
            }
        }
    }
    $scope.loadNewProjects();
    


    $scope.loadMore = function () {
        var last = $scope.projects[$scope.projects.length - 1];
        if ((response.length - $scope.projects.length + 1) >= 10) {
            for (var i = 1; i <= 10; i++) {
                $scope.projects.CommentsAmount = response[last + i].Comments.length;
                $scope.projects.push(response[last + i]);
            }
        }
        else {
            for (var i = 1; i <= response.length - 1; i++) {
                $scope.projects.CommentsAmount = response[last + i].Comments.length;
                $scope.projects.push(response[last + i]);
            }
        }
    }

});

app1.controller('loadUsers', function ($scope, $http) {
    var response = {};
   $scope.loadUsers = function (id) {
        
    var res = $http.get('../Project/GetAllUsers').then(
        function (data, status, headers, config) {
           response = data;
           console.log(response)
           $users = response
            console.log("Wefewv")
            console.log($users)
        },
        function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
            response = data;
        }
    )

   };

   $scope.loadUsers();
   if (response == {}){
      //  document.getElementsByClassName("TopUser")[0].innerHTML+="<p>Sorry,there are no top users yet:(</p>"

   } else{
        if(response.length>=5){
            for(var i=0;i<5;i++){
                $scope.users[i] = response[i]
                console.log($scope.users[i])
            }
        } else{
            for(var i=0;i<response.length;i++){
                $scope.users[i]=response[i]
            }
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

app1.controller('loadNews', function($scope,$http) {
    var response;
    var news=this
   $scope.loadTopMoney = function () {
        
       //var res = $http.get('/Get/GetTopNews').then(
       // function (data, status, headers, config) {
       //     response = data;
       //     console.log(data)
       // },
       // function (data, status, headers, config) {
       //     alert("failure message: " + JSON.stringify({ data: data }));
       // }
       //)
       response = {};
       news.arr=response
      
   };
   $scope.loadTopMoney();
   if(response==null){
         document.getElementsByClassName("TopUser")[0].innerHTML+="<p>Sorry,there are no news for you yet:(</p>"
   } else{
        if(response.length>=5){
            for(var i=0;i<5;i++){
                $scope.news[i]=response[i]
            }
        } else{
            for(var i=0;i<response.length;i++){
                $scope.news[i]=response[i]
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
           for(var i = 1; i <= response.length-1; i++) {
               $scope.users.push(response[last + i]);
           } 
       }
   }
    
});


app1.controller('TodoListController', function () {
        var todoList = this;
        todoList.todos = [
            { text: 'learn AngularJS', done: true },
            { text: 'build an AngularJS app', done: false }];

        todoList.addTodo = function () {
            todoList.todos.push({ text: todoList.todoText, done: false });
            todoList.todoText = '';
        };

    });



