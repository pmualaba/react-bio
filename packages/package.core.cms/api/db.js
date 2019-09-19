module.exports = {
    getPersons: params => ({
        action: 'GET_PERSONS',
        package: 'package.core.cms',
        pagination: {
            size: params.size,
            page: params.page
        },
        root: {
            type: 'package.core.cms.Post',
            cardinality: 1,
            operation: `persons(func: eq(name, ${params.name}))`
        },
        transform: 'none',
        graph: {
            id: 'uid',
            email: 'email',
            name: 'name',
            firstName: 'firstName',
            lastName: 'lastName',
            mobilePhone: 'mobilePhone',
            fullfillsRoles: {
                edge: {
                    path: `fullfillsRoles @include(if: ${params.withRoles})`,
                    remoteType: 'package.core.identity.Role',
                    reversed: false,
                    recurse: false,
                    facets: {}
                },
                node: {
                    id: 'uid',
                    name: 'name',
                    name_en_GB: 'name_en_GB',
                    name_fr_FR: 'name_fr_FR',
                    name_nl_NL: 'name_nl_NL',
                    isMemberOfTeams: {
                        edge: {
                            path: 'isMemberOfTeams',
                            remoteType: 'package.core.identity.Role',
                            reversed: false,
                            recurse: false,
                            facets: {}
                        },
                        node: {
                            id: 'id',
                            name: 'name',
                            name_en_GB: 'name_en_GB',
                            name_fr_FR: 'name_fr_FR',
                            name_nl_NL: 'name_nl_NL'
                        }
                    },
                    isResponsibleForTeams: {
                        edge: {
                            path: 'isResponsibleForTeams',
                            remoteType: 'package.core.identity.Role',
                            cardinality: '*',
                            recurse: false,
                            facets: {}
                        },
                        node: {
                            id: 'id',
                            name: 'name',
                            name_de_DE: 'name_de_DE',
                            name_en_GB: 'name_en_GB',
                            name_fr_FR: 'name_fr_FR',
                            name_nl_NL: 'name_nl_NL'
                        }
                    }
                }
            },
            hasAvatarImage: {
                edge: {
                    path: 'hasAvatarImage',
                    remoteType: 'package.core.media.Image',
                    cardinality: '1',
                    recurse: false,
                    facets: {}
                },
                node: {
                    base64Data: 'base64Data',
                    tnSmallBase64: 'tnSmallBase64',
                    name: 'name',
                    id: 'id',
                    tnSmall: {
                        edge: {
                            path: 'tnSmall',
                            remoteType: 'package.core.media.Thumbnail',
                            cardinality: '1',
                            recurse: false,
                            facets: {}
                        },
                        node: {
                            base64Data: 'base64Data',
                            name: 'name'
                        }
                    }
                }
            },
            isReplacementForRoles: {
                edge: {
                    path: 'isReplacementForRoles',
                    remoteType: 'package.core.identity.Role',
                    cardinality: '*',
                    recurse: false,
                    facets: {}
                },
                node: {
                    id: 'id',
                    name: 'name',
                    name_de_DE: 'name_de_DE',
                    name_en_GB: 'name_en_GB',
                    name_fr_FR: 'name_fr_FR',
                    name_nl_NL: 'name_nl_NL'
                }
            },
            worksForOrganizations: {
                edge: {
                    path: 'worksForOrganizations',
                    remoteType: 'package.core.identity.Role',
                    cardinality: '*',
                    recurse: false,
                    facets: {}
                },
                node: {
                    id: 'id',
                    type: 'type',
                    name: 'name'
                }
            }
        }
    }),
    createPerson: params => ({
        action: 'CREATE_PERSON',
        mutation: 'create',
        filter: {
            domains: ['local', '*'],
            transform: 'defaultRecurseMutation'
        },
        root: {
            type: 'Person',
            cardinality: '1',
            data: params.data
        },
        graph: {
            landline: 'landline',
            firstName: 'firstName',
            lastName: 'lastName',
            email: 'email',
            mobilePhone: 'mobilePhone',
            hasAvatarImage: {
                edge: {
                    data: params.data.hasAvatarImage,
                    cardinality: '1',
                    type: 'Image'
                },
                node: {
                    id: 'id'
                }
            },
            worksAtLocations: {
                edge: {
                    data: params.data.worksAtLocations,
                    cardinality: '*'
                },
                node: {
                    id: 'id'
                }
            },
            fullfillsRoles: {
                edge: {
                    data: params.data.fullfillsRoles,
                    cardinality: '*'
                },
                node: {
                    id: 'id',
                    name: 'name',
                    name_de_DE: 'name_de_DE',
                    name_en_GB: 'name_en_GB',
                    name_fr_FR: 'name_fr_FR',
                    name_nl_NL: 'name_nl_NL',
                    isMemberOfTeams: {
                        edge: {
                            data: params.data.isMemberOfTeams,
                            cardinality: '*'
                        },
                        node: {
                            id: 'id'
                        }
                    }
                },
                isReplacementForRoles: {
                    edge: {
                        data: params.data.isReplacementForRoles,
                        cardinality: '*'
                    },
                    node: {
                        id: 'id'
                    }
                },
                isContactPersonOfOrganizations: {
                    edge: {
                        data: params.data.isContactPersonOfOrganizations,
                        cardinality: '*'
                    },
                    node: {
                        id: 'id'
                    }
                },
                worksForOrganizations: {
                    edge: {
                        data: params.data.worksForOrganizations,
                        cardinality: '*'
                    },
                    node: {
                        id: 'id'
                    }
                }
            }
        }
    })
}
