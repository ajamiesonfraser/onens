// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

.state('tab.input1', {
  url: '/input1',
      views:{
        'tab-input1': {
          templateUrl: 'templates/input1.html',
          controller: 'Input1Ctrl'
        }
        }
      })
  .state('tab.input2', {
    url: '/input2',
    views:{
      'tab-input1': {
        templateUrl: 'templates/input2.html',
        controller: 'Input2Ctrl'
      }
    }
  })
  .state('tab.input3', {
    url: '/input3',
    views:{
      'tab-input1': {
        templateUrl: 'templates/input3.html',
        controller: 'Input3Ctrl'
      }
    }
  })
  .state('tab.input4', {
    url: '/input4',
    views:{
      'tab-input1': {
        templateUrl: 'templates/input4.html',
        controller: 'Input4Ctrl'
      }
    }
  })
      .state('tab.input5', {
        url: '/input5',
        views:{
          'tab-input1': {
            templateUrl: 'templates/input5.html',
            controller: 'Input5Ctrl'
          }
        }
      })
      .state('tab.input6', {
        url: '/input6',
        views:{
          'tab-input1': {
            templateUrl: 'templates/input6.html',
            controller: 'Input6Ctrl'
          }
        }
      })
      .state('tab.input7', {
        url: '/input7',
        views:{
          'tab-input1': {
            templateUrl: 'templates/input7.html',
            controller: 'Input7Ctrl'
          }
        }
      })
      .state('tab.input8', {
        url: '/input8',
        views:{
          'tab-input1': {
            templateUrl: 'templates/input8.html',
            controller: 'Input8Ctrl'
          }
        }
      })
      .state('tab.input9', {
        url: '/input9',
        views:{
          'tab-input1': {
            templateUrl: 'templates/input9.html',
            controller: 'Input9Ctrl'
          }
        }
      })
      .state('tab.input10', {
        url: '/input10',
        views:{
          'tab-input1': {
            templateUrl: 'templates/input10.html',
            controller: 'Input10Ctrl'
          }
        }
      })
      .state('tab.input11', {
        url: '/input11',
        views:{
          'tab-input1': {
            templateUrl: 'templates/input11.html',
            controller: 'Input11Ctrl'
          }
        }
      })
      .state('tab.output', {
        url: '/output',
        views:{
          'tab-input1': {
            templateUrl: 'templates/output.html',
            controller: 'OutputCtrl'
          }
        }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/input1');

});
