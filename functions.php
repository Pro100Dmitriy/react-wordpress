<?php

function init_theme() {
	require_once( 'config/constants.php' );

	require_once( 'lib/acf/theme-options.php' );

	register_block_type( __DIR__ . '/build/blocks/section-error/block.json' );
	register_block_type( __DIR__ . '/build/blocks/rich-text/block.json' );
	register_block_type( __DIR__ . '/build/blocks/gutenpride/block.json' );
	register_block_type( __DIR__ . '/build/blocks/supports/block.json' );

	$asset_file = include( __DIR__ . '/build/blocks/dynamic-block/index.asset.php' );

	wp_register_script(
		'gutenberg-examples-dynamic',
		plugins_url( 'build/block.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type( 'gutenberg-examples/example-dynamic', array(
		'api_version' => 2,
		'editor_script' => 'gutenberg-examples-dynamic',
		'render_callback' => 'gutenberg_examples_dynamic_render_callback'
	) );
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

/**
 * Dynamic Block
 */

function gutenberg_examples_dynamic_render_callback( $block_attributes, $content ) {
	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => 1,
		'post_status' => 'publish',
	) );
	if ( count( $recent_posts ) === 0 ) {
		return 'No posts';
	}
	$post = $recent_posts[ 0 ];
	$post_id = $post['ID'];
	return sprintf(
		'<a class="wp-block-my-plugin-latest-post" href="%1$s">%2$s</a>',
		esc_url( get_permalink( $post_id ) ),
		esc_html( get_the_title( $post_id ) )
	);
}