<?php

namespace Slice;

class Slices {

	public $slices;

	public function __construct() {

		$this->visible = false;

		$this->register_assets();
		$this->enqueue_assets();
		$this->add_actions();
	}

	public function add_actions() {

		add_action( 'wp_footer', array( $this, 'add_slice_markup' ) );
	}

	public function add_slice_markup() {
		?>
		<script type="text/javascript">
			slicesJSON = <?php echo $this->create_slices(); ?>;
		</script>
		<div ng-module="Slice">
			<div ng-controller="SliceCtrl">

				<div class="slices-container" ng-class="{ 'slice-hidden': mainToolbarVisible }">
					<div class="slice-main-toolbar" ng-click="toggleMainToolbar()">
						SLICE
						<div class="toggle-main-toolbar">
							<span>
								<i class="fa fa-chevron-up" ng-show="mainToolbarVisible"></i>
							</span>

							<span>
								<i class="fa fa-chevron-down" ng-show="!mainToolbarVisible"></i>
							</span>
						</div>
					</div>
					<ce-controls
					class="slice-slices-container"
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
		<?php
	}

	public function register_assets() {

		$ver = '0.1';

		wp_register_script( 'angular', SLICE_ASSETS_URI . '/bower_components/angular/angular.min.js', array( 'jquery' ), $ver, true );
		wp_register_script( 'ng-module', SLICE_ASSETS_URI . '/bower_components/ng-module/ng-module.js', array( 'angular' ), $ver, true );
		wp_register_script( 'slice', SLICE_ASSETS_URI . '/src/slice.min.js', array( 'angular', 'underscore', 'ng-module', 'jquery-ui-draggable' ), $ver, true );

		wp_register_style( 'slice', SLICE_ASSETS_URI . '/src/css/slice.min.css', array(), $ver, false );
	}

	public function enqueue_assets() {

		wp_enqueue_script( 'angular' );
		wp_enqueue_script( 'ng-module' );
		wp_enqueue_script( 'slice' );
		wp_enqueue_style( 'slice' );
	}

	public function get_slices() {

		return json_encode( $this->slices );
	}

	public function do_header_assets() {

		?>
			<link rel="stylesheet" type="text/css" href="/src/css/slice.min.css" />
		<?php
	}

	public function do_footer_assets() {

		?>
			<script type="text/javascript" src="bower_components/underscore/underscore-min.js"></script>
			<script type="text/javascript" src="/bower_components/jquery/dist/jquery.min.js"></script>
			<script type="text/javascript" src="/bower_components/jquery-ui/jquery-ui.min.js"></script>
			<script type="text/javascript" src="/bower_components/angular/angular.min.js"></script>
			<script type="text/javascript" src="/bower_components/ng-module/ng-module.js"></script>
			<script type="text/javascript" src="/src/slice.min.js"></script>
		<?php
	}

	public function create_slices() {

		$slice_srcs = $this->get_slice_srcs();
		$slices = array();

		foreach ( $slice_srcs as $i=>$src ) {

			$position = array(
				'left' => 0,
				'top' => 0
			);

			$slice = array(
				'index' => $i,
				'src' => SLICE_ASSETS_URI . '/slices/' . $src,
				'visible' => false,
				'opacity' => 0.5,
				'position' => $position,
			);

			array_push( $slices, $slice );
		}

		return json_encode( $slices );
	}

	private function get_slice_srcs() {

		$slice_srcs = scandir( SLICE_DIR . '/slices' );

		return array_slice( $slice_srcs, 3 );
	}
}