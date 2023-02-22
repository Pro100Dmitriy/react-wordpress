enum backgroundType {
    None = 'none',
    Image = 'image',
    Video = 'video'
}

interface ISectionBackground {
    type: backgroundType

    imageSrc?: string
    imageAlt?: string

    videoSrc?: string
    videoPoster?: string
}

const SectionBackground = ( { type, imageSrc = '', imageAlt = '', videoSrc = '', videoPoster = '' }: ISectionBackground ) => {

    const imageBg = () => {
        return (
            <picture>
                <source srcSet={ imageSrc } media="(min-width: 1920px)"/>
                <source srcSet={ imageSrc } media="(min-width: 1280px)"/>
                <source srcSet={ imageSrc } media="(max-width: 1279px)"/>
                <source srcSet={ imageSrc } media="(max-width: 767px)"/>
                <img src={ imageSrc } alt={ imageAlt }/>
            </picture>
        )
    }

    const videoBg = () => {
        return (
            <video disablePictureInPicture loop autoPlay playsInline muted poster={ videoPoster }>
                <source src={ videoSrc } type="video/mp4"/>
            </video>
        )
    }

    return (
        <div className="section__bg" aria-hidden="true">
            <div className="background-img">
                { type === backgroundType.Image ? imageBg() : null }
                { type === backgroundType.Video ? videoBg() : null }
            </div>
        </div>
    )
}

export default SectionBackground