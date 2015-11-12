slice.service( "Slices", Slices );

function Slices( $rootScope, LocalStorage ) {

	var Slices = {};

	function _getSlices() {

		var slices = LocalStorage.getItem( 'Slice' );

		if ( slices == null ) {

			_setSlices(slicesJSON);
		}

		return LocalStorage.getItem( 'Slice' );
	}

	function _setSlices(slices) {

		return LocalStorage.setItem( 'Slice', slices );
	}

	Slices.getSlices = function() {

		return _getSlices();
	}

	Slices.setSlices = function(slices) {

		return _setSlices(slices);
	}

	Slices.updateSlices = function(slices) {

		return _setSlices(slices);
	}

	return Slices;
}