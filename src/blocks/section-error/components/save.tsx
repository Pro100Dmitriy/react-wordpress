const SectionErrorSave = props => {
    const { attributes } = props

    console.log( props )

    return (
        <section className="section section-page-404">
            <div className="section__bg section-page-404__bg" aria-hidden="true">
                <div className="background-img">
                    <picture>
                        <source srcSet={ attributes.url } media="(min-width: 1920px)"/>
                        <source srcSet={ attributes.url } media="(min-width: 1280px)"/>
                        <source srcSet={ attributes.url } media="(max-width: 1279px)"/>
                        <source srcSet={ attributes.url } media="(max-width: 767px)"/>
                        <img src={ attributes.url } alt="Some"/>
                    </picture>
                </div>
            </div>

            <div className="section__body">
                <div className="container">
                    <div className="section-page-404__content-wrapper">
                        <div className="section-page-404__content">
                            <div className="section-page-404__error">
                                { attributes.title }
                            </div>

                            <div className="section-page-404__button-wrapper">
                                <a className="button button-bordered button-bordered-white section-page-404__button" role="link" href="">
                                    Go to Home Page
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionErrorSave