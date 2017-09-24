app.controller('loadProjects', function ($scope,$http) {
    var response
    $scope.loadProjects = function () {

        var res = $http.get('/Home/GetProjects').then(
            function (data, status, headers, config) {
            response = data;
            console.log(data)
            },
            function (data, status, headers, config) {
                alert("failure message: " + JSON.stringify({ data: data }));
            }
        )
        
    };

    $scope.loadProjects();
    if (response.length >= 5) {
        for (var i = 0; i < 5; i++) {
            $scope.projects[i] = response[i]
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

app.controller('loadNewProjects', function ($scope,$http) {
    var response
    $scope.loadNewProjects = function () {

        var res = $http.get('/Home/GetProjects').then(
            function (data, status, headers, config) {
            response = data;
            console.log(data)
            },
            function (data, status, headers, config) {
                alert("failure message: " + JSON.stringify({ data: data }));
            }
        )

    };

    $scope.loadNewProjects();
    if (response.length >= 5) {
        for (var i = 0; i < 5; i++) {
            $scope.projects[i] = response[i]
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

app.controller('loadUsers', function($scope,$http) {
   var response;
   $scope.loadUsers = function (id) {
        
    var res = $http.get('/Get/GetTopUsers').then(
        function (data, status, headers, config) {
           response = data;
           console.log(data)
        },
        function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
            response = data;
        }
    )

   };
   
   $scope.loadUsers();
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

app.controller('loadNews', function($scope,$http) {
   var response;
   $scope.loadTopMoney = function () {
        
       var res = $http.get('/Get/GetTopNews').then(
        function (data, status, headers, config) {
            response = data;
            console.log(data)
        },
        function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        }
       )
      
   };
   $scope.loadTopMoney();
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






