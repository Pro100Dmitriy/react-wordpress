import { useBlockProps } from '@wordpress/block-editor'
import { MediaUpload } from '@wordpress/editor'
import { Button } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import * as i18n from '@wordpress/i18n'

import { Attributes } from '../index'

interface IProps {
    attributes: Attributes
    setAttributes: () => void
}

const ButtonUpload = ( { open } ) => {
    return (
        <Button
            onClick={ open }
        >
            Upload Image
        </Button>
    )
}

const SectionErrorEdit = ( props: IProps ) => {
    const { attributes, setAttributes } = props
    const blockProps = useBlockProps()

    console.log( wp.components )
    console.log( wp.editor )
    console.log( acf )
    console.log( acf.getField( 'field_63bac1a2c607f' ).val() )
    console.log( i18n )

    const changeTitle = event => {
        setAttributes( { title: event.target.innerText } )
    }

    const onFileSelect = file => {
        setAttributes( {
            url: file.url,
            alt: file.alt
        } )
    }

    return (
        <section { ...blockProps } className="section section-page-404">
            <div className="section__media-controls">
                <MediaUpload
                    onSelect={ onFileSelect }
                    value={ 1 }
                    render={ ButtonUpload }
                />
            </div>

            <div className="section__bg section-page-404__bg" aria-hidden="true">
                <div className="background-img">
                    <picture>
                        <source srcSet={ attributes.url } media="(min-width: 1920px)"/>
                        <source srcSet={ attributes.url } media="(min-width: 1280px)"/>
                        <source srcSet={ attributes.url } media="(max-width: 1279px)"/>
                        <source srcSet={ attributes.url } media="(max-width: 767px)"/>
                        <img src={ attributes.url } alt={ attributes.alt }/>
                    </picture>
                </div>
            </div>

            <div className="section__body">
                <div className="container">
                    <div className="section-page-404__content-wrapper">
                        <div className="section-page-404__content">
                            <div
                                className="section-page-404__error"
                                contentEditable
                                onKeyUp={ changeTitle }
                            >
                                { attributes.title }
                            </div>

                            <div className="section-page-404__button-wrapper">
                                <a className="button button-bordered button-bordered-white section-page-404__button" role="link" href="">
                                    { __( 'Go to Home Page' ) }
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionErrorEdit