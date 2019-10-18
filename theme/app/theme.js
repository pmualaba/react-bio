import {css} from 'styled-components'

import colors from './css-colors'
import effects from './css-effects'
import shapes from './css-shapes'
import CSS from './functions'

import Global from './global/package.core.global.Global'

// TODO : Build Theme Inheritance Tree

const design = {
    'package.core.global': {
        web: {
            colors: css``,
            effects: css``,
            typography: css``,
            global: {
                Global: {
                    variants: {
                        default: css`
                            display: flex;
                        `
                    },
                    context: {
                        screenSize: {
                            S: css`
                                position: relative;
                                font-family: ${props =>
                                    props.theme.skin.default.typography.sans.primaryFont};
                            `
                        },
                        regionSize: {},
                        region: {},
                        taxonomy: {
                            product: css`
                                position: fixed;
                            `
                        }
                    }
                }
            }
        }
    },
    'package.core.ui': {
        web: {
            typography: css``,
            colors,
            effects,
            shapes,
            documents: {
                DocumentContainer: {
                    variants: {
                        default: css``
                    },
                    context: {
                        taxonomy: {
                            products: css``
                        },
                        region: {},
                        regionSize: {
                            S: css``,
                            M: css``,
                            L: css``
                        },
                        screenSize: {
                            S: css``,
                            M: css``,
                            L: css``
                        }
                    }
                }
            },
            layouts: {
                PageSection: {
                    variants: {
                        default: Global,
                        asBlogPost: Global,
                        asHomeBenefits: css``,
                        asHomeBenefitsItem: css``,
                        asHomeHero: css``
                    },
                    context: {
                        taxonomy: {
                            products: css``
                        },
                        region: {
                            "['package.core.cms'].web.documents.home.layouts.BaseLayout.regions.main": css``
                        },
                        regionSize: {
                            S: css``,
                            M: css``,
                            L: css``
                        },
                        screenSize: {
                            S: css``,
                            M: css``,
                            L: css``
                        }
                    }
                },
                BaseLayoutContainer: {
                    variants: {
                        default: css``
                    },
                    context: {
                        taxonomy: {
                            products: css``
                        },
                        region: {},
                        regionSize: {
                            S: css``,
                            M: css``,
                            L: css``
                        },
                        screenSize: {
                            S: css``,
                            M: css``,
                            L: css``
                        }
                    }
                },
                PanelLayout: {
                    variants: {
                        default: css``
                    },
                    context: {
                        taxonomy: {
                            products: css``
                        },
                        region: {},
                        regionSize: {
                            S: css``,
                            M: css``,
                            L: css``
                        },
                        screenSize: {
                            S: css``,
                            M: css``,
                            L: css``
                        }
                    }
                }
            },
            blocks: {
                PageHeader: {
                    variants: {
                        default: css``
                    },
                    context: {
                        taxonomy: {
                            products: css``
                        },
                        region: {},
                        regionSize: {
                            S: css``,
                            M: css``,
                            L: css``
                        },
                        screenSize: {
                            S: css``,
                            M: css``,
                            L: css``
                        }
                    }
                }
            }
        }
    },
    'package.core.cms': {
        web: {
            colors: css``,
            effects: css``,
            typography: css``,
            PersonList: css``,
            documents: {
                Document: {
                    variants: {
                        default: css`
                            .Region {
                                &.header {
                                    transition: background-color 3s;
                                }
                            }
                        `,
                        asBlogPost: Global,
                        asHomeBenefits: css``,
                        asHomeBenefitsItem: css``,
                        asHomeHero: css``
                    },
                    context: {
                        taxonomy: {
                            products: css``
                        },
                        region: {
                            "['package.core.cms'].web.documents.home.layouts.BaseLayout.regions.main": css``
                        },
                        regionSize: {
                            S: css``,
                            M: css``,
                            L: css``
                        },
                        screenSize: {
                            S: css``,
                            M: css``,
                            L: css``
                        }
                    }
                }
            }
        }
    }
}

export default (skin, skins) => ({name: skin, skin: skins[skin], design, CSS})
