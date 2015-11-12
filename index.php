<?php

	/*
	Plugin Name: Slice
	Plugin URI: https://github.com/codenameEli/Toggle-PSD
	Description: A developer-friendly guide to help your site match the design comps.
	Author: Tim "Eli" Dalbey
	Version: 0.1
	*/

	/*  Copyright 2014  Tim "Eli" Dalbey

	    This program is free software; you can redistribute it and/or modify
	    it under the terms of the GNU General Public License, version 2, as
	    published by the Free Software Foundation.

	    This program is distributed in the hope that it will be useful,
	    but WITHOUT ANY WARRANTY; without even the implied warranty of
	    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	    GNU General Public License for more details.

	    You should have received a copy of the GNU General Public License
	    along with this program; if not, write to the Free Software
	    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
	*/

	// use Slice as Slice;
	// require 'vendor/autoload.php';

	require __DIR__ . '/vendor/autoload.php';

	use Slice\SliceUtils as SliceUtils;
	use Slice\Slices as Slices;

	$Slices = new Slices();
	$slices = $Slices->get_slices();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Slice testing</title>
	<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
	<script type="text/javascript" src="bower_components/jquery-ui/jquery-ui.min.js"></script>
	<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
	<script type="text/javascript" src="bower_components/ng-module/ng-module.js"></script>
	<script type="text/javascript" src="src/slice.min.js"></script>

	<link rel="stylesheet" type="text/css" href="src/css/slice.min.css">

	<script type="text/javascript">
		var slicesJSON = <?php echo $slices; ?>;
	</script>
</head>
<body>
	<h2>Slice Testing Grounds!</h2>

	<div ng-module="Slice">
		<div ng-controller="SliceCtrl">
			<!-- <div ng-repeat="slice in slices">
				<img ng-src="/slices/{{ slice }}" />
			</div> -->

			<div class="controls-container" ng-class="{ hidden: mainToolbarVisible }">
				<div class="slice-main-toolbar">
					SLICE
					<div class="toggle-main-toolbar" ng-click="toggleMainToolbar()">
						<span>
							<i class="fa fa-chevron-up" ng-show="mainToolbarVisible"></i>
						</span>

						<span>
							<i class="fa fa-chevron-down" ng-show="!mainToolbarVisible"></i>
						</span>
					</div>
				</div>
				<ce-controls
				class="slice-controls-container"
				ng-class="{ 'active': slice.visible }"
				ng-repeat="slice in slices"></ce-controls>
			</div>
			<!-- <input type="file" class="drag-drop" drag-drop multiple></input> -->

			<ce-slice
				class="slice-container"
				ng-repeat="slice in slices"
				ng-class="{ 'active': slice.visible }"
				ce-draggable
				style="left: {{ slice.position.left }}px; top: {{ slice.position.top }}px; opacity: {{ slice.opacity }}"
			></ce-slice>
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