// Libs
import { useSelect } from '@wordpress/data'
import { useBlockProps, InspectorControls, store as blockEditorStore } from '@wordpress/block-editor'
import { useState } from '@wordpress/element'
import { __ } from '@wordpress/i18n'

// Types
import { TAttributes } from '../'

type TProps = {
    clientId: any,
    attributes: TAttributes,
    setAttributes: ( {} ) => any
}

const THEME_TEXT_DOMAIN = 'react-wordpress'

const TabsEdit = ( props: TProps ) => {
    const { clientId, attributes, setAttributes } = props
    const {  } = attributes
    const blockProps = useBlockProps()
    const [tabs, setTabs] = useState( [
        { id: 1, tabTitle: 'Tab 1' },
        { id: 2, tabTitle: 'Tab 2' },
        { id: 3, tabTitle: 'Tab 3' },
    ] )
    const [activeTab, setActiveTab] = useState<number>( 0 )
    const hasInnerBlocks = useSelect( ( select: any ) => select( blockEditorStore ).getBlocks( clientId ).length > 0, [ clientId ] );

    return (
        <>
            <InspectorControls>

            </InspectorControls>

            <div { ...blockProps }>
                <div className="tabs">
                    <div className="tabs__nav">
                        <div className="tabs-nav-line">
                            {
                                tabs.map( ( { id, tabTitle }, index ) => (
                                    <div
                                        className="tabs-nav-line__item"
                                        key={ id }
                                        onClick={ () => setActiveTab( index ) }
                                    >
                                        { tabTitle }
                                    </div>
                                ) )
                            }
                        </div>
                    </div>

                    <div className="tabs__content">
                        {
                            tabs.map( ( tab, index ) => (
                                <div className={ "tabs-content__tab" + ( activeTab === index ? " active" : "" ) }>
                                    Text { index }
                                </div>
                            ) )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabsEdit