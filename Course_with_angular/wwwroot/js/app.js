


var app2 = angular.module("myApp1", ['pascalprecht.translate']);

app2.config(["$translateProvider", function ($translateProvider) {

    var en_translations = {
        "language": "Selected Language English",
        "greeting": "Welcome Dinesh"
    }

    var sp_translations = {
        "language": "Selected Language Spanish",
        "greeting": "Bienvenida Dinesh"
    }

    $translateProvider.translations('en', en_translations);

    $translateProvider.translations('sp', sp_translations);

    $translateProvider.preferredLanguage('en');

}]);

app2.controller("translateController", ["$scope", "$translate", function ($scope, $translate) {
    $scope.changeLanguage = function (lang) {
        $translate.use(lang);
    }
}]);