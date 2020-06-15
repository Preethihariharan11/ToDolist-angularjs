app.controller("myctrl", function($scope) {
    $scope.products =["milk"];
    $scope.add= function(){
      $scope.products.push($scope.addme);
      $scope.addme = "";
    }
    //  $scope.done=function(){
    //    $scope.remove();
    //  }
    $scope.remove= function(i){
      // $scope.donee.push($scope.i);
      $scope.products.splice(i,1);
    }
    // $scope.filterResults = $filter('filter')($scope.filterText);
    // $scope.fill=function(){
    //   return ng-repeat="x in names | filter:test";
    // }
  });