import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'react-wordpress/example-06', {
    apiVersion: 2,
    title: 'Example: inner blocks',
    icon: 'megaphone',
    category: 'design',

    edit: () => {
        const blockProps = useBlockProps();
        const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ];

        return (
            <div { ...blockProps }>
                <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
            </div>
        );
    },

    save: () => {
        const blockProps = useBlockProps.save();

        return (
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );