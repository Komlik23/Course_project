


var app2 = angular.module("myApp1", ['pascalprecht.translate']);

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