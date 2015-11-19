slice.service( "Slices", Slices );

function Slices( $rootScope, LocalStorage ) {

	var Slices = {};

	function _syncSlices( storageSlices, dirSlices ) {

		var finalSlices = [],
			storageCount = storageSlices.length,
			dirCount = dirSlices.length;

		// if they are equal, return
		// else find where the diff is
		// if in stoage
		// delete out of stoage
		// if is in dir
		// add to storage

		console.log(storageSlices, dirSlices);

		var diff = storageCount === dirCount;

		console.log(diff);

		if ( diff ) { return; }

		if ( storageCount > dirCount ) {

			// Delete out of storage
			_.each( storageSlices, function( slice ) {

				var sliceToDelete = _.filter( dirSlices, function( dirSlice ) {

					if ( dirSlice.src === slice.src ) {

						return;
					}

					return dirSlice;
				});

				console.log(sliceToDelete);
			});
			return;
		}

		if ( dirCount > storageCount ) {

			// Add to storage
			return;
		}
	}

	function _getSlices() {

		var slices = LocalStorage.getItem( 'Slice' );

		_syncSlices( slices, slicesJSON );

		if ( slices == null ) {

			_setSlices( slicesJSON );
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