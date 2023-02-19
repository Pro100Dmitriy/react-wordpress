<?php

function init_theme() {
	require_once( 'config/constants.php' );

	require_once( 'lib/acf/theme-options.php' );

	register_block_type( __DIR__ . '/build/blocks/section-error/block.json' );
	register_block_type( __DIR__ . '/build/blocks/rich-text/block.json' );
	register_block_type( __DIR__ . '/build/blocks/gutenpride/block.json' );
	register_block_type( __DIR__ . '/build/blocks/supports/block.json' );
	register_block_type( __DIR__ . '/build/blocks/dynamic-block-2/block.json' );
	register_block_type( __DIR__ . '/build/blocks/dynamic-block-2-supports/block.json' );
	register_block_type( __DIR__ . '/build/blocks/inner-block-1/block.json' );
	register_block_type( __DIR__ . '/build/blocks/inner-hook-block/block.json' );

	// Dynamic Blocks
	$asset_file = include( __DIR__ . '/build/blocks/dynamic-block/index.asset.php' );

	wp_register_script( 'gutenberg-examples-dynamic', get_theme_file_uri( '/build/blocks/dynamic-block/index.js' ), $asset_file['dependencies'], $asset_file['version'] );
	register_block_type( 'gutenberg-examples/example-dynamic', [ 'api_version' => 2, 'editor_script' => 'gutenberg-examples-dynamic', 'render_callback' => 'gutenberg_examples_dynamic_render_callback'] );

	// Dynamic Blocks 2
	register_block_type( 'gutenberg-examples/example-dynamic-2',
		array(
			'api_version'       => 2,
			'category'          => 'design',
			'attributes'        => array(
				'bgColor'   => array( 'type' => 'string' ),
				'textColor' => array( 'type' => 'string' ),
			),
			'render_callback'   => 'gutenberg_examples_dynamic_render_callback_2',
			'skip_inner_blocks' => true,
		)
	);
	register_block_type(
		'gutenberg-examples/example-dynamic-2-supports',
		array(
			'api_version' => 2,
			'category' => 'design',
			'supports' => array('color' => true),
			'render_callback' => 'gutenberg_examples_dynamic_block_supports_render_callback',
			'skip_inner_blocks' => true,
		)
	);
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

/**
 * Dynamic Block 2
 */
function gutenberg_examples_dynamic_render_callback_2( $block_attributes, $content ) {
	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => 1,
		'post_status' => 'publish',
	) );
	if ( count( $recent_posts ) === 0 ) {
		return 'No posts';
	}
	$post    = $recent_posts[ 0 ];
	$post_id = $post['ID'];
	$styles  = '';
	if ( ! empty( $block_attributes['bgColor'] ) ) {
		$styles .= "background-color:{$block_attributes['bgColor']};";
	}
	if ( ! empty( $block_attributes['textColor'] ) ) {
		$styles .= "color:{$block_attributes['textColor']};";
	}
	$wrapper_attributes = get_block_wrapper_attributes();
	return sprintf(
		'<h3 %1$s href="%2$s" style="%3$s">%4$s<h3>',
		$wrapper_attributes,
		esc_url( get_permalink( $post_id ) ),
		esc_attr( $styles ),
		esc_html( get_the_title( $post_id ) )
	);
}


function gutenberg_examples_dynamic_block_supports_render_callback( $block_attributes, $content ) {
	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => 1,
		'post_status' => 'publish',
	) );
	if ( count( $recent_posts ) === 0 ) {
		return 'No posts';
	}
	$post = $recent_posts[0];
	$post_id = $post['ID'];
	$wrapper_attributes = get_block_wrapper_attributes();
	return sprintf(
		'<h3 %1$s href="%2$s">%3$s<h3>',
		$wrapper_attributes,
		esc_url( get_permalink( $post_id ) ),
		esc_html( get_the_title( $post_id ) )
	);
}