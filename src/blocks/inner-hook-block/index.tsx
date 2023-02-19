import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-06-2', {
    apiVersion: 2,
    title: 'Example: inner blocks hook',
    icon: 'megaphone',
    category: 'design',

    edit: () => {
        const blockProps = useBlockProps();
        const innerBlocksProps = useInnerBlocksProps();

        return (
            <div { ...blockProps }>
                <div {...innerBlocksProps} />
            </div>
        );
    },

    save: () => {
        const blockProps = useBlockProps.save();
        const innerBlocksProps = useInnerBlocksProps.save();

        return (
            <div { ...blockProps }>
                <div {...innerBlocksProps} />
            </div>
        );
    },
} );

// registerBlockType( 'gutenberg-examples/example-06', {
//     edit: () => {
//         const blockProps = useBlockProps();
//         const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps );
//
//         return (
//             <div {...innerBlocksProps}>
//                 { children }
//                 <!-- Insert any arbitrary html here at the same level as the children -->
//             </div>
//         );
//     }
// } );