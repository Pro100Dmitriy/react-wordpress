import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-03-editable-esnext', {
    apiVersion: 2,
    title: 'Example: Basic with block supports',
    icon: 'universal-access-alt',
    category: 'design',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },
    example: {
        attributes: {
            content: 'Hello World',
        },
    },
    edit: ( props ) => {
        const {
            attributes: { content },
            setAttributes,
            className,
        } = props;
        const blockProps = useBlockProps();
        const onChangeContent = ( newContent ) => {
            setAttributes( { content: newContent } );
        };
        return (
            <RichText
                { ...blockProps }
                tagName="p"
                onChange={ onChangeContent }
                value={ content }
            />
        );
    },
    save: ( props ) => {
        const blockProps = useBlockProps.save();
        return (
            <RichText.Content
                { ...blockProps }
                tagName="p"
                value={ props.attributes.content }
            />
        );
    },
} );