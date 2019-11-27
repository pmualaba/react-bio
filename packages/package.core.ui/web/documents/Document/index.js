import React, {useEffect, useContext} from 'react'
import Head from 'next/head'

import Layer from './Layer'
import DocumentStyled from './styled'

/**
 * Context
 */

import {GlobalContext} from '../../global/Global'

export default function Document(props) {
    /**
     * Hooks
     */

    const context = useContext(GlobalContext)

    useEffect(() => {}, [])

    /**
     * Render
     */

    if (context.renderCycle === 0) {
        return <></>
    }

    console.log('RENDER DOCUMENT', props.dna.set['enable.stripe'])
    const {css, motion} = context.theme.render(props, context)

    return (
        <DocumentStyled
            meta={props.meta}
            dna={props.dna}
            context={context}
            css={css}
            {...motion}
            style={props.dna.ui['theme.style.css']}
        >
            <Head>
                {props.dna.set['enable.stripe'] && <script src="https://js.stripe.com/v3/" />}
            </Head>
            <Layer id="layout">{props.children}</Layer>
            <Layer id="modal" modals={{}} />
            <Layer id="takeover" takeovers={{}} />
            <Layer id="notification" notifications={{}} />
            <Layer id="dom" />
        </DocumentStyled>
    )
}
