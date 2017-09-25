var getterOfProject = angular.module("course",
    [
        'pascalprecht.translate',
        'ngRoute',
    ]);
getterOfProject.controller("getProject", ['$scope', "$http", function ($scope, $http) {

    

    getProject = function (ProjectId) {
        var response;
        var res = $http.get('GetSingleProject?id='+ProjectId).then(
            function (data, status, headers, config) {
            response = data;
            
            $scope.response = response.data;
            console.log($scope.response)
            getComment(ProjectId)
            },
            function (data, status, headers, config) {
                console.log("failure message: " + JSON.stringify({ data: data }));
                alert("Some problems loading page!Please,reload it!")
            }
       )
       getComment = function (ProjectId) {
        var response;
        var res = $http.get('GetComment?id='+ProjectId).then(
            function (data, status, headers, config) {
            response = data;
            console.log(data)
            $scope.Comments = [];
            $scope.Comments.push(response.data);
            console.log(response.data)
            $scope.CommentsAmount=response.data.length
                console.log($scope.Comments)
            },
            function (data, status, headers, config) {
                console.log("failure message: " + JSON.stringify({ data: data }));
                alert("Some problems loading page!Please,reload it!")
            }
       )

    };
   
    $scope.addComment = function (comment) {
        var date=new Date();
        $scope.comment.ProjectId=ProjectId
        $scope.comment.Author=document.getElementById("UserName").value;
        $scope.comment.Time = date
        console.log($scope.comment)
       var res = $http.post('../Attachment/AddComment',JSON.stringify(comment)).then(
           function (data, status, headers, config) {
           $scope.message = data;
           console.log(data)
           $scope.Comments.push(comment);
       },
       function(data, status, headers, config) {
           console.log("failure message: " + JSON.stringify({ data: data }));
           alert("Cannot add your comment.Plese,check the internet connection and try again")
       }
       )
    };

    $scope.setRate = function (rate) {
        var userId = document.getElementById("UserId").value;
        var projectId = ProjectId
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
        var userId = document.getElementById("UserId").value;
        var projectId = ProjectId
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

    };

    var ProjectId = document.getElementById("ProjectId").value;
    getProject(ProjectId);
    console.log("Comments:")
    console.log($scope.Comments)
}]);