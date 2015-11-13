<?php

namespace Slice;

class Slices {

	public $slices;

	public function __construct() {

		$this->visible = false;

		$this->slices = $this->create_slices();
	}

	public function get_slices() {

		return json_encode($this->slices);
	}

	public function create_slices() {

		$slice_srcs = $this->get_slice_srcs();
		$slices = array();

		foreach ( $slice_srcs as $src ) {

			$position = array(
				'left' => 0,
				'top' => 0
			);

			$slice = array(
				'src' => $src,
				'visible' => false,
				'opacity' => 0.5,
				'position' => $position,
			);

			array_push( $slices, $slice);

		}

		return $slices;
	}

	private function get_slice_srcs() {

		$slice_srcs = scandir( './slices' );

		return array_slice( $slice_srcs, 2 );
	}
}