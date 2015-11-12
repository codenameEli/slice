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

    define( 'SLICE_DIR', dirname( __FILE__ ) );
    define( 'SLICE_ASSETS_URI', plugins_url() . '/slice' );

	require SLICE_DIR . '/vendor/autoload.php';

	use Slice\SliceUtils as SliceUtils;
	use Slice\Slices as Slices;

	$Slices = new Slices();
