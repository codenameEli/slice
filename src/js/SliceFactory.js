slice.factory( "SliceFactory", SliceFactory );

function SliceFactory( $rootScope, $q ) {
	return function(slicesrc) {

		var Slice = {};

		__construct = function() {

			console.log("GRIOEJEIR");
		}

		Slice.src = slicesrc;
		// console.log(slicesrc);
		return Slice;
	}
}