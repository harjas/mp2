var imdbApp = angular.module('imdbApp', [
	'ngRoute',
	'imdbController'
]);

imdbApp.service('dataService', function($http) {

    var allMovieData = null;

    var listData = function(cb) {
      	$http.get('data/imdb250.json').success(function(data) {
		    
			allMovieData = data;
			console.log(allMovieData);
			
			var searchData = [];
		    for(var i=0; i<data.length; i++){
		    	searchData.push({rank: data[i].rank, 
		    					 title: data[i].title, 
		    					 id: data[i].imdbID });
		    }
		    cb(searchData);
    	});
    };

    var detailData = function(movieId, cb){
    	console.log(movieId.rank);
    	cb(allMovieData[movieId.rank-1]);
    }

    var galleryData = function(cb){
    	 $http.get('data/imdb250.json').success(function(data) {
    		var galData = [];
	    	for(var i=0; i<data.length; i++){
	    		galData.push({id: data[i].imdbID, rank:data[i].rank});
	    	}
	    	cb(galData);
    	 });
    }

    return {
      listData: listData,
      detailData: detailData,
      galleryData: galleryData
    };
  });

imdbApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/list',{
				templateUrl:'partials/list.html',
				controller:'listController'
			}).
			when('/details/:rank',{
				templateUrl:'partials/details.html',
				controller:'detailsController'
			}).
			when('/gallery',{
				templateUrl:'partials/gallery.html',
				controller:'galleryController'
			}).
			otherwise({
				redirectTo:'/list'
			});
	}]);