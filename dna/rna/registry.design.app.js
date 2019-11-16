/**
 * @theme
 */

import colors from '../../design/web/css-colors'
import effects from '../../design/web/css-effects'
import shapes from '../../design/web/css-shapes'
import CSS from '../../packages/package.core.fn/theme'

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

/**
 * Blocks
 */
import Stories from '../../design/web/blocks/social/package.core.ui.Stories'
import PageHeader from '../../design/web/blocks/headers/package.core.ui.PageHeader'

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
    'package.core.ui': {
        web: {
            global: {
                Global
            },
            documents: {
                Document
            },
            layouts: {
                WebPageLayout,
                PanelLayout
            },
            blocks: {
                PageHeader,
                Stories
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

export default (skin, skins) => ({name: skin, skin: skins[skin], design, CSS})
