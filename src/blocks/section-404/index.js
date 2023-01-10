console.log( 'hello' )

import { registerBlockType } from '@wordpress/blocks'

// import './section-404.scss'
import './style.scss'
import './editor.scss'

import metadata from './block.json'

console.log( metadata )
console.log( wp.blocks )

registerBlockType( metadata.name, {
    example: {
        attributes: {
            mode: "preview"
        },
    },

    edit: () => {
        return (
            <section className="section section-page-404">
                <div className="section__bg section-page-404__bg" aria-hidden="true">
                    <div className="background-img">

                    </div>
                </div>

                <div className="section__body">
                    <div className="container">
                        <div className="section-page-404__content-wrapper">
                            <div className="section-page-404__content">
                                <div className="section-page-404__error">
                                    <span className="error-number">
                                        404
                                    </span>
                                </div>

                                <div className="section-page-404__button-wrapper">
                                    <a className="button button-bordered button-bordered-white section-page-404__button" role="link" href="">
                                        Go to Homepage
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    },
    save: () => {
        return (
            <section className="section section-page-404">
                <div className="section__bg section-page-404__bg" aria-hidden="true">
                    <div className="background-img">

                    </div>
                </div>

                <div className="section__body">
                    <div className="container">
                        <div className="section-page-404__content-wrapper">
                            <div className="section-page-404__content">
                                <div className="section-page-404__error">
                                    <span className="error-number">
                                        404
                                    </span>
                                </div>

                                <div className="section-page-404__button-wrapper">
                                    <a className="button button-bordered button-bordered-white section-page-404__button" role="link" href="">
                                        Go to Homepage
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
} )