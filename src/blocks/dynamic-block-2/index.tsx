import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import {
    useBlockProps,
    ColorPalette,
    InspectorControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n'

registerBlockType( 'gutenberg-examples/example-dynamic-2', {
    apiVersion: 2,
    title: 'Example: last post title 123',
    icon: 'megaphone',
    category: 'design',
    attributes: {
        bgColor: { type: 'string' },
        textColor: { type: 'string' },
    },
    edit: function BlockEdit( { attributes: { bgColor, textColor }, setAttributes } ) {
        const blockProps = useBlockProps();
        const posts = useSelect( ( select ) => {
            return select( 'core' ).getEntityRecords( 'postType', 'post', {
                per_page: 1,
            } );
        }, [] );

        const onChangeBGColor = ( hexColor ) => {
            setAttributes( { bgColor: hexColor } );
        };

        const onChangeTextColor = ( newColor ) => {
            setAttributes( { textColor: newColor } );
        };

        if ( ! posts )
            return null;

        return (
            <div { ...blockProps }>
                <InspectorControls key="setting">
                    <fieldset>
                        <legend className="blocks-base-control__label">
                            { __( 'Background color' ) }
                        </legend>
                        <ColorPalette // Element Tag for Gutenberg standard colour selector
                            onChange={ onChangeBGColor } // onChange event callback
                        />
                    </fieldset>
                    <fieldset>
                        <legend className="blocks-base-control__label">
                            { __( 'Text color' ) }
                        </legend>
                        <ColorPalette // Element Tag for Gutenberg standard colour selector
                            onChange={ onChangeTextColor } // onChange event callback
                        />
                    </fieldset>
                </InspectorControls>
                { !! posts.length && (
                    <h3
                        style={ {
                            backgroundColor: bgColor,
                            color: textColor,
                        } }
                    >
                        { posts[ 0 ].title.rendered }
                    </h3>
                ) }
            </div>
        );
    },
} );