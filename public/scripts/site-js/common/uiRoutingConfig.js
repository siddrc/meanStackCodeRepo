myDemoApp.config(['$stateProvider','$urlRouterProvider',
  function(stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise("/login");
    stateProvider.state('login',{
      url: "/login",
      controller:'loginController',
      templateUrl: "views/welcome/login.html"
    }).state("signUp",{
      url: "/signUp",
      controller:'signUpController',
      templateUrl: "views/welcome/signUp.html"
    });/*.state('app', {
      url: "/app",
      controller:'homePageController',
      templateUrl: "views/home/home.html"
    })*/
  }]);
