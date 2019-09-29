const express = require('express')

const router = express.Router()
const Transform = require('../../package.core.fn/data')
const API = require('../../package.core.fn/api/res')

const logic = {
    GET_TEST: async (req, res, next, meta) => {
        /**
         * {
         *      event: "/api",
         *      data: {
         *          type: "GET_TEST",
         *          error: false,
         *          payload: {
         *
         *          },
         *          meta: {
         *              endpoint: "/test",
         *              client: {
         *                  id: "cjyq3nlc50000305nfg8vsjvk",
         *                  ip: "127.0.0.1",
         *                  device: {}
         *              }
         *          }
         *      },
         * }
         */

        console.log('req.body.type', req.body.type)
        API.res(
            'GET_TEST',
            false,
            {
                name: 'User'
            },
            meta
        )
    },
    GET_INITIAL_PROPS: async (req, res, next, meta) => {
        /**
         * {
         *      event: "/api",
         *      data: {
         *          type: "GET_WEB_PAGE",
         *          error: false,
         *          payload: {
         *
         *          },
         *          meta: {
         *              endpoint: "/test",
         *              client: {
         *                  id: "cjyq3nlc50000305nfg8vsjvk",
         *                  ip: "127.0.0.1",
         *                  device: {}
         *              }
         *          }
         *      },
         * }
         */
        const actions = req.db.json.dna.get(req.body.meta['@dna']).value()

        const result = {
            GET_CONTENT_PAGE: null,
        }

        //TODO: FETCH DATA LOOP actions[]
        //TODO: TRANSFORM DATA

        result.GET_CONTENT_PAGE = {
            id: 'ck0xo8bo5000001l384jsh7lv',
            templateId: 'ck0xo8bo5000001l384jsh7lv',
            type: 'Page',
            name: 'about',
            role: 'common.hero.primary',
            url: '/about',
            isPrimaryClassifiedByTaxonomyTerm: {},
            isClassifiedByTaxonomyTerms: [],
            isRootNode: true,
            isTemplate: true,
            sortIndex: 0,
            nestIndex: 0,
            publishDate: '2019-05-28T15:59:59.123Z',
            unPublishDate: '2020-02-28T15:59:59.123Z',
            hasParentContentNodes: [],
            hasChildContentNodes: [
                {
                    id: 'ck0xo8v41000101l38l28fulk',
                    type: 'ContentNode',
                    name: 'about.primary',
                    role: 'about.primary',
                    url: '/about/ck0xo8v41000101l38l28fulk',
                    isRootNode: false,
                    isTemplate: true,
                    sortIndex: 0,
                    nestIndex: 1,
                    publishDate: '2019-05-28T15:59:59.123Z',
                    unPublishDate: '2020-02-28T15:59:59.123Z',
                    hasParentContentNodes: [{id: 'ck0xo8bo5000001l384jsh7lv'}],
                    hasChildContentNodes: [
                        {
                            id: 'ck128dyz1000001la46e6bcks',
                            type: 'ContentNode',
                            name: 'articleSection.primary',
                            role: 'articleSection.0.1.1',
                            url: '/articles/article-1/ck128dyz1000001la46e6bcks',
                            isRootNode: false,
                            isExtendByFieldGroups: [
                                {
                                    id: 'ck128ejp7000101la1lh3h7rx',
                                    type: 'FieldGroup',
                                    name: 'FieldGroup',
                                    role: 'FieldGroup.identityForm.2'
                                }
                            ],
                            hasChildContentNodes: [
                                {
                                    id: 'ck128eyjs000201la2nd409jp',
                                    type: 'ContentNode',
                                    name: 'articleSection.primary',
                                    role: 'articleSection.0.1.1.1',
                                    url: '/articles/article-1/ck128eyjs000201la2nd409jp',
                                    isRootNode: false,
                                    isExtendByFieldGroups: [
                                        {
                                            id: 'ck128f8en000301labucubeje',
                                            type: 'FieldGroup',
                                            name: 'FieldGroup',
                                            role: 'FieldGroup.identityForm.4'
                                        }
                                    ]
                                },
                                {
                                    id: 'ck128fmkd000401laewo73ios',
                                    type: 'ContentNode',
                                    name: 'articleSection.primary',
                                    role: 'articleSection.0.1.1.2',
                                    url: '/articles/article-1/ck128fmkd000401laewo73ios',
                                    isRootNode: false,
                                    isExtendByFieldGroups: [
                                        {
                                            id: 'ck128fyf1000501la9xrg8mht',
                                            type: 'FieldGroup',
                                            name: 'FieldGroup',
                                            role: 'FieldGroup.identityForm.5'
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    isExtendByFieldGroups: [
                        {
                            id: 'ck10cl23n000101ks5xrq6a1t',
                            type: 'FieldGroup',
                            name: 'FieldGroup',
                            role: 'FieldGroup.identityForm'
                        }
                    ],
                    rendersWithDna: null,
                    rendersWithModifiedDna: null
                },
                {
                    id: 'ck0xrf79q000001mm5zlf7s8d',
                    name: 'articleSection.primary',
                    role: 'articleSection.0.2',
                    url: '/articles/article-1/ck0xrf79q000001mm5zlf7s8d',
                    isRootNode: false,
                    isTemplate: true,
                    hasChildContentNodes: [
                        {
                            id: 'ck128gdee000601laftyoec9u',
                            type: 'ContentNode',
                            name: 'articleSection.primary',
                            role: 'articleSection.0.2.1',
                            url: '/articles/article-1/ck128gdee000601laftyoec9u',
                            isRootNode: false
                        }
                    ],
                    rendersWithDna: null,
                    rendersWithModifiedDna: null
                }
            ],
            rendersWithDna: {
                id: 'ck0xo92xs000201l328mc7ga7',
                type: 'DnaNode',
                name: 'followPage',
                isRootNode: true,
                isTemplate: true,
                meta: {
                    '@component': "['package.core.ui'].web.blocks.PageBody",
                    '@theme': null,
                    kind: 'block'
                },
                props: {
                    data: {
                        accessors: {content: 'this'}
                    },
                    ui: {
                        theme: {
                            modelVariant: null,
                            designVariant: null,
                            skinVariant: null,
                            skinTone: null,
                            skinTypography: null,
                            skinSpacial: null,
                            skinMotion: null
                        }
                    }
                },
                blocks: [
                    {
                        id: 'ck10ckdpa000001ks5e8ydqjg',
                        type: 'DnaNode',
                        name: 'followPage',
                        isRootNode: true,
                        isTemplate: true,
                        meta: {
                            '@component': "['package.core.ui'].web.blocks.PageBody",
                            '@theme': null,
                            kind: 'block'
                        },
                        props: {
                            data: {
                                accessors: {
                                    content: "this.hasChildContentNodes['articleSection.primary']",
                                    articles: 'initialProps.articles'
                                }
                            },
                            ui: {
                                theme: {
                                    modelVariant: 'scrollContainer',
                                    designVariant: 'asImageSlider',
                                    skinVariant: 'themeVariantDefault',
                                    skinTone: 'dimensionVariantDefault',
                                    skinTypography: 'sans',
                                    skinSpacial: 'compact',
                                    skinMotion: 'smooth'
                                }
                            }
                        },
                        blocks: [],
                        mutations: {
                            inject: {},
                            schedule: {
                                '2019-08-28T06:55:21+00:00': {
                                    meta: {
                                        '@component': "['package.core.ui'].web.documents.Document",
                                        '@theme': "['package.core.cms'].web.documents.Document",
                                        kind: 'document'
                                    },
                                    props: {
                                        ui: {
                                            theme: {
                                                model: {
                                                    variant: 'scrollContainer',
                                                    param: 'value'
                                                },
                                                design: {
                                                    variant: 'asImageSlider'
                                                },
                                                skin: {
                                                    variant: 'themeVariantDefault',
                                                    tone: 'dimensionVariantDefault',
                                                    typography: 'sans',
                                                    spacial: 'compact',
                                                    motion: 'smooth'
                                                }
                                            }
                                        }
                                    },
                                    layouts: []
                                }
                            }
                        }
                    }
                ]
            },
            rendersWithModifiedDna: {
                id: 'ck0xseyyp000001l5a04o8wnn',
                modifiedId: 'ck0xo92xs000201l328mc7ga7',
                type: 'DnaNode',
                name: 'article-1',
                meta: {
                    '@component': "['package.core.ui'].web.blocks.PageBody",
                    '@theme': null,
                    kind: 'block'
                },
                props: {},
                blocks: []
            }
        }
        API.res(
            'GET_INITIAL_PROPS',
            false,
            {
                actions: {
                    GET_CONTENT_PAGE: {result: Transform.mapContentNodeTreeToDnaNodeTree(result.GET_CONTENT_PAGE)},
                }
            },
            meta
        )
    }
}
/** API /api/cms/web
 */
router.post('/', async (req, res, next) => {
    const meta = {
        package: 'package.core.cms/api',
        res
    }

    logic[req.body.type](req, res, next, meta)
})

module.exports = {router, logic}
