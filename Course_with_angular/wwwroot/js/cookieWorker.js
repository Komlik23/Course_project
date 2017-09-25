angular.module("course",['ngCookies']).controller('CookieController', ['$cookies','$http', function($cookies,$http) {
  // Retrieving a cookie
  var cookieObj;
  var loadCookies = function () {
        var res = $http.get('GetCookis').then(
            function (data, status, headers, config) {
                cookie = data;
            },
            function (data, status, headers, config) {
                console.log("failure message: " + JSON.stringify({ data: data }));
            }
        )
        for(values in cookieObj){
            
        }
        
    };

  var favoriteCookie = $cookies.get('myFavorite');
  // Setting a cookie
  $cookies.put('myFavorite', 'oatmeal');
}]);