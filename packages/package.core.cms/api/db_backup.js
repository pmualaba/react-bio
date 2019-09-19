module.exports = {
    context: {
        user: null,
        domain: null,
    },
    getPersons: params => {
        return {
            action: 'GET_PERSONS',
            pagination: {
                size: params.size,
                page: params.page,
            },
            filter: {
                domains: ['local', '*'],
                view: 'sec_test',
                transform: 'defaultRecurse',
            },
            root: {
                type: 'Person',
                cardinality: '*',
            },
            graph: {
                id: 'id',
                email: 'email',
                name: 'name',
                firstName: 'firstName',
                lastName: 'lastName',
                mobilePhone: 'mobilePhone',
                fullfillsRoles: {
                    edge: {
                        key: 'fullfillsRoles',
                        cardinality: '*',
                        recurse: false,
                        properties: {},
                    },
                    node: {
                        id: 'id',
                        name: 'name',
                        name_en_GB: 'name_en_GB',
                        name_fr_FR: 'name_fr_FR',
                        name_nl_NL: 'name_nl_NL',
                        isMemberOfTeams: {
                            edge: {
                                key: 'isMemberOfTeams',
                                cardinality: '*',
                                recurse: false,
                                properties: {},
                            },
                            node: {
                                id: 'id',
                                name: 'name',
                                name_en_GB: 'name_en_GB',
                                name_fr_FR: 'name_fr_FR',
                                name_nl_NL: 'name_nl_NL',
                            },
                        },
                        isResponsibleForTeams: {
                            edge: {
                                key: 'isResponsibleForTeams',
                                cardinality: '*',
                                recurse: false,
                                properties: {},
                            },
                            node: {
                                id: 'id',
                                name: 'name',
                                name_de_DE: 'name_de_DE',
                                name_en_GB: 'name_en_GB',
                                name_fr_FR: 'name_fr_FR',
                                name_nl_NL: 'name_nl_NL',
                            },
                        },
                    },
                },
                hasAvatarImage: {
                    edge: {
                        key: 'hasAvatarImage',
                        cardinality: '1',
                        recurse: false,
                        properties: {},
                    },
                    node: {
                        base64Data: 'base64Data',
                        tnSmallBase64: 'tnSmallBase64',
                        name: 'name',
                        id: 'id',
                        tnSmall: {
                            edge: {
                                key: 'tnSmall',
                                cardinality: '1',
                                recurse: false,
                                properties: {},
                            },
                            node: {
                                base64Data: 'base64Data',
                                name: 'name',
                            },
                        },
                    },
                },
                isReplacementForRoles: {
                    edge: {
                        key: 'isReplacementForRoles',
                        cardinality: '*',
                        recurse: false,
                        properties: {},
                    },
                    node: {
                        id: 'id',
                        name: 'name',
                        name_de_DE: 'name_de_DE',
                        name_en_GB: 'name_en_GB',
                        name_fr_FR: 'name_fr_FR',
                        name_nl_NL: 'name_nl_NL',
                    },
                },
                worksForOrganizations: {
                    edge: {
                        key: 'worksForOrganizations',
                        cardinality: '*',
                        recurse: false,
                        properties: {},
                    },
                    node: {
                        id: 'id',
                        type: 'type',
                        name: 'name',
                    },
                },
            },
        }
    },
    createPerson: params => {
        return {
            action: 'CREATE_PERSON',
            mutation: 'create',
            filter: {
                domains: ['local', '*'],
                transform: 'defaultRecurseMutation',
            },
            root: {
                type: 'Person',
                cardinality: '1',
                data: params.data,
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
                        type: 'Image',
                    },
                    node: {
                        id: 'id',
                    },
                },
                worksAtLocations: {
                    edge: {
                        data: params.data.worksAtLocations,
                        cardinality: '*',
                    },
                    node: {
                        id: 'id',
                    },
                },
                fullfillsRoles: {
                    edge: {
                        data: params.data.fullfillsRoles,
                        cardinality: '*',
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
                                cardinality: '*',
                            },
                            node: {
                                id: 'id',
                            },
                        },
                    },
                    isReplacementForRoles: {
                        edge: {
                            data: params.data.isReplacementForRoles,
                            cardinality: '*',
                        },
                        node: {
                            id: 'id',
                        },
                    },
                    isContactPersonOfOrganizations: {
                        edge: {
                            data: params.data.isContactPersonOfOrganizations,
                            cardinality: '*',
                        },
                        node: {
                            id: 'id',
                        },
                    },
                    worksForOrganizations: {
                        edge: {
                            data: params.data.worksForOrganizations,
                            cardinality: '*',
                        },
                        node: {
                            id: 'id',
                        },
                    },
                },
            },
        }
    },
}
