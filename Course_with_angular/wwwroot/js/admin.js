app.controller('listController',['$scope','$http',function($scope,$http){
    app1.controller('loadUsers', function ($scope, $http) {var response = {};
    $scope.loadUsers = function (id) {
    var res = $http.get('../Project/GetAllUsers').then(
        function (data, status, headers, config) {
           response = data;
           $scope.users = []
           AddThem()
        },
        function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
            response = data;
        }
    )

   };

   $scope.loadUsers();
   var AddThem = function(){
    if (response.data.length == 0){
      //  document.getElementsByClassName("TopUser")[0].innerHTML+="<p>Sorry,there are no top users yet:(</p>"
    } else{
            if(response.data.length>=5){
                for(var i=0;i<5;i++){
                    $scope.users[i].push(response.data[i])
                }
            } else{
                for(var i=0;i<response.data.length;i++){
                    $scope.users[i].push(response.data[i])
                }
            }
    }
   }
    $scope.loadMore = function() {
        var last = $scope.users[$scope.users.length - 1];
        if((response.data.length-$scope.users.length + 1)>=10){
            for(var i = 1; i <= 10; i++) {
                $scope.users.push(response.data[last + i]);
            } 
        }
        else {
                for(var i = 1; i <= response.data.length-1; i++) {
                    $scope.users.push(response.data[last + i]);
                } 
            }
        }
    });    



}])