slice.service( "LocalStorageService", LocalStorageService );

function LocalStorageService( $rootScope, $q ) {

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

	function _removeItem( key ) {

		localStorage.removeItem( key );
	}

	this.removeItem = function( key ) {

		return _removeItem( key );
	}

	this.clear = function() {

		localStorage.clear();
	}
}