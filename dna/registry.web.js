/**
 * Component Registry
 */
/*
import dynamic from 'next/dynamic'
import Global from '../packages/package.core.ui/web/global/Global'
import Document from '../packages/package.core.ui/web/documents/Document'
import RenderLayout from '../packages/package.core.ui/web/layouts/RenderLayout'
import CustomLayout from '../packages/package.core.ui/web/layouts/CustomLayout'

const PanelLayout = dynamic(() => import('../packages/package.core.ui/web/layouts/PanelLayout'))
const WebPageLayout = dynamic(() => import('../packages/package.core.ui/web/layouts/WebPageLayout'))
*/

import {motion} from 'framer-motion'
import Global from '../packages/package.core.ui/web/global/Global'
import Document from '../packages/package.core.ui/web/documents/Document'
import RenderLayout from '../packages/package.core.ui/web/layouts/RenderLayout'
import PanelLayout from '../packages/package.core.ui/web/layouts/PanelLayout'
import WebPageLayout from '../packages/package.core.ui/web/layouts/WebPageLayout'
import CustomLayout from '../packages/package.core.ui/web/layouts/CustomLayout'

export default {
    'package.core.global': {
        web: {
            Global
        }
    },
    'package.core.cms': {
        web: {}
    },
    'package.core.ui': {
        web: {
            documents: {
                Document
            },
            layouts: {
                RenderLayout,
                CustomLayout,
                PanelLayout,
                WebPageLayout
            },
            blocks: {},
            cells: {},
            motion: {
                div: motion.div,
                a: motion.a
            }
        }
    }
}
