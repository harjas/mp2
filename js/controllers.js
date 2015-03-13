var imdbControllers = angular.module('imdbController', []);

imdbControllers.controller('listController', function(dataService, $scope) {

  dataService.listData(function(data) {
    $scope.movies = data;
  });
});

imdbControllers.controller('detailsController', function(dataService, $scope, $routeParams){
	dataService.detailData($routeParams, function(data){
		$scope.movie = data;
	});
});

imdbControllers.controller('galleryController', function(dataService, $scope){
	// $scope.genreFilter = null;
	// genreFilter = function(movie){
	// 		var keyword = new RegExp($scope.genreFilter,'i');
	// 		return !$scope.genreFilter || keyword.test(movie.genre);
	// }
	dataService.galleryData(function(data){
		$scope.movies = data;
	});
});