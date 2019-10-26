/**
 * @component
 */

import dynamic from 'next/dynamic'
import Global from '../../packages/package.core.ui/app/global/Global'
import Document from '../../packages/package.core.ui/app/documents/Document'
import RenderLayout from '../../packages/package.core.ui/app/layouts/RenderLayout'

const PanelLayout = dynamic(() => import('../../packages/package.core.ui/app/layouts/PanelLayout'))

/*
import Global from '../../packages/package.core.ui/web/global/Global'
import Document from '../../packages/package.core.ui/web/documents/Document'
import RenderLayout from '../../packages/package.core.ui/web/layouts/RenderLayout'
import PersonListContainer from '../../packages/package.core.identity/app/PersonList/container'
import BaseLayoutContainer from '../../packages/package.core.ui/app/layouts/BaseLayout/container'
import PanelLayout from '../../packages/package.core.ui/web/layouts/PanelLayout'
*/
export default {
    'package.core.global': {
        app: {
            Global
        }
    },
    'package.core.cms': {
        app: {}
    },
    'package.core.ui': {
        app: {
            documents: {
                Document
            },
            layouts: {
                RenderLayout,
                PanelLayout
            },
            blocks: {},
            cells: {}
        }
    }
}
