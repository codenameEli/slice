slice.directive('ceDraggable', ceDraggable);

function ceDraggable(sliceConfig, $timeout) {
	return {
		restrict: 'EA',
		link: function($scope, element, attrs) {

			function updatePosition( event, ui ) {

				$scope.$apply(function() {

					$scope.slice.position = ui.position;

					$scope.updateSlices();
				});
			}

			element.draggable({

				stop: function( event, ui ) {

					updatePosition( event, ui );
				}
			});
		},
	};
}