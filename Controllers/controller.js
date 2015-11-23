var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'views/home.html',
			controller: 'homeCtrl'
		})
		.when('/shop',{
			templateUrl: 'views/shop.html',
			controller: 'shopCtrl'
		})
		.when('/search',{
			templateUrl: 'views/search.html',
			controller: 'searchCtrl'
		})
		.otherwise({redirectTo: '/'});
});


// Ctrl for home page
myApp.controller('homeCtrl', function($scope, $http){
		
	$http.get('json/home.json').success(function(data){
		$scope.data = data;
		
		$scope.num = 0;
		$scope.arrLeng = data.rings.length;
		$scope.arr = [];
		$scope.cap = [];
		$scope.time = 0;
		
		// trowing obj inside the array $scope.arr
		for (var i = 0; i < $scope.data.rings.length; i++) {
			$scope.arr.push($scope.data.rings[i]);
		};

		function myFunction(){
			
			$scope.num += 1;
			return $scope.num;
		};


		// $scope.time = setInterval(function(){
		// 	myFunction();
		// 	$("img").remove();
		// 	$("<img class='take' src='"+ $scope.data.rings[$scope.num].img +"'>").appendTo("#slide").css("display", "none");
		// 	$("img.take").fadeIn(1000);
		// 	// console.log($scope.arr[$scope.num].img);
		// 	// console.log($scope.num);

		// 	if($scope.num == 4){
		// 		$scope.num = -1;
		// 	};
			
		// 	$('#home').click(function(){
		// 		clearInterval($scope.time);
		// 	});
		
		// }, 1000);

	});	
});


//Ctrl for shop page
myApp.controller('shopCtrl', function($scope, $http){
	$http.get('json/shop.json').success(function(data){
		$scope.data = data;
		console.log($scope.data.rings[0].ship);
	});

});


myApp.controller('searchCtrl', function($scope){
	$scope.name = "KLARA I LOKAVERKEFNI";
	// eftir klara thetta i verkefni 5
});