<?php

namespace Slice;

class SliceUtils {

	public static function get_slices() {

		$slice_paths = scandir( './slices' );

		return json_encode( array_slice( $slice_paths, 2 ) );
	}
}