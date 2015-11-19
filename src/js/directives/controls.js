slice.directive('ceControls', ceControls);

function ceControls(sliceConfig, Slices, $timeout) {
	return {
		restrict: 'EA',
		link: function($scope, element, attrs) {

			$scope.editing = false;

			$scope.editSlice = function() {

				$scope.editing = true;
			}

			$scope.updateSlice = function() {

				$scope.editing = false;
				$scope.updateSlices();
			}

			$scope.resetSliceOpacity = function() {

				$scope.slice.opacity = 0.5;
				$scope.updateSlices();
			}

			$scope.detectEnterKey = function(ev) {

				if ( ev.which === 13 ) {

					$scope.updateSliceName();
				}
			}

			$scope.hideAllSlices = function() {

				angular.forEach( $scope.slices, function(slice) {

					slice.visible = false;
				});
			}

			$scope.updateSlices = function() {

				Slices.updateSlices( $scope.slices );
			}

			$scope.toggleSlice = function() {

				var visible = $scope.slice.visible;

				if ( visible ) {

					$scope.slice.visible = false;
				} else {

					$scope.hideAllSlices();

					$scope.slice.visible = true;
				}

				$scope.updateSlices();
			}

			$scope.resetPosition = function() {

				var visible = $scope.slice.visible;

				if ( !visible ) { return; }

				$scope.slice.position = {
					top: 0,
					left: 0
				}

				$scope.updateSlices();
			}
		},
		controller: function($scope) {
		},
		templateUrl: sliceConfig.template + '/controls.html',
	};
}