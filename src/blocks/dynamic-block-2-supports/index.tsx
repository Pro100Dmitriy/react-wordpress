import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-dynamic-2-supports', {
    apiVersion: 2,
    title: 'Example: last post title(block supports)',
    icon: 'megaphone',
    category: 'design',
    edit: function BlockEdit() {
        const blockProps = useBlockProps();
        const posts = useSelect( ( select ) => {
            return select( 'core' ).getEntityRecords( 'postType', 'post', {
                per_page: 1,
            } );
        }, [] );
        if ( ! posts ) {
            return null;
        }
        return (
            <div { ...blockProps }>
                { !! posts.length && <h3>{ posts[ 0 ].title.rendered }</h3> }
            </div>
        );
    },
    supports: { color: true },
} );