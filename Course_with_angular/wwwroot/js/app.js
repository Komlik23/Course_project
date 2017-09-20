


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
        $scope.project.Id = 12345675;
        $scope.project.DateOfEnd = Date.parse("20.07.2015 0:00:00");
        $scope.project.Content = "dfsbsg";
        $scope.project.Comments = [];
        $scope.project.Rate = 0;
        $scope.project.UserId = 1243515;
        $scope.project.ImageReference = "dsfbgws";
        jsonContent = angular.copy(project);
        console.log(jsonContent)
        $http({
            headers:{"content-type":"text"}
        })
        var res = $http.post('/Project/addProject', "jsonContent="+JSON.stringify(jsonContent));
        res.success(function (data, status, headers, config) {
            $scope.message = data;
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
    };

    
    
}]);