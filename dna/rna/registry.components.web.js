/**
 * @component
 */

import dynamic from 'next/dynamic'
/*
import {motion} from 'framer-motion'

const Global = dynamic(() => import('../../packages/package.core.ui/web/global/Global'))
const Document = dynamic(() => import('../../packages/package.core.ui/web/documents/Document'))
const RenderLayout = dynamic(() =>
    import('../../packages/package.core.ui/web/layouts/RenderLayout')
)
const PanelLayout = dynamic(() => import('../../packages/package.core.ui/web/layouts/PanelLayout'))
const WebPageLayout = dynamic(() =>
    import('../../packages/package.core.ui/web/layouts/WebPageLayout')
)
const CustomLayout = dynamic(() =>
    import('../../packages/package.core.ui/web/layouts/CustomLayout')
)
const GridTable = dynamic(() =>
    import('../../packages/package.core.ui/app/blocks/tables/GridTable')
)
const PageHeader = dynamic(() =>
    import('../../packages/package.core.ui/web/blocks/headers/PageHeader')
)
const Test = dynamic(() => import('../../packages/package.core.ui/web/blocks/Test'))
*/

import {motion} from 'framer-motion'
import Global from '../../packages/package.core.ui/web/global/Global'
import Document from '../../packages/package.core.ui/web/documents/Document'
import RenderLayout from '../../packages/package.core.ui/web/layouts/RenderLayout'
import PanelLayout from '../../packages/package.core.ui/web/layouts/PanelLayout'
import WebPageLayout from '../../packages/package.core.ui/web/layouts/WebPageLayout'

import CustomLayout from '../../packages/package.core.ui/web/layouts/CustomLayout'
import GridTable from '../../packages/package.core.ui/app/blocks/tables/GridTable'
import PageHeader from '../../packages/package.core.ui/web/blocks/headers/PageHeader'
import LoginForm from '../../packages/package.core.auth/web/LoginForm'
import PageFooter from '../../packages/package.core.ui/web/blocks/footers/PageFooter'
import Test from '../../packages/package.core.ui/web/blocks/Test'

/*
const GridTable = dynamic(() =>
    import('../../packages/package.core.ui/app/blocks/tables/GridTable')
)
const PageHeader = dynamic(() =>
    import('../../packages/package.core.ui/web/blocks/headers/PageHeader')
)
const PageFooter = dynamic(() =>
    import('../../packages/package.core.ui/web/blocks/footers/PageFooter')
)
const Test = dynamic(() => import('../../packages/package.core.ui/web/blocks/Test'))

const CustomLayout = dynamic(() =>
    import('../../packages/package.core.ui/web/layouts/CustomLayout')
)
*/
const components = {
    motion: {
        div: motion.div,
        a: motion.a
    },
    'package.core.global': {
        web: {
            Global
        }
    },
    'package.core.auth': {
        web: {
            blocks: {
                LoginForm
            }
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
            blocks: {
                PageHeader,
                PageFooter,
                WebPageBody: WebPageLayout.WebPageBody,
                WebPageFooter: WebPageLayout.WebPageFooter,
                Test
            },
            cells: {}
        },
        app: {
            blocks: {
                GridTable
            }
        }
    }
}

export default components
