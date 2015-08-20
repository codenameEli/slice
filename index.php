<?php
	$slices = json_encode( scandir('./slices') );
?>
<!DOCTYPE html>
<html>
<head>
	<title>Slice testing</title>
	<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
	<script type="text/javascript" src="bower_components/ng-module/ng-module.js"></script>
	<script type="text/javascript" src="src/slice.min.js"></script>

	<script type="text/javascript">
		var slices = <?php echo $slices; ?>;
	</script>
</head>
<body>
	<h2>Slice Testing Grounds!</h2>

	<div ng-module="Slice">
		<div ng-controller="SliceCtrl">
			<code>{{ slice }}</code>
			<img ng-repeat="src in slices" src="{{ src }}" />
			<input type="file" class="drag-drop" drag-drop multiple></input>
		</div>
	</div>
</body>

<style type="text/css">
	.drag-drop {
		width: 200px;
		height: 200px;
		background: rgba(171, 31, 31, 0.58);
	}
</style>
</html>