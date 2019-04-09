app.service('httpservice',function($http){
    this.getrequest=function(httpurl){
        return $http.get(httpurl);          /* return promises*/
    }
});  