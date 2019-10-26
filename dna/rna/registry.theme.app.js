/**
 * @theme
 */

import colors from '../../theme/web/css-colors'
import effects from '../../theme/web/css-effects'
import shapes from '../../theme/web/css-shapes'
import CSS from '../../packages/package.core.fn/theme'

/**
 * Global
 * Documents
 */
import Global from '../../theme/web/global/package.core.ui.Global'
import Document from '../../theme/web/documents/package.core.ui.Document'
import DocumentCms from '../../theme/web/documents/package.core.cms.Document'

/**
 * Layouts
 */
import PanelLayout from '../../theme/web/layouts/package.core.ui.PanelLayout'
import WebPageLayout from '../../theme/web/layouts/package.core.ui.WebPageLayout'

/**
 * Blocks
 */
import Stories from '../../theme/web/blocks/social/package.core.ui.Stories'
import PageHeader from '../../theme/web/blocks/headers/package.core.ui.PageHeader'

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
