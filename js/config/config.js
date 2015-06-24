teste.config(function ($routeProvider, $locationProvider) {
	if(window.history && window.history.pushState){
     $locationProvider.html5Mode({
             enabled: true,
             requireBase: false
      });
    }

	$routeProvider.
		when('/movel/new', {
			templateUrl: '/angular/view/movel-new.html',
			controller: 'mainCtrl'
		}).
		when('/movel/:movelId', {
			templateUrl: '/angular/view/movel-detail.html',
			controller: 'mainCtrl'
		}).
		when('/moveis', {
			templateUrl: '/angular/view/movel-list.html',
			controller: 'mainCtrl'
		}).
		otherwise({
			redirectTo: '/moveis'
  		});
});