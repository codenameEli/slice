slice.controller( 'SliceCtrl', SliceCtrl );

function SliceCtrl( $scope, Slices ) {

	$scope.name = "Eli";
	$scope.mainToolbarVisible = true;

	// Slices.setSlices( slices );
	$scope.slices = Slices.getSlices();

	$scope.updateSlices = function() {

		Slices.updateSlices( $scope.slices );
	}
	$scope.toggleMainToolbar = function() {

		$scope.mainToolbarVisible = $scope.mainToolbarVisible == true ? false : true;
	}


	// var Slice = {
	// 	paths: {
	// 		base: location.origin,
	// 		slices: location.origin + '/slices',
	// 	},
	// 	slices: slices,
	// 	_getSlices: function() {
	// 		LocalStorageService.getItem( 'Slice' ).slices;
	// 	},
	// 	getSlices: function() {
	// 		this._getSlices();
	// 	},
	// 	__construct: function() {

	// 		this.getSlices();
	// 	}
	// }
	// console.log(Slice);


	// LocalStorageService.setItem( 'Slice', Slice );
	// $scope.slicesSrcs = LocalStorageService.getItem( 'Slice' ).slices;
	// $scope.slices = [];

	// console.log('$scope.slicesSrcs', $scope.slicesSrcs);

	// angular.forEach( $scope.slicesSrcs, function(sliceSrc, index) {

	// 	var test = new SliceFactory( sliceSrc );
	// 	console.log('testing', test);
	// 	$scope.slices.push( Slice.system + '/' + sliceSrc );
	// });


	// console.log(location.href);
	// LocalStorageService.setItem( 'name', $scope.name );
	// LocalStorageService.removeItem( 'name', $scope.name );
	// LocalStorageService.clear();
}