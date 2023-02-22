// Libs
import { registerBlockType } from '@wordpress/blocks'

// Components
import IntroEdit from './components/edit'
import IntroSave from './components/save'

// Styles
import './styles/edit.scss'
import './styles/style.scss'

// Data
import metadata from './block.json'


export type TAttributes = {
    backgroundImage: string
    backgroundImageAlt: string
    backgroundVideo: string
    posterImage: string
    posterImageAlt: string
    title: string
    kicker: string
}


registerBlockType( metadata.name, {
    attributes: {
        backgroundImage: { type: 'string' },
        backgroundImageAlt: { type: 'string' },
        backgroundVideo: { type: 'string' },
        posterImage: { type: 'string' },
        posterImageAlt: { type: 'string' },
        title: { type: 'string' },
        kicker: { type: 'string' }
    },

    example: {
        attributes: {
            backgroundImage: '',
            backgroundImageAlt: '',
            backgroundVideo: '',
            posterImage: '',
            posterImageAlt: '',
            title: 'Intro Section',
            kicker: 'Kicker'
        }
    },

    edit: IntroEdit,

    save: IntroSave
} )