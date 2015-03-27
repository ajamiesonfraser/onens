angular.module('starter.controllers', [])


    .controller('Input1Ctrl', function($scope, $http, $localStorage, $location){
      $scope.data = {};

      $scope.input1Submit = function() {
        console.log('this is clicked');

        $http.post("http://45.55.153.141/event/", { name: $scope.data.name ,type: $scope.data.type, venue: $scope.data.venue, location: $scope.data.location, date: $scope.data.date, eventimg: $scope.data.eventimg  }).then(function(result) {
          if (result.data.submitstatus == "success") {

            alert("Congrats, you submitted a name "+result.data.name);
            $location.path("/tab/input2")
          }
          else {
            alert(result.data.message);
          }
        }, function(error) {
          alert("There was a problem submitting a message.  Check the logs for details.");
          console.log(error);
        });
      }
})
.controller('Input2Ctrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};

  $scope.input2Submit = function() {
    console.log('this is clicked');

    $http.post("http://45.55.153.141/event/", { name: $scope.data.name ,type: $scope.data.type, venue: $scope.data.venue, location: $scope.data.location, date: $scope.data.date, eventimg: $scope.data.eventimg  }).then(function(result) {
      if (result.data.submitstatus == "success") {

        alert("Congrats, you submitted a name "+result.data.name);
        $location.path("/tab/input2")
      }
      else {
        alert(result.data.message);
      }
    }, function(error) {
      alert("There was a problem submitting a message.  Check the logs for details.");
      console.log(error);
    });
  }
})
.controller('Input3Ctrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};

  $scope.input3Submit = function() {
    console.log('this is clicked');

    $http.post("http://45.55.153.141/event/", { name: $scope.data.name ,type: $scope.data.type, venue: $scope.data.venue, location: $scope.data.location, date: $scope.data.date, eventimg: $scope.data.eventimg  }).then(function(result) {
      if (result.data.submitstatus == "success") {

        alert("Congrats, you submitted a name "+result.data.name);
        $location.path("/tab/input3")
      }
      else {
        alert(result.data.message);
      }
    }, function(error) {
      alert("There was a problem submitting a message.  Check the logs for details.");
      console.log(error);
    });
  }
})
    .controller('Input4Ctrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};

  $scope.input4Submit = function() {
    console.log('this is clicked');

    $http.post("http://45.55.153.141/event/", { name: $scope.data.name ,type: $scope.data.type, venue: $scope.data.venue, location: $scope.data.location, date: $scope.data.date, eventimg: $scope.data.eventimg  }).then(function(result) {
      if (result.data.submitstatus == "success") {

        alert("Congrats, you submitted a name "+result.data.name);
        $location.path("/tab/input4")
      }
      else {
        alert(result.data.message);
      }
    }, function(error) {
      alert("There was a problem submitting a message.  Check the logs for details.");
      console.log(error);
    });
  }
});