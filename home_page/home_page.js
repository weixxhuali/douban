!function(e){e.module("moviecat.homePage",["ngRoute"]).config(["$routeProvider",function(e){e.when("/home_page",{templateUrl:"./home_page/view.html"}).otherwise({redirectTo:"/home_page"})}]).controller("HomePageController",["$scope","$location",function(e,o){e.searchTxt="",e.search=function(){o.url("/search?q="+e.searchTxt),e.searchTxt=""}}])}(angular);