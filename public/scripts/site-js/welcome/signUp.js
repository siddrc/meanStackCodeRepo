myDemoApp.controller('signUpController', signUpController);
signUpController.$inject = ['$scope', '$http','$state'];

function signUpController(scope, http,state) {
    scope.signUpPage = {};

    http.get('/user').success(function(response){
      console.log(response)
    })

    scope.signUpPage.processSignUp = function(){
      var signUpData = {
         userEmail : scope.signUpPage.userEmail,
         userPassword : scope.signUpPage.userPassword
      };

      http.post('/user',signUpData).success(function(response){
        console.log("Data saved "+JSON.stringify(response));
        scope.signUpPage.messageZone = "data saved";
      }).error(function(errorResponse){
        //TODO:commonErrorHandler
      })
    }


    scope.goToLogin = function(){
      state.go('login')
    }
}

//todo inject
