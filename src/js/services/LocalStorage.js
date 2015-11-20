slice.service( "LocalStorage", LocalStorage );

function LocalStorage( $rootScope, $q ) {

	var self = this;

	function _setItem( key, value ) {

		if ( angular.isObject( value ) ) {

			value = JSON.stringify( value );
		}

		localStorage.setItem( key, value );
	}

	this.setItem = function( key, value ) {

		return _setItem( key, value );
	}

	function _getItem( key ) {

		return angular.fromJson( localStorage.getItem( key ) );
	}

	this.getItem = function( key ) {

		return _getItem( key );
	}

	function _removeItem( key, index ) {

		var storage = _getItem( key );

		storage.splice( index, 1 );

		_setItem( key, storage );
	}

	this.removeItem = function( key, index ) {

		return _removeItem( key, index );
	}

	function _addItem( key, item ) {

		var storage = _getItem( key );

		console.log(storage);
		storage.push( item );

		_setItem( key, storage );
	}

	this.addItem = function( key, item ) {

		return _addItem( key, item );
	}

	this.clear = function() {

		localStorage.clear();
	}
}