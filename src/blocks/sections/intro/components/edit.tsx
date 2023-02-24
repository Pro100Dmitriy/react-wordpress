// Libs
import { TextControl } from '@wordpress/components'
import { useBlockProps, InspectorControls } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'

// Components
import SectionBackground, { BackgroundFields, backgroundType } from '../../../components/section-background'

// Types
import { UploadImage, UploadVideo } from '../../../types/types'
import { TAttributes } from '../'


type TProps = {
    attributes: TAttributes,
    setAttributes: ( {} ) => any
}


const IntroEdit = ( props: TProps ) => {
    const { attributes, setAttributes } = props
    const { backgroundType: bgType, backgroundImage, backgroundImageAlt, backgroundVideo, posterImage, title, kicker } = attributes
    const blockProps = useBlockProps()

    const THEME_TEXT_DOMAIN = 'react-wordpress'

    const setType = ( type: backgroundType ) => {
        setAttributes( { backgroundType: type } )
    }

    const setImage = ( { url, alt }: UploadImage ) => {
        setAttributes( { backgroundImage: url, backgroundImageAlt: alt } )
    }

    const setVideo = ({ url }: UploadVideo ) => {
        setAttributes( { backgroundVideo: url } )
    }

    const setPoster = ( { url, alt }: UploadImage ) => {
        setAttributes( { posterImage: url, posterImageAlt: alt } )
    }

    return (
        <>
            <InspectorControls key="setting">
                <div id="gutenpride-controls">
                    <BackgroundFields
                        type={ bgType }
                        setType={ setType }
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
                    type={ bgType }
                    imageSrc={ backgroundImage }
                    imageAlt={ backgroundImageAlt }
                    videoSrc={ backgroundVideo }
                    videoPoster={ posterImage }
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