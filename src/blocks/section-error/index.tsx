import { registerBlockType, registerBlockVariation } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './scss/style.scss'
import './scss/editor.scss'

import SectionErrorEdit from './components/edit'
import SectionErrorSave from './components/save'
import metadata from './block.json'

export type Attributes = {
    title: string,
    url: string,
    alt: string
}

registerBlockType( metadata.name, {
    variations: [
        {
            name: 'wordpress',
            isDefault: true,
            title: __( 'WordPress' ),
            description: __( 'Code is poetry!' ),
            attributes: { providerNameSlug: 'wordpress' },
        },
        {
            name: 'google',
            title: __( 'Google' ),
            attributes: { providerNameSlug: 'google' },
        },
        {
            name: 'twitter',
            title: __( 'Twitter' ),
            attributes: { providerNameSlug: 'twitter' },
            keywords: [ __('tweet') ],
        },
    ],

    attributes: {
        title: {
            type: 'string',
        },
        url: {
            type: 'string',
        },
        alt: {
            type: 'string'
        }
    },

    example: {
        attributes: {
            title: 'Something',
            url: ''
        }
    },

    edit: SectionErrorEdit,

    save: SectionErrorSave
} )