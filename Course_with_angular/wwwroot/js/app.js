


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