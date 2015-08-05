// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('right-intel', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.factory('PostsService', function($http) {
    var b64 = '[add your base64-encoded api username + password here]';
    return {
        async: function() {
            var result = $http.get('http://rightintel/api/v2/posts/search?limit=50',
            {
                headers: {
                    'Authorization': 'Basic ' + b64,
                    'Accept': 'application/json',
                    'Accept-Encoding': 'deflate',
                    'Content-Type': 'application/json',
                }
            });
            return result;
        },
        getPost: function(index) {
            this.async.then(function(posts) {
                return posts.data[index];
            });
        }
    };
});

app.controller('PostsCtrl', function($scope, PostsService) {
    PostsService.async().then(function(posts) {
        $scope.posts = posts.data;
    });
});

app.controller('PostCtrl', function($scope, post) {
    $scope.post = post;
});

// routing
/// http://learn.ionicframework.com/formulas/navigation-and-routing-part-1/ and
/// http://learn.ionicframework.com/formulas/navigation-and-routing-part-2/
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/posts');

    $stateProvider.state('help', {
      url: '/help',
      views: {
        help: {
          templateUrl: 'help.html'
        }
      }
    });
});
