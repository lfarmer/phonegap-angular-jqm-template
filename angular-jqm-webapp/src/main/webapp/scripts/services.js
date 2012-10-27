'use strict';

/* Services */
angular.module('justeatsafe.services', ['ngResource']).
		factory('Eatsafe', function($resource){ 
			//return $resource('http://ratings.food.gov.uk/search-name/:search/json', {}, {
			return $resource('data/:search.json', {}, {
				query: {method:'GET', params:{search:'search'}, isArray:true}
			});
		});

