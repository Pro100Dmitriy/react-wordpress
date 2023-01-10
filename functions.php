<?php

function init_theme() {
	require_once( 'config/constants.php' );

	require_once( 'lib/acf/theme-options.php' );

	register_block_type( __DIR__ . '/build/blocks/section-error/block.json' );
}
add_action( 'after_setup_theme', 'init_theme' );

function create_block_block_admin() {
//	wp_enqueue_script( 'react-wordpress', get_template_directory_uri() . '/build/index.js', ['wp-blocks'] );
//	wp_enqueue_style( 'react-wordpress-style', get_template_directory_uri() . '/assets/section-404.css' );
}
add_action( 'enqueue_block_editor_assets', 'create_block_block_admin' );

function create_block_block_init() {
//	wp_enqueue_script( 'react-wordpress', get_template_directory_uri() . '/build/index.js', ['wp-blocks'] );
//	wp_enqueue_style( 'react-wordpress-style', get_template_directory_uri() . '/assets/section-404.css' );
}
add_action( 'wp_enqueue_scripts', 'create_block_block_init' );