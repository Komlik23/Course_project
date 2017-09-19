


var app2 = angular.module("myApp1", []);

app2.config(["$translateProvider", function ($translateProvider) {

    var en_translations = {
        "language": "Selected Language English",
        "greeting": "Welcome Dinesh",
        "Phone":"Phone",
        "Support": "Support",
        "Marketing": "Marketing",
        "Project": "Project",
        "Confirmation": "Thank you for confirming your email. Please ",
        "ConfirmationLink": " Click here to Log in",
        "Home": "Home",
        "About": "About"

    };

    var ru_translations = {
        "language": "Selected Language Spanish",
        "greeting": "Bienvenida Dinesh",
        "Phone":"Phone",
        "Support": "Support",
        "Marketing": "Marketing",
        "Project": "Project",
        "Confirmation": "Thank you for confirming your email. Please ",
        "ConfirmationLink": " Нажмите здесь чтобы войти",
        "Home": "Главная",
        "About": "О нас"
    };

    $translateProvider.translations('en', en_translations);

    $translateProvider.translations('ru', ru_translations);

    $translateProvider.preferredLanguage('en');

}]);

app2.controller("translateController", ["$scope", "$translate", function ($scope, $translate) {
    $scope.changeLanguage = function (lang) {
        $translate.use(lang);
    };
}]);