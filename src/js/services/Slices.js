slice.service( "Slices", Slices );

function Slices( $rootScope, LocalStorage ) {

	var Slices = {};

	var dirSlices = slicesJSON;
	var storageSlices = LocalStorage.getItem( 'Slice' );

	function getSlicesSrcs( list ) {

		var final = [];

		_.each( list, function( item ) {

			final.push( item.src );
		});

		return final;
	}

	function deleteSliceFromStorage( ids ) {

		_.each( ids, function( id ) {

			var index = _.indexOf( storageSlices, _.findWhere( storageSlices, { src: id } ) );

			LocalStorage.removeItem( 'Slice', index );
		});
	}

	function addSliceToStorage( ids ) {

		_.each( ids, function( id ) {

			var index = _.findWhere( dirSlices, { src: id } );

			console.log(index);

			LocalStorage.addItem( 'Slice', index );
		});
	}

	function _syncSlices() {

		var finalSlices = [],
			storageCount = storageSlices.length,
			storageSrcs = getSlicesSrcs( storageSlices ),
			dirCount = dirSlices.length,
			dirSrcs = getSlicesSrcs( dirSlices );

		var diff = storageCount === dirCount;

		if ( diff ) { return; }

		if ( storageCount > dirCount ) {

			var diff = _.difference( storageSrcs, dirSrcs );

			deleteSliceFromStorage( diff );
		}

		if ( dirCount > storageCount ) {

			console.log(dirSlices);
			var diff = _.difference( dirSrcs, storageSrcs );
			console.log(diff);

			addSliceToStorage( diff );
			// Add to storage
			return;
		}
	}

	function _getSlices() {

		if ( storageSlices == null ) {

			_setSlices( slicesJSON );
		} else {

			_syncSlices();
		}

		return LocalStorage.getItem( 'Slice' );
	}

	function _setSlices(slices) {

		return LocalStorage.setItem( 'Slice', slices );
	}

	this.getSlices = function() {

		return _getSlices();
	}

	this.setSlices = function(slices) {

		return _setSlices(slices);
	}

	this.updateSlices = function(slices) {

		return _setSlices(slices);
	}
}