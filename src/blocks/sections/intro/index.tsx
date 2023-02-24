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

// Types
import { backgroundType } from '../../components/section-background'


export type TAttributes = {
    backgroundType: backgroundType
    backgroundImage: string
    backgroundImageAlt: string
    backgroundVideo: string
    posterImage: string
    title: string
    kicker: string
}


registerBlockType( metadata.name, {
    attributes: {
        backgroundType: { type: 'string' },
        backgroundImage: { type: 'string' },
        backgroundImageAlt: { type: 'string' },
        backgroundVideo: { type: 'string' },
        posterImage: { type: 'string' },
        title: { type: 'string' },
        kicker: { type: 'string' }
    },

    example: {
        attributes: {
            backgroundType: '',
            backgroundImage: '',
            backgroundImageAlt: '',
            backgroundVideo: '',
            posterImage: '',
            title: 'Intro Section',
            kicker: 'Kicker'
        }
    },

    edit: IntroEdit,

    save: IntroSave
} )