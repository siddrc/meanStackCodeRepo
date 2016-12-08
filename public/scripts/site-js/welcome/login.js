myDemoApp.controller('loginController', loginController);
loginController.$inject = ['$scope', '$http','$state'];

function loginController(scope, http,state) {
    logToConsole("in loginController");
    scope.goToSignUp = function(){
    	state.go('signUp')
    }
}

//todo inject
