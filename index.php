<!DOCTYPE html>
<html>
<head>
	<title>Slice testing</title>
	<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
	<script type="text/javascript" src="bower_components/ng-module/ng-module.js"></script>
</head>
<body>
	<h2>Slice Testing Grounds!</h2>

	<div ng-module="Slice">
		<div ng-controller="SliceCtrl">
			{{name}}
		</div>
	</div>
</body>
<script type="text/javascript">

	// var slice = angular.module( "Slice", [] );

	// slice.controller( "SliceCtrl", SliceCtrl );

	// console.log(slice);
	// function SliceCtrl( $scope ) {

	// 	$scope.name = "Eli";
	// }
</script>
</html>