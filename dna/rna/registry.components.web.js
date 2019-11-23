/**
 * @component
 */

import dynamic from 'next/dynamic'
import {motion} from 'framer-motion'

/*
import Global from '../../packages/package.core.ui/web/global/Global'
import Document from '../../packages/package.core.ui/web/documents/Document'
import RenderLayout from '../../packages/package.core.ui/web/layouts/RenderLayout'
import PanelLayout from '../../packages/package.core.ui/web/layouts/PanelLayout'
import WebPageLayout from '../../packages/package.core.ui/web/layouts/WebPageLayout'
import CustomLayout from '../../packages/package.core.ui/web/layouts/CustomLayout'
import GridTable from '../../packages/package.core.ui/app/blocks/GridTable'
import PageHeader from '../../packages/package.core.ui/web/blocks/PageHeader'
import LoginForm from '../../packages/package.core.auth/web/LoginForm'
import PageFooter from '../../packages/package.core.ui/web/blocks/PageFooter'
import Test from '../../packages/package.core.ui/web/blocks/Test'
*/

// prettier-ignore
const Global = dynamic(() => import('../../packages/package.core.ui/web/global/Global'))
// prettier-ignore
const Document = dynamic(() => import('../../packages/package.core.ui/web/documents/Document'))
// prettier-ignore
const RenderLayout = dynamic(() => import('../../packages/package.core.ui/web/layouts/RenderLayout'))
// prettier-ignore
const PanelLayout = dynamic(() => import('../../packages/package.core.ui/web/layouts/PanelLayout'))
// prettier-ignore
const WebPageLayout = dynamic(() => import('../../packages/package.core.ui/web/layouts/WebPageLayout'))
// prettier-ignore
const PositionLayout = dynamic(() => import('../../packages/package.core.ui/web/layouts/PositionLayout'))
// prettier-ignore
const CustomLayout = dynamic(() => import('../../packages/package.core.ui/web/layouts/CustomLayout'))
// prettier-ignore
const GridTable = dynamic(() => import('../../packages/package.core.ui/app/blocks/GridTable'))
// prettier-ignore
const PageHeader = dynamic(() => import('../../packages/package.core.ui/web/blocks/PageHeader'))
// prettier-ignore
const LoginForm = dynamic(() => import('../../packages/package.core.auth/web/LoginForm'))
// prettier-ignore
const PageFooter = dynamic(() => import('../../packages/package.core.ui/web/blocks/PageFooter'))
// prettier-ignore
const Test = dynamic(() => import('../../packages/package.core.ui/web/blocks/Test'))

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
                PositionLayout,
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
