<?php

add_filter( 'block_categories_all', 'hmt_block_categories', 10, 2 );
function hmt_block_categories( $block_categories, $editor_context ) {

	array_unshift( $block_categories, array(
		'slug' => 'sections',
		'title' => __( 'Sections', THEME_TEXTDOMAIN ),
		'icon' => null,
	) );

	return $block_categories;
}