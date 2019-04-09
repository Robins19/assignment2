app.controller("formController",function($scope,$rootScope,$state){
 

    $scope.submit=function()
    {
      
     
      
        if($scope.email=="admin@jungleworks.com" && $scope.password == "123456"){
          localStorage.setItem("admin","true");      /*Set the value of the admin in   local storage with key and value pair*/
          $state.go("Dashboard");
        }
        else if($scope.email=="user@jungleworks.com" && $scope.password == "123456"){
          localStorage.setItem("admin","false");
          $state.go("Dashboard");
        }
     
        else{
          $state.go("form");
        }
      }
     
   
});

app.controller("logoutController",function($scope,$state){

  $scope.deleteItems=function()
  {
    
    
    localStorage.clear();  /*Remove all local storage items:*/

    $state.go("form");
    
  }
  
    
  
});

app.controller("DashboardController",function($scope,httpservice,$rootScope,$state){
  $scope.Dash=true;

  var DashboardApiData=httpservice.getrequest('https://reqres.in/api/users?page=1');
  DashboardApiData.then(function successCallback(response){
        $rootScope.Heroes=response.data.data;
        var DashboardApiData=httpservice.getrequest('https://reqres.in/api/users?page=2');
        DashboardApiData.then(function successCallback(response){
          var dataapi=response.data.data;
          $rootScope.Heroes.push(dataapi[0]);
        },function errorCallback(response){

        });

    }, function errorCallback(response){

    });
  
    
       $rootScope.Dashboard=function()
           {
               $state.go("Dashboard");
           }

     if ( localStorage.getItem("admin")=="true")
        {
            $scope.Dash=true;
         }
     if ( localStorage.getItem("admin")=="false")
        {
         $scope.Dash=false;
         }
   
   
     
});


app.controller("HeroesController",function($scope,httpservice,$rootScope,$stateParams,$state){
         
  var HeroApiData=httpservice.getrequest('https://reqres.in/api/users?page=1');
  HeroApiData.then(function successCallback(response){
        $rootScope.topHeroes=response.data.data;
        
        var HeroApiData=httpservice.getrequest('https://reqres.in/api/users?page=2');
        HeroApiData.then(function successCallback(response){
          var herodataapi=response.data.data;
           for(var i=0;i<3;i++)
           {

             $rootScope.topHeroes.push(herodataapi[i]);
           }
           var HeroApiData=httpservice.getrequest('https://reqres.in/api/users?page=3');
           HeroApiData.then(function successCallback(response){
             var herodataap=response.data.data;
              for(var i=0;i<3;i++)
              {
   
                $rootScope.topHeroes.push(herodataap[i]);
              }
              
           },function errorCallback(response){
   
           });
           
        },function errorCallback(response){

        });

    }, function errorCallback(response){

    });
   
     
    $scope.hero=function()
    {
      $state.go("Heroes");
    }

    $scope.Details=function()
    {
      $state.go("Heroes");
    }

    $scope.display=function(herodataap)
    {
      $scope.user = herodataap;
      $scope.showHero=true;
    }

    $scope.viewDetails=function()
    {
      $scope.userid = $scope.user.id;
      $scope.userfirstname = $scope.user.first_name;
      $state.go('api', {userid: $scope.userid,username: $scope.userfirstname});
    }
    
  });


app.controller("apiController",function($scope,$stateParams,$rootScope,$state,$http)
{
    $scope.message="user details";
    $scope.useridget=$stateParams.userid;
    $scope.name=$stateParams.username;
    
    var useriddata=$rootScope.Heroes;
    // var index;
    // for(var i=0;i<useriddata.length;i++)
    // {
    //   if(useriddata[i].id==useridget)
    //   {
    //     $scope.useriddata=useriddata[i];
    //     index=i;
    //   }
    // }
  
    $scope.names = ["frontEnd", "backEnd", "iosdeveloper"];
    $scope.Back=function()
    {
      if(localStorage.getItem("admin")=="true")
      {
      $state.go("Heroes");
    }
  
    }
   $scope.Submit=function()
   {
     var a=$scope.name;
     var b=$scope.job;
     console.log("ello");
    $http({
      method:'POST',
      url:'https://reqres.in/api/users',
      data:{
        a,
        b
      }
  }).then(function successCallback(response){
      $scope.message="done";
      $state.go('Dashboard');
  });
   }

});
