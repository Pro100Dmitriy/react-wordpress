// Libs
import { useState } from '@wordpress/element'
import { Button, ButtonGroup, TextControl } from '@wordpress/components'
import { useBlockProps, InspectorControls, MediaUpload } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'

// Components
import SectionBackground from '../../../components/section-background'

// Types
import { MediaUploadRenderProp, UploadImage } from '../../../types/types'
import { TAttributes } from '../'


type TProps = {
    attributes: TAttributes,
    setAttributes: ( {} ) => any
}


interface IBackgroundFields {
    setImage: ( {}: UploadImage ) => void
    setVideo: ( {}: any ) => void
    setPoster: ( {}: UploadImage ) => void
}

const BackgroundFields = ( { setImage, setVideo, setPoster }: IBackgroundFields ) => {
    const [type, setType] = useState<String>( '' )
    const THEME_TEXT_DOMAIN = 'react-wordpress'

    const imageFields = () => {
        return (
            <fieldset>
                <legend className="blocks-base-control__label">
                    { __( 'Image', THEME_TEXT_DOMAIN ) }
                </legend>

                <MediaUpload
                    value={ 1 }
                    allowedTypes={ ['image'] }
                    onSelect={ setImage }
                    render={ ( render: MediaUploadRenderProp ) =>
                        <Button
                            onClick={ render.open }
                            variant="primary"
                        >
                            { __('Upload Image', THEME_TEXT_DOMAIN) }
                        </Button>
                    }
                />
            </fieldset>
        )
    }

    const videoFields = () => {
        return (
            <fieldset>
                <legend className="blocks-base-control__label">
                    { __( 'Video', THEME_TEXT_DOMAIN ) }
                </legend>

                <MediaUpload
                    value={ 1 }
                    allowedTypes={ ['video'] }
                    onSelect={ setVideo }
                    render={ ( render: MediaUploadRenderProp ) =>
                        <Button
                            onClick={ render.open }
                            variant="primary"
                        >
                            { __('Upload Video', THEME_TEXT_DOMAIN) }
                        </Button>
                    }
                />

                <MediaUpload
                    value={ 1 }
                    allowedTypes={ ['image'] }
                    onSelect={ setPoster }
                    render={ ( render: MediaUploadRenderProp ) =>
                        <Button
                            onClick={ render.open }
                            variant="primary"
                        >
                            { __('Upload Video Poster', THEME_TEXT_DOMAIN) }
                        </Button>
                    }
                />
            </fieldset>
        )
    }

    return (
        <>
            <fieldset>
                <legend className="blocks-base-control__label">
                    { __( 'Background Type', THEME_TEXT_DOMAIN ) }
                </legend>

                <ButtonGroup>
                    <Button
                        variant="primary"
                        onClick={ () => setType( 'none' ) }
                    >
                        { __( 'None', THEME_TEXT_DOMAIN ) }
                    </Button>

                    <Button
                        variant="primary"
                        onClick={ () => setType( 'image' ) }
                    >
                        { __( 'Image', THEME_TEXT_DOMAIN ) }
                    </Button>

                    <Button
                        variant="primary"
                        onClick={ () => setType( 'video' ) }
                    >
                        { __( 'Video', THEME_TEXT_DOMAIN ) }
                    </Button>
                </ButtonGroup>
            </fieldset>

            { type === 'image' ? imageFields() : null }
            { type === 'video' ? videoFields() : null }
        </>
    )
}


const IntroEdit = ( props: TProps ) => {
    const { attributes, setAttributes } = props
    const { backgroundImage, backgroundImageAlt, backgroundVideo, posterImage, posterImageAlt, title, kicker } = attributes
    const blockProps = useBlockProps()

    const THEME_TEXT_DOMAIN = 'react-wordpress'


    const setImage = ( { url, alt }: UploadImage ) => {
        setAttributes( { backgroundImage: url, backgroundImageAlt: alt } )
    }

    const setVideo = ( file: any ) => {

    }

    const setPoster = ( { url, alt }: UploadImage ) => {
        setAttributes( { posterImage: url, posterImageAlt: alt } )
    }

    return (
        <>
            <InspectorControls key="setting">
                <div id="gutenpride-controls">
                    <BackgroundFields
                        setImage={ setImage }
                        setVideo={ setVideo }
                        setPoster={ setPoster }
                    />

                    <fieldset>
                        <legend className="blocks-base-control__label">
                            { __( 'Title', THEME_TEXT_DOMAIN ) }
                        </legend>

                        <TextControl
                            value={ 'Something' }
                            type="text"
                            onChange={ ( value: string ) => console.log( value ) }
                        />
                    </fieldset>

                    <fieldset>
                        <legend className="blocks-base-control__label">
                            { __( 'Kicker', THEME_TEXT_DOMAIN ) }
                        </legend>

                        <TextControl
                            value={ 'Something' }
                            type="text"
                            onChange={ ( value: string ) => console.log( value ) }
                        />
                    </fieldset>
                </div>
            </InspectorControls>

            <section { ...blockProps }>
                <SectionBackground
                    type="none"
                />

                <div className="section__body section-intro__body">
                    <div className="container">
                        <div className="section-intro__content">
                            <div className="section-intro__main">
                                <div className="section-intro__subtitle section-subtitle">
                                    { kicker }
                                </div>

                                <div className="section-intro__title section-title">
                                    <h1 className="js-font-title">
                                        { title }
                                    </h1>
                                </div>

                                <div className="section-intro__buttons">
                                    <a
                                        className="button button-primary section-intro__button"
                                        href="#"
                                        target="#"
                                    >
                                        { __( 'Learn More', THEME_TEXT_DOMAIN ) }
                                    </a>
                                </div>
                            </div>

                            <div className="section-intro__video">
                                <div className="section-intro__video-inner">
                                    <a
                                        className="button-play button-play--small"
                                        href="#"
                                        data-toggle="modal"
                                        aria-label={ __( 'Watch Video', THEME_TEXT_DOMAIN ) }
                                    >
                                        <span className="button-play__icon">

                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntroEdit