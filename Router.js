var app=angular.module("tourOfHeroes",["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/form')
    $stateProvider
    .state('form',{
        url:'/form',
        templateUrl:'form.html',
        controller:'formController'
      
    })
    .state('Logout',{
        url:'/Logout',
        templateUrl:'Logout.html',
        controller:'logoutController',
        resolve:{
            'check':function($state,$rootScope){
                if(localStorage.getItem("admin") == "true" || localStorage.getItem("admin") == "false" ){
                    $state.go('Logout');
                }
                else
                {
                 $state.go('form');
                }
            }
     }
       
    })
    .state('mainLogin',{
        url:'/mainLogin',
        templateUrl:'mainLogin.html',
        controller:'mainLoginController',
        resolve:{
            'check':function($state,$rootScope){
                if(localStorage.getItem("admin") == "true" || localStorage.getItem("admin") == "false"){
                    $state.go('mainLogin');
                }
                else
                {
                 $state.go('form');
                }
            }
     }
       
    })
    .state('Dashboard',{
        url:'/Dashboard',
        templateUrl:'Dashboard.html',
        controller:'DashboardController',
        resolve:{
            'check':function($state,$rootScope){
                if(localStorage.getItem("admin") == "true"|| localStorage.getItem("admin") == "false" ){
                    $state.go('Dashboard');
                }
                else
                {
                 $state.go('form');
                }
            }
     }
        
        
    })
    .state('api',{
        url:'/api/:userid/:username',
        templateUrl:'api.html',
        controller:'apiController',
        resolve:{
            'check':function($state,$rootScope){
                if(localStorage.getItem("admin") == "true" || localStorage.getItem("admin") == "false" ){
                    $state.go('api');
                }
                else
                {
                 $state.go('form');
                }
            }
     }
        
       
        
    })
    
    
    .state('Heroes',{
        url:'/Heroes',
        templateUrl:'Heroes.html',
        controller:'HeroesController',
        resolve:{
            'check':function($state,$rootScope){
        if(localStorage.getItem("admin") == "true" || localStorage.getItem("admin") == "false" ){
                    $state.go('Heroes');
                }
                else
                {
                 $state.go('form');
                }
            }
     }
       
    })
    .state('topHeroes',{
        url:'/topHeroes',
        templateUrl:'topHeroes.html',
        controller:'topHeroesController',
        resolve:{
            'check':function($state,$rootScope){
                if(localStorage.getItem("adminname") == "admin@jungleworks.com" && localStorage.getItem("adminpassword") == "123456" ){
                    $state.go('topHeroes');
                }
                else
                {
                 $state.go('form');
                }
            }
     }
       
    })
    
});