/**
 * @theme
 */

import colors from '../../design/web/css-colors'
import effects from '../../design/web/css-effects'
import shapes from '../../design/web/css-shapes'
import render from '../../packages/package.core.fn/theme'

/**
 * Global
 * Documents
 */
import Global from '../../design/web/global/package.core.ui.Global'
import Document from '../../design/web/documents/package.core.ui.Document'
import DocumentCms from '../../design/web/documents/package.core.cms.Document'

/**
 * Layouts
 */
import PanelLayout from '../../design/web/layouts/package.core.ui.PanelLayout'
import WebPageLayout from '../../design/web/layouts/package.core.ui.WebPageLayout'
import PositionLayout from '../../design/web/layouts/package.core.ui.PositionLayout'

/**
 * Blocks
 */
import PageHeader from '../../design/web/blocks/package.core.ui.PageHeader'
import LoginForm from '../../design/web/blocks/package.core.auth.LoginForm'

/**
 * Elements
 */
import ImageElement from '../../design/web/elements/package.core.ui.ImageElement'

// TODO : Build Theme Inheritance Tree

const design = {
    colors,
    effects,
    shapes,
    'package.core.global': {
        web: {
            global: {
                Global
            }
        }
    },
    'package.core.auth': {
        web: {
            blocks: {
                LoginForm
            }
        }
    },
    'package.core.ui': {
        web: {
            global: {
                Global
            },
            documents: {
                Document
            },
            layouts: {
                PositionLayout,
                WebPageLayout,
                PanelLayout
            },
            blocks: {
                PageHeader
            },
            elements: {
                ImageElement
            }
        }
    },
    'package.core.cms': {
        web: {
            documents: {
                Document: DocumentCms
            }
        }
    }
}

export default (skin, skins) => ({name: skin, ...skins[skin], design, render})
