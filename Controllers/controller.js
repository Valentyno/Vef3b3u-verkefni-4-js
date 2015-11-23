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
		$scope.random = Math.floor((Math.random() * $scope.data.rings.length) + 0);
		$scope.text = $scope.data.rings[$scope.random].text;
		console.log($scope.text);
		
		$scope.myFun = function(x){
			$scope.random += x;
			$scope.text = $scope.data.rings[$scope.random].text;
			
			if($scope.random == $scope.data.rings.length - 1){
				$("#front").hide();
			}
			else{
				$("#front").show();
			};


			if($scope.random <= 0){
				$('#back').hide();
			}
			else{
				$("#back").show();
			};
		}	

	});	
	// finish $http.get
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
