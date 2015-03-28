angular.module('starter.controllers', ['ngStorage', 'ngCordova'])


.controller('Input1Ctrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};

  $scope.input1Submit = function() {
    console.log('this is clicked');
    console.log($scope.data.name);
    $localStorage.name= $scope.data.name;
    $location.path("/tab/input2");
  }
})
.controller('Input2Ctrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};
  $scope.name1 = $localStorage.name;
  $scope.input2Submit = function() {
    console.log('this is clicked');
    console.log($scope.data.question1);
    $localStorage.question1= $scope.data.question1;
    $location.path("/tab/input3");
  }
})
.controller('Input3Ctrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};

  $scope.input3Submit = function() {
    console.log('this is clicked');
    console.log($scope.data.question2);
    $localStorage.question2= $scope.data.question2;
    $location.path("/tab/input4");
  }
})
  .controller('Input4Ctrl', function($scope, $http, $localStorage, $location){
$scope.data = {};
$scope.input4Submit = function() {
  console.log('fuckin eh!');
  console.log($scope.data.question3);
  $localStorage.question3= $scope.data.question3;
  $location.path("/tab/input5");
  }
})
.controller('Input5Ctrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};

  $scope.input5Submit = function() {
    console.log($scope.data.selected);
    console.log('this is clicked');
    $localStorage.question4= $scope.data.selected;
    $location.path("/tab/input6");
  }
})
.controller('Input6Ctrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};

  $scope.input6Submit = function() {
    console.log('this is clicked');
    console.log($scope.data.question5);
    $localStorage.question5= $scope.data.question5;
    $location.path("/tab/input7");
  }
})
.controller('Input7Ctrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};

  $scope.input7Submit = function() {
    console.log('this is clicked');
    console.log($scope.data.question6);
    $localStorage.question6= $scope.data.question6;
    $location.path("/tab/input8");
  }
})
.controller('Input8Ctrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};

  $scope.input8Submit = function() {
    console.log('this is clicked');
    console.log($scope.data.question7);
    $localStorage.question7= $scope.data.question7;
    $location.path("/tab/input9");
  }
})
.controller('Input9Ctrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};

  $scope.input9Submit = function() {
    console.log('this is clicked');
    console.log($scope.data.question8);
    $localStorage.question8= $scope.data.question8;
    $location.path("/tab/input10");
  }
})
.controller('Input10Ctrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};

  $scope.input10Submit = function() {
    console.log('this is clicked');
    console.log($scope.data.question9);
    $localStorage.question9= $scope.data.answer9;
    $location.path("/tab/input11");
    console.log($localStorage.question5);
  }
})
.controller('Input11Ctrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};

  $scope.input11Submit = function() {
    console.log('this is clicked');
    console.log($scope.data.question10);
    $localStorage.question10= $scope.data.question10;
    $location.path("/tab/output");
  }
})
.controller('OutputCtrl', function($scope, $http, $localStorage, $location){
  $scope.data = {};
      $scope.name1 = $localStorage.name;
      $scope.question1 = $localStorage.question1;
      $scope.question2 = $localStorage.question2;
      $scope.question3 = $localStorage.question3;
      $scope.question4 = $localStorage.question4;
      $scope.question5 = $localStorage.question5;
      $scope.question6 = $localStorage.question6;
      $scope.question7 = $localStorage.question7;
      $scope.question8 = $localStorage.question8;
      $scope.question9 = $localStorage.question9;
      $scope.question10 = $localStorage.question10;

});
/* $http.post("http://45.55.153.141/event/", { name: $scope.data.name ,type: $scope.data.type, venue: $scope.data.venue, location: $scope.data.location, date: $scope.data.date, eventimg: $scope.data.eventimg  }).then(function(result) {
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
 });*/