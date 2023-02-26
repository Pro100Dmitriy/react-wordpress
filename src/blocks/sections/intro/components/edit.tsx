// Libs
import { __experimentalInputControl as InputControl, Panel, PanelBody, PanelRow } from '@wordpress/components'
import { useBlockProps, InspectorControls } from '@wordpress/block-editor'
import { more } from '@wordpress/icons'
import { __ } from '@wordpress/i18n'

// Components
import SectionBackground, { BackgroundFields, backgroundType } from '../../../../template-parts/section-background'

// Types
import { UploadImage, UploadVideo } from '../../../../types/types'
import { TAttributes } from '../'


type TProps = {
    attributes: TAttributes,
    setAttributes: ( {} ) => any
}


const IntroEdit = ( props: TProps ) => {
    const { attributes, setAttributes } = props
    const { backgroundType: bgType, backgroundImage, backgroundImageAlt, backgroundVideo, posterImage, title, kicker } = attributes
    const blockProps = useBlockProps()

    blockProps.className += ' section section-intro section-intro--style-v2'

    const THEME_TEXT_DOMAIN = 'react-wordpress'

    const setTitle = ( value: string ) => {
        setAttributes( { title: value } )
    }

    const setKicker = ( value: string ) => {
        setAttributes( { kicker: value } )
    }

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
                    <Panel header="My panel">
                        <PanelBody
                            title={ __( 'Background', THEME_TEXT_DOMAIN ) }
                            icon={ more }
                            initialOpen={ true }
                        >
                            <PanelRow>
                                <div>
                                    <BackgroundFields
                                        type={ bgType }
                                        setType={ setType }
                                        setImage={ setImage }
                                        setVideo={ setVideo }
                                        setPoster={ setPoster }
                                    />
                                </div>
                            </PanelRow>
                        </PanelBody>

                        <PanelBody
                            title={ __( 'Content', THEME_TEXT_DOMAIN ) }
                            icon={ more }
                            initialOpen={ true }
                        >
                            <PanelRow>
                                <div>
                                    <InputControl
                                        label={ __( 'Title', THEME_TEXT_DOMAIN ) }
                                        value={ title }
                                        placeholder={ __( 'Type Title', THEME_TEXT_DOMAIN ) }
                                        onChange={ ( value: string ) => setTitle( value ?? '' ) }
                                    />

                                    <InputControl
                                        label={ __( 'Kicker', THEME_TEXT_DOMAIN ) }
                                        value={ kicker }
                                        placeholder={ __( 'Type Kicker', THEME_TEXT_DOMAIN ) }
                                        onChange={ ( value: string ) => setKicker( value ?? '' ) }
                                    />
                                </div>
                            </PanelRow>
                        </PanelBody>
                    </Panel>
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