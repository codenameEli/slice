slice.controller( 'SliceCtrl', SliceCtrl );

function SliceCtrl( $scope, LocalStorageService ) {

	$scope.name = "Eli";

	var Slice = {
		base: location.origin,
		// system: Slice.base + '/slices',
	}

	Slice.system = Slice.base + '/slices';
	Slice.slices = slices;
	$scope.slice = Slice;
	console.log(Slice);


	LocalStorageService.setItem( 'Slice', Slice );
	$scope.slicesSrcs = LocalStorageService.getItem( 'Slice' ).slices;
	$scope.slices = [];

	angular.forEach( $scope.slicesSrcs, function(sliceSrc, index) {

		$scope.slices.push( Slice.system + '/' + sliceSrc );
	});


	// console.log(location.href);
	// LocalStorageService.setItem( 'name', $scope.name );
	// LocalStorageService.removeItem( 'name', $scope.name );
	// LocalStorageService.clear();
}