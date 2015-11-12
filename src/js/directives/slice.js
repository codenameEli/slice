slice.directive('ceSlice', ceSlice);

function ceSlice(sliceConfig, $timeout) {
	return {
		restrict: 'EA',
		link: function($scope, element, attrs) {

			var toggleOverlay = function() {

				$scope.$apply(function() {

					$scope.slice.visible = false;

					$timeout( function() {

						$scope.slice.visible = true;
					}, 2000 );
				});
			}

			// Click Events
			element.bind( 'contextmenu', function(event) { toggleOverlay() });
		},
		templateUrl: sliceConfig.template + '/slice.html',
	};
}