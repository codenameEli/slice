<?php

	require __DIR__ . '/vendor/autoload.php';

	use Slice\SliceUtils as SliceUtils;
	use Slice\Slices as Slices;

	$Slices = new Slices();
	$slices = $Slices->get_slices();