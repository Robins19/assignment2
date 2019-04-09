app.controller('onLoad',function($scope,$state)
{
    $scope.load=function()
    {
      localStorage.setItem("admin", "true");
    } 
});