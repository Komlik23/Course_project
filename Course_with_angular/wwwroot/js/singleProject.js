app.controller("getProject", ['$scope',"$http", function ($scope,$http) {
    getProject = function (ProjectId) {
        var response;
        var res = $http.get('/Project/GetProject?id='+ProjectId).then(
            function (data, status, headers, config) {
            response = data;
            console.log(data)
            },
            function (data, status, headers, config) {
                console.log("failure message: " + JSON.stringify({ data: data }));
                alert("Some problems loading page!Please,reload it!")
            }
       ) 
    };
    getProject(ProjectId);
     $scope.addComment = function (comment) {
        var date=new Date();
        comment.ProjectId=ProjectId
        comment.Author=Author
        comment.Time = date
        console.log(comment)
       var res = $http.post('../Attachment/AddComment',JSON.stringify(comment)).then(
           function (data, status, headers, config) {
           $scope.message = data;
           console.log(data)
           response.Project.Comments.push(comment);
       },
       function(data, status, headers, config) {
           console.log("failure message: " + JSON.stringify({ data: data }));
           alert("Cannot add your comment.Plese,check the internet connection and try again")
       }
    )};

    $scope.setRate = function (rate) {
        var userId = rate * 3;
        var projectId = 2004;
        console.log(rate)
        var res = $http.get('../Project/SetRate?ProjectId=' + projectId + "&UserId=" + userId + "&rate=" + rate).then(
            function (data, status, headers, config) {
                $scope.message = data;
                console.log(data)
            },
            function (data, status, headers, config) {
                alert("failure message: " + JSON.stringify({ data: data }));
            }
        )

    };

    $scope.setCurrentRate = function (rate) {
        // var userId = rate * 3;
        // var projectId = 2004;
        console.log(rate)
        var res = $http.get('../Project/SetRate?ProjectId=' + ProjectId + "&UserId=" + UserId + "&rate=" + rate).then(
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