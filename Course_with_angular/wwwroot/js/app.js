


var app2 = angular.module("myApp1", ['pascalprecht.translate', 'infinite-scroll']);

app2.config(["$translateProvider", function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: '../../resources/translation_',
        suffix: '.json'
    })

    $translateProvider.preferredLanguage('en');

}]);

app2.controller("translateController", ["$scope", "$translate", function ($scope, $translate) {
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
app2.controller('numbersController', numbersController); 