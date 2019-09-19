import {combineReducers} from 'redux'
import * as ActionTypes from './actions'

/**
 * Initial State ui
 *
 * ui: {
 *      dna: {
 *          'package.core.identity': {
 *
 *          }
 *      },
 *      state: {
 *          'package.core.identity': {
 *
 *          }
 *      }
 * }
 *
 * OR
 *
 * ui: {
 *   'package.core.identity': {
 *      dna: {},
 *      state: {}
 *   }
 * }
 */
export const ui = {
    dna: {
        package: {
            id: '123456789',
            name: 'package.core.cms',
            packageType: 'BioPackage',
            pages: {
                home: {
                    id: '123456789',
                    name: 'home',
                    componentType: 'BioComponent',
                    componentClass: 'Home',
                    componentLevel: 'page',
                    route: {match: '/blog'},
                    layouts: {
                        BaseLayout: {
                            id: '123456789',
                            name: 'BaseLayout',
                            componentType: 'BioComponent',
                            componentClass: 'BaseLayout',
                            componentLevel: 'layout',
                            regions: {
                                main: {
                                    position: 'center',
                                    blocks: {
                                        'GridTable.PersonList': {
                                            block: {
                                                id: '123456789',
                                                name: 'GridTable.PersonList',
                                                componentType: 'BioComponent',
                                                instanceType: 'package.core.identity:Identity',
                                                componentClass: 'GridTable',
                                                componentLevel: 'block'
                                            },
                                            config: {
                                                tableId: 'CustomerList',
                                                tableName: 'Klanten',
                                                tableName_nl_NL: 'Klanten',
                                                tableName_fr_FR: 'Clients',
                                                tableName_en_GB: 'Customers',
                                                columns: [
                                                    {
                                                        name: 'Voornaam',
                                                        name_nl_NL: 'Voornaam',
                                                        name_fr_FR: 'Prénom',
                                                        name_en_GB: 'Firstname',
                                                        filterComponentName: 'SelectIconCell',
                                                        filterComponentProps: {
                                                            iconType: 'img'
                                                        },
                                                        cell: {
                                                            address: 'personListGridTable',
                                                            instanceType: 'package.core.identity:Identity',
                                                            style: {
                                                                className: '',
                                                                width: 100,
                                                                minHeight: 'fit-content'
                                                            },
                                                            options: {
                                                                operationMode: 'basic',
                                                                updateMode: 'SKIP_REALISTIC',
                                                                isLocalized: true,
                                                                clickable: true,
                                                                clickAction: ''
                                                            },
                                                            components: [
                                                                {
                                                                    db: {
                                                                        dataKey: 'firstName',
                                                                        type: 'package.core.identity:Identity', // default inherit from cell instanceType
                                                                        validation: 'string|1|*|range|style|default'
                                                                    },
                                                                    ui: {
                                                                        cellComponent: {
                                                                            componentName: 'TextInputCell',
                                                                            componentProps: {}
                                                                        },
                                                                        dependencies: [
                                                                            {
                                                                                dependentOn: 'name',
                                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                                dependencyPayload: {}
                                                                            }
                                                                        ],
                                                                        elementComponent: {
                                                                            componentName: 'CellElement',
                                                                            componentProps: {
                                                                                dropdownDefaultOpen: true
                                                                            },

                                                                            optionComponents: [
                                                                                {
                                                                                    selectionKey: 'customers.avatar',
                                                                                    componentKeys: {label: 'customers.label'},
                                                                                    componentName: 'IconElement',
                                                                                    componentProps: {iconType: 'svg'}
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.name',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.email',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                }
                                                                            ],
                                                                            valueComponents: [
                                                                                {
                                                                                    selectionKey: 'customers.avatar',
                                                                                    componentName: 'IconElement',
                                                                                    componentProps: {iconType: 'svg'}
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.name',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.email',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        name: 'Familie Naam',
                                                        name_nl_NL: 'Naam',
                                                        name_fr_FR: 'Nom',
                                                        name_en_GB: 'Last name',
                                                        cell: {
                                                            width: 100,
                                                            clickable: true,
                                                            clickAction: '',
                                                            customClass: '',
                                                            options: {
                                                                operationMode: 'basic',
                                                                updateMode: 'SKIP_REALISTIC',
                                                                isLocalized: true,
                                                                clickable: true,
                                                                clickAction: ''
                                                            },
                                                            components: [
                                                                {
                                                                    db: {
                                                                        dataKey: 'lastName',
                                                                        type: 'package.core.identity:Identity', // inherit
                                                                        validation: 'string|*|range|style|default'
                                                                    },
                                                                    ui: {
                                                                        cellComponent: {
                                                                            componentName: 'TextInputCell',
                                                                            componentProps: {}
                                                                        },
                                                                        dependencies: [
                                                                            {
                                                                                dependentOn: 'name',
                                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                                dependencyPayload: {}
                                                                            }
                                                                        ],
                                                                        elementComponent: {
                                                                            componentName: 'CellElement',
                                                                            componentProps: {
                                                                                dropdownDefaultOpen: true
                                                                            },

                                                                            optionComponents: [
                                                                                {
                                                                                    selectionKey: 'customers.avatar',
                                                                                    componentKeys: {label: 'customers.label'},
                                                                                    componentName: 'IconElement',
                                                                                    componentProps: {iconType: 'svg'}
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.name',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.email',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                }
                                                                            ],
                                                                            valueComponents: [
                                                                                {
                                                                                    selectionKey: 'customers.avatar',
                                                                                    componentName: 'IconElement',
                                                                                    componentProps: {iconType: 'svg'}
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.name',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.email',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        name: 'Naam',
                                                        name_nl_NL: 'Email',
                                                        name_fr_FR: 'Email',
                                                        name_en_GB: 'Email',
                                                        cell: {
                                                            width: 100,
                                                            clickable: true,
                                                            clickAction: '',
                                                            customClass: '',
                                                            options: {},
                                                            components: [
                                                                {
                                                                    db: {
                                                                        dataKey: 'name',
                                                                        type: 'package.core.identity:Identity', // inherit
                                                                        validation: 'string|*|range|style|default'
                                                                    },
                                                                    ui: {
                                                                        cellComponent: {
                                                                            componentName: 'TextInputCell',
                                                                            componentProps: {}
                                                                        },
                                                                        dependencies: [
                                                                            {
                                                                                dependentOn: 'name',
                                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                                dependencyPayload: {}
                                                                            }
                                                                        ],
                                                                        elementComponent: {
                                                                            componentName: 'CellElement',
                                                                            componentProps: {
                                                                                dropdownDefaultOpen: true
                                                                            },

                                                                            optionComponents: [
                                                                                {
                                                                                    selectionKey: 'customers.avatar',
                                                                                    componentKeys: {label: 'customers.label'},
                                                                                    componentName: 'IconElement',
                                                                                    componentProps: {iconType: 'svg'}
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.name',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.email',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                }
                                                                            ],
                                                                            valueComponents: [
                                                                                {
                                                                                    selectionKey: 'customers.avatar',
                                                                                    componentName: 'IconElement',
                                                                                    componentProps: {iconType: 'svg'}
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.name',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.email',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        name: 'Adres',
                                                        name_nl_NL: 'Telefoon',
                                                        name_fr_FR: 'Téléphone',
                                                        name_en_GB: 'Phone',
                                                        cell: {
                                                            width: 100,
                                                            clickable: true,
                                                            clickAction: '',
                                                            customClass: '',
                                                            options: {
                                                                updateMode: 'skip-realistic'
                                                            },
                                                            components: [
                                                                {
                                                                    db: {
                                                                        dataKey: 'hasHomeAddressGeoLocation.street',
                                                                        type: 'package.core.identity:GeoLocation', // inherit
                                                                        validation: 'string|*|*|range|style|default'
                                                                    },
                                                                    ui: {
                                                                        cellComponent: {
                                                                            componentName: 'TextInputCell',
                                                                            componentProps: {}
                                                                        },
                                                                        dependencies: [
                                                                            {
                                                                                dependentOn: 'name',
                                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                                dependencyPayload: {}
                                                                            }
                                                                        ],
                                                                        elementComponent: {
                                                                            componentName: 'CellElement',
                                                                            componentProps: {
                                                                                dropdownDefaultOpen: true
                                                                            },

                                                                            optionComponents: [
                                                                                {
                                                                                    selectionKey: 'customers.avatar',
                                                                                    componentKeys: {label: 'customers.label'},
                                                                                    componentName: 'IconElement',
                                                                                    componentProps: {iconType: 'svg'}
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.name',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.email',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                }
                                                                            ],
                                                                            valueComponents: [
                                                                                {
                                                                                    selectionKey: 'customers.avatar',
                                                                                    componentName: 'IconElement',
                                                                                    componentProps: {iconType: 'svg'}
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.name',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.email',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    db: {
                                                                        dataKey: 'hasHomeAddressGeoLocation.zipCode',
                                                                        type: 'package.core.identity:GeoLocation', // inherit
                                                                        validation: 'string|*|range|style|default'
                                                                    },
                                                                    ui: {
                                                                        cellComponent: {
                                                                            componentName: 'TextInputCell',
                                                                            componentProps: {}
                                                                        },
                                                                        dependencies: [
                                                                            {
                                                                                dependentOn: 'name',
                                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                                dependencyPayload: {}
                                                                            }
                                                                        ],
                                                                        elementComponent: {
                                                                            componentName: 'CellElement',
                                                                            componentProps: {
                                                                                dropdownDefaultOpen: true
                                                                            },

                                                                            optionComponents: [
                                                                                {
                                                                                    selectionKey: 'customers.avatar',
                                                                                    componentKeys: {label: 'customers.label'},
                                                                                    componentName: 'IconElement',
                                                                                    componentProps: {iconType: 'svg'}
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.name',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.email',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                }
                                                                            ],
                                                                            valueComponents: [
                                                                                {
                                                                                    selectionKey: 'customers.avatar',
                                                                                    componentName: 'IconElement',
                                                                                    componentProps: {iconType: 'svg'}
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.name',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.email',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    db: {
                                                                        dataKey: 'hasHomeAddressGeoLocation.city',
                                                                        type: 'package.core.identity:GeoLocation', // inherit
                                                                        validation: 'string|*|range|style|default'
                                                                    },
                                                                    ui: {
                                                                        cellComponent: {
                                                                            componentName: 'TextInputCell',
                                                                            componentProps: {}
                                                                        },
                                                                        dependencies: [
                                                                            {
                                                                                dependentOn: 'name',
                                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                                dependencyPayload: {}
                                                                            }
                                                                        ],
                                                                        elementComponent: {
                                                                            componentName: 'CellElement',
                                                                            componentProps: {
                                                                                dropdownDefaultOpen: true
                                                                            },

                                                                            optionComponents: [
                                                                                {
                                                                                    selectionKey: 'customers.avatar',
                                                                                    componentKeys: {label: 'customers.label'},
                                                                                    componentName: 'IconElement',
                                                                                    componentProps: {iconType: 'svg'}
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.name',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.email',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                }
                                                                            ],
                                                                            valueComponents: [
                                                                                {
                                                                                    selectionKey: 'customers.avatar',
                                                                                    componentName: 'IconElement',
                                                                                    componentProps: {iconType: 'svg'}
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.name',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                },
                                                                                {
                                                                                    selectionKey: 'customers.email',
                                                                                    componentName: 'TextElement',
                                                                                    componentProps: {},
                                                                                    isLocalized: false
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    layouts: {
                                        main: {
                                            id: '123456789',
                                            name: 'OneRegionLayout',
                                            componentType: 'BioComponent',
                                            componentClass: 'OneRegionLayout',
                                            componentLevel: 'layout',
                                            regions: {
                                                main: {
                                                    position: 'center',
                                                    blocks: {
                                                        'GridTable.PersonList': {
                                                            block: {
                                                                id: '123456789',
                                                                name: 'GridTable.PersonList',
                                                                instanceType: 'package.core.identity:Identity',
                                                                componentClass: 'GridTable',
                                                                componentLevel: 'block'
                                                            },
                                                            config: {
                                                                tableId: 'CustomerList',
                                                                tableName: 'Klanten',
                                                                tableName_nl_NL: 'Klanten',
                                                                tableName_fr_FR: 'Clients',
                                                                tableName_en_GB: 'Customers',
                                                                columns: [
                                                                    {
                                                                        name: 'Voornaam',
                                                                        name_nl_NL: 'Voornaam',
                                                                        name_fr_FR: 'Prénom',
                                                                        name_en_GB: 'Firstname',
                                                                        filterComponentName: 'SelectIconCell',
                                                                        filterComponentProps: {
                                                                            iconType: 'img'
                                                                        },
                                                                        cellProps: {
                                                                            address: 'personListGridTable',
                                                                            instanceType: 'package.core.identity:Identity',
                                                                            style: {
                                                                                className: '',
                                                                                width: 100,
                                                                                minHeight: 'fit-content'
                                                                            },
                                                                            options: {
                                                                                operationMode: 'basic',
                                                                                updateMode: 'SKIP_REALISTIC',
                                                                                isLocalized: true,
                                                                                clickable: true,
                                                                                clickAction: ''
                                                                            },
                                                                            components: [
                                                                                {
                                                                                    db: {
                                                                                        dataKey: 'firstName',
                                                                                        type: 'package.core.identity:Identity', // inherit
                                                                                        validation: 'string|1|*|range|style|default'
                                                                                    },
                                                                                    ui: {
                                                                                        cellComponent: {
                                                                                            componentName: 'TextInputCell',
                                                                                            componentKeys: {label: 'customers.label', iconInitials: 'fullName'},
                                                                                            componentProps: {}
                                                                                        },
                                                                                        dependencies: [
                                                                                            {
                                                                                                dependentOn: 'name',
                                                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                                                dependencyPayload: {}
                                                                                            }
                                                                                        ],
                                                                                        elementComponent: {
                                                                                            componentName: 'CellElement',
                                                                                            componentProps: {
                                                                                                dropdownDefaultOpen: true
                                                                                            },

                                                                                            optionComponents: [
                                                                                                {
                                                                                                    selectionKey: 'customers.avatar',
                                                                                                    componentKeys: {label: 'customers.label'},
                                                                                                    componentName: 'IconElement',
                                                                                                    componentProps: {iconType: 'svg'}
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.name',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.email',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                }
                                                                                            ],
                                                                                            valueComponents: [
                                                                                                {
                                                                                                    selectionKey: 'customers.avatar',
                                                                                                    componentName: 'IconElement',
                                                                                                    componentProps: {iconType: 'svg'}
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.name',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.email',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        name: 'Familie Naam',
                                                                        name_nl_NL: 'Naam',
                                                                        name_fr_FR: 'Nom',
                                                                        name_en_GB: 'Last name',
                                                                        cellProps: {
                                                                            width: 100,
                                                                            clickable: true,
                                                                            clickAction: '',
                                                                            customClass: '',
                                                                            options: {
                                                                                operationMode: 'basic',
                                                                                updateMode: 'SKIP_REALISTIC',
                                                                                isLocalized: true,
                                                                                clickable: true,
                                                                                clickAction: ''
                                                                            },
                                                                            components: [
                                                                                {
                                                                                    db: {
                                                                                        dataKey: 'lastName',
                                                                                        type: 'package.core.identity:Identity', // inherit
                                                                                        validation: 'string|*|range|style|default'
                                                                                    },
                                                                                    ui: {
                                                                                        cellComponent: {
                                                                                            componentName: 'TextInputCell',
                                                                                            componentProps: {}
                                                                                        },
                                                                                        dependencies: [
                                                                                            {
                                                                                                dependentOn: 'name',
                                                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                                                dependencyPayload: {}
                                                                                            }
                                                                                        ],
                                                                                        elementComponent: {
                                                                                            componentName: 'CellElement',
                                                                                            componentProps: {
                                                                                                dropdownDefaultOpen: true
                                                                                            },

                                                                                            optionComponents: [
                                                                                                {
                                                                                                    selectionKey: 'customers.avatar',
                                                                                                    componentKeys: {label: 'customers.label'},
                                                                                                    componentName: 'IconElement',
                                                                                                    componentProps: {iconType: 'svg'}
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.name',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.email',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                }
                                                                                            ],
                                                                                            valueComponents: [
                                                                                                {
                                                                                                    selectionKey: 'customers.avatar',
                                                                                                    componentName: 'IconElement',
                                                                                                    componentProps: {iconType: 'svg'}
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.name',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.email',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        name: 'Naam',
                                                                        name_nl_NL: 'Email',
                                                                        name_fr_FR: 'Email',
                                                                        name_en_GB: 'Email',
                                                                        cellProps: {
                                                                            width: 100,
                                                                            clickable: true,
                                                                            clickAction: '',
                                                                            customClass: '',
                                                                            options: {},
                                                                            components: [
                                                                                {
                                                                                    db: {
                                                                                        dataKey: 'name',
                                                                                        type: 'package.core.identity:Identity', // inherit
                                                                                        validation: 'string|*|range|style|default'
                                                                                    },
                                                                                    ui: {
                                                                                        cellComponent: {
                                                                                            componentName: 'TextInputCell',
                                                                                            componentProps: {}
                                                                                        },
                                                                                        dependencies: [
                                                                                            {
                                                                                                dependentOn: 'name',
                                                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                                                dependencyPayload: {}
                                                                                            }
                                                                                        ],
                                                                                        elementComponent: {
                                                                                            componentName: 'CellElement',
                                                                                            componentProps: {
                                                                                                dropdownDefaultOpen: true
                                                                                            },

                                                                                            optionComponents: [
                                                                                                {
                                                                                                    selectionKey: 'customers.avatar',
                                                                                                    componentKeys: {label: 'customers.label'},
                                                                                                    componentName: 'IconElement',
                                                                                                    componentProps: {iconType: 'svg'}
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.name',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.email',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                }
                                                                                            ],
                                                                                            valueComponents: [
                                                                                                {
                                                                                                    selectionKey: 'customers.avatar',
                                                                                                    componentName: 'IconElement',
                                                                                                    componentProps: {iconType: 'svg'}
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.name',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.email',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        name: 'Adres',
                                                                        name_nl_NL: 'Telefoon',
                                                                        name_fr_FR: 'Téléphone',
                                                                        name_en_GB: 'Phone',
                                                                        cellProps: {
                                                                            width: 100,
                                                                            clickable: true,
                                                                            clickAction: '',
                                                                            customClass: '',
                                                                            options: {
                                                                                updateMode: 'skip-realistic'
                                                                            },
                                                                            components: [
                                                                                {
                                                                                    db: {
                                                                                        dataKey: 'hasHomeAddressGeoLocation.street',
                                                                                        type: 'package.core.identity:GeoLocation', // inherit
                                                                                        validation: 'string|*|*|range|style|default'
                                                                                    },
                                                                                    ui: {
                                                                                        cellComponent: {
                                                                                            componentName: 'TextInputCell',
                                                                                            componentProps: {}
                                                                                        },
                                                                                        dependencies: [
                                                                                            {
                                                                                                dependentOn: 'name',
                                                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                                                dependencyPayload: {}
                                                                                            }
                                                                                        ],
                                                                                        elementComponent: {
                                                                                            componentName: 'CellElement',
                                                                                            componentProps: {
                                                                                                dropdownDefaultOpen: true
                                                                                            },

                                                                                            optionComponents: [
                                                                                                {
                                                                                                    selectionKey: 'customers.avatar',
                                                                                                    componentKeys: {label: 'customers.label'},
                                                                                                    componentName: 'IconElement',
                                                                                                    componentProps: {iconType: 'svg'}
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.name',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.email',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                }
                                                                                            ],
                                                                                            valueComponents: [
                                                                                                {
                                                                                                    selectionKey: 'customers.avatar',
                                                                                                    componentName: 'IconElement',
                                                                                                    componentProps: {iconType: 'svg'}
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.name',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.email',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                },
                                                                                {
                                                                                    db: {
                                                                                        dataKey: 'hasHomeAddressGeoLocation.zipCode',
                                                                                        type: 'package.core.identity:GeoLocation', // inherit
                                                                                        validation: 'string|*|range|style|default'
                                                                                    },
                                                                                    ui: {
                                                                                        cellComponent: {
                                                                                            componentName: 'TextInputCell',
                                                                                            componentProps: {}
                                                                                        },
                                                                                        dependencies: [
                                                                                            {
                                                                                                dependentOn: 'name',
                                                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                                                dependencyPayload: {}
                                                                                            }
                                                                                        ],
                                                                                        elementComponent: {
                                                                                            componentName: 'CellElement',
                                                                                            componentProps: {
                                                                                                dropdownDefaultOpen: true
                                                                                            },

                                                                                            optionComponents: [
                                                                                                {
                                                                                                    selectionKey: 'customers.avatar',
                                                                                                    componentKeys: {label: 'customers.label'},
                                                                                                    componentName: 'IconElement',
                                                                                                    componentProps: {iconType: 'svg'}
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.name',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.email',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                }
                                                                                            ],
                                                                                            valueComponents: [
                                                                                                {
                                                                                                    selectionKey: 'customers.avatar',
                                                                                                    componentName: 'IconElement',
                                                                                                    componentProps: {iconType: 'svg'}
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.name',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.email',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                },
                                                                                {
                                                                                    db: {
                                                                                        dataKey: 'hasHomeAddressGeoLocation.city',
                                                                                        type: 'package.core.identity:GeoLocation', // inherit
                                                                                        validation: 'string|*|range|style|default'
                                                                                    },
                                                                                    ui: {
                                                                                        cellComponent: {
                                                                                            componentName: 'TextInputCell',
                                                                                            componentProps: {}
                                                                                        },
                                                                                        dependencies: [
                                                                                            {
                                                                                                dependentOn: 'name',
                                                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                                                dependencyPayload: {}
                                                                                            }
                                                                                        ],
                                                                                        elementComponent: {
                                                                                            componentName: 'CellElement',
                                                                                            componentProps: {
                                                                                                dropdownDefaultOpen: true
                                                                                            },

                                                                                            optionComponents: [
                                                                                                {
                                                                                                    selectionKey: 'customers.avatar',
                                                                                                    componentKeys: {label: 'customers.label'},
                                                                                                    componentName: 'IconElement',
                                                                                                    componentProps: {iconType: 'svg'}
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.name',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.email',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                }
                                                                                            ],
                                                                                            valueComponents: [
                                                                                                {
                                                                                                    selectionKey: 'customers.avatar',
                                                                                                    componentName: 'IconElement',
                                                                                                    componentProps: {iconType: 'svg'}
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.name',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                },
                                                                                                {
                                                                                                    selectionKey: 'customers.email',
                                                                                                    componentName: 'TextElement',
                                                                                                    componentProps: {},
                                                                                                    isLocalized: false
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    layouts: {
                                                        main: {}
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    compositions: {
                                        home: {
                                            id: '123456789',
                                            name: 'PersonList',
                                            componentType: 'BioComponent',
                                            componentClass: 'PersonList',
                                            componentLevel: 'composition',
                                            componentProps: {}
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                blog: {}
            }
        }
    },
    composition: {
        id: '123456789',
        name: 'PersonList',
        type: 'Component',
        class: 'PersonList',
        level: 'composition',
        config: {},
        layout: {
            id: '123456789',
            name: 'OneRegionLayout',
            type: 'Component',
            class: 'OneRegionLayout',
            level: 'layout',
            regions: {
                main: {
                    position: 'center',
                    blocks: {
                        'GridTable.PersonList': {
                            block: {
                                id: '123456789',
                                name: 'GridTable.PersonList',
                                instanceType: 'package.core.identity:Identity',
                                componentClass: 'GridTable',
                                componentLevel: 'block'
                            },
                            config: {
                                tableId: 'CustomerList',
                                tableName: 'Klanten',
                                tableName_nl_NL: 'Klanten',
                                tableName_fr_FR: 'Clients',
                                tableName_en_GB: 'Customers',
                                columns: [
                                    {
                                        name: 'Voornaam',
                                        name_nl_NL: 'Voornaam',
                                        name_fr_FR: 'Prénom',
                                        name_en_GB: 'Firstname',
                                        filterComponentName: 'SelectIconCell',
                                        filterComponentProps: {
                                            iconType: 'img'
                                        },
                                        cellProps: {
                                            address: 'personListGridTable',
                                            instanceType: 'package.core.identity:Identity',
                                            style: {
                                                className: '',
                                                width: 100,
                                                minHeight: 'fit-content'
                                            },
                                            options: {
                                                operationMode: 'basic',
                                                updateMode: 'SKIP_REALISTIC',
                                                isLocalized: true,
                                                clickable: true,
                                                clickAction: ''
                                            },
                                            components: [
                                                // organellen
                                                {
                                                    db: {
                                                        dataKey: 'hasHomeAddressGeoLocation.isPrimaryClassifiedAs.name',
                                                        //  type: 'package.core.identity:Identity', // inherit
                                                        validation: 'string|1|*|range|style|default'
                                                    },
                                                    ui: {
                                                        cellComponent: {
                                                            cellComponentName: 'TextInputCell',
                                                            cellComponentProps: {}
                                                        },
                                                        dependencies: [
                                                            {
                                                                dependentOn: 'name',
                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                dependencyPayload: {}
                                                            }
                                                        ],
                                                        selectionComponent: {}
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        name: 'Familie Naam',
                                        name_nl_NL: 'Naam',
                                        name_fr_FR: 'Nom',
                                        name_en_GB: 'Last name',
                                        cellProps: {
                                            instanceType: 'package.core.identity:Identity',
                                            width: 100,
                                            clickable: true,
                                            clickAction: '',
                                            customClass: '',
                                            options: {
                                                operationMode: 'basic',
                                                updateMode: 'SKIP_REALISTIC',
                                                isLocalized: true,
                                                clickable: true,
                                                clickAction: ''
                                            },
                                            components: [
                                                {
                                                    db: {
                                                        dataKey: 'lastName',
                                                        //   type: 'package.core.identity:Identity', // inherit
                                                        validation: 'string|*|range|style|default'
                                                    },
                                                    ui: {
                                                        cellComponent: {
                                                            cellComponentName: 'TextInputCell',
                                                            cellComponentProps: {}
                                                        },
                                                        dependencies: [
                                                            {
                                                                dependentOn: 'name',
                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                dependencyPayload: {}
                                                            }
                                                        ],
                                                        selectionComponent: {}
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        name: 'Naam',
                                        name_nl_NL: 'Email',
                                        name_fr_FR: 'Email',
                                        name_en_GB: 'Email',
                                        cellProps: {
                                            instanceType: 'package.core.identity:Identity',
                                            width: 100,
                                            clickable: true,
                                            clickAction: '',
                                            customClass: '',
                                            options: {},
                                            components: [
                                                {
                                                    db: {
                                                        dataKey: 'name',
                                                        //   type: 'package.core.identity:Identity', // inherit
                                                        validation: 'string|*|range|style|default'
                                                    },
                                                    ui: {
                                                        cellComponent: {
                                                            cellComponentName: 'TextInputCell',
                                                            cellComponentProps: {}
                                                        },
                                                        dependencies: [
                                                            {
                                                                dependentOn: 'name',
                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                dependencyPayload: {}
                                                            }
                                                        ],
                                                        selectionComponent: {}
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        name: 'Adres',
                                        name_nl_NL: 'Telefoon',
                                        name_fr_FR: 'Téléphone',
                                        name_en_GB: 'Phone',
                                        cellProps: {
                                            instanceType: 'package.core.identity:Identity',
                                            width: 100,
                                            clickable: true,
                                            clickAction: '',
                                            customClass: '',
                                            options: {
                                                updateMode: 'skip-realistic'
                                            },
                                            components: [
                                                {
                                                    db: {
                                                        dataKey: 'hasHomeAddressGeoLocation.street',
                                                        //   type: 'package.core.identity:GeoLocation', // inherit
                                                        validation: 'string|*|*|range|style|default'
                                                    },
                                                    ui: {
                                                        cellComponent: {
                                                            cellComponentName: 'TextInputCell',
                                                            cellComponentProps: {}
                                                        },
                                                        dependencies: [
                                                            {
                                                                dependentOn: 'name',
                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                dependencyPayload: {}
                                                            }
                                                        ],
                                                        selectionComponent: {}
                                                    }
                                                },
                                                {
                                                    db: {
                                                        dataKey: 'hasHomeAddressGeoLocation.zipCode',
                                                        //  type: 'package.core.identity:GeoLocation', // inherit
                                                        validation: 'string|*|range|style|default'
                                                    },
                                                    ui: {
                                                        cellComponent: {
                                                            cellComponentName: 'TextInputCell',
                                                            cellComponentProps: {}
                                                        },
                                                        dependencies: [
                                                            {
                                                                dependentOn: 'name',
                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                dependencyPayload: {}
                                                            }
                                                        ],
                                                        selectionComponent: {}
                                                    }
                                                },
                                                {
                                                    db: {
                                                        dataKey: 'hasHomeAddressGeoLocation.city',
                                                        //  type: 'package.core.identity:GeoLocation', // inherit
                                                        validation: 'string|*|range|style|default'
                                                    },
                                                    ui: {
                                                        cellComponent: {
                                                            cellComponentName: 'TextInputCell',
                                                            cellComponentProps: {}
                                                        },
                                                        dependencies: [
                                                            {
                                                                dependentOn: 'name',
                                                                dependencyType: 'validation', // validation|logic|sync|link
                                                                dependencyResolver: 'reveal', // none|flash|notification|reveal|enable|switch|refresh
                                                                dependencyPayload: {}
                                                            }
                                                        ],
                                                        selectionComponent: {}
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        }
    },
    uiState: {
        colors: {
            type: 'red',
            resource: 'green',
            discipline: 'blue'
        },
        table: {
            selectAll: false,
            selectedRowIds: [''],
            pageSize: 50,
            currentPage: 1,
            pageCount: 1,
            isGlobalEditMode: false,
            showCheckboxes: true,
            buttons: ['add']
        },
        detail: {
            selectDetail: 0,
            switchDetail: true,
            isDetailViewInEditMode: false
        }
    }
}

/**
 * Reducers ui
 */
const uiReducer = (state = ui, action) => {
    switch (action.type) {
        case ActionTypes.EDIT_PERSON:
            return {
                ...state,
                uiState: {
                    ...state.uiState,
                    detail: {
                        ...state.uiState.detail,
                        selectDetail: action.payload.rowIndex
                    }
                }
            }

        default:
            return state
    }
}

/**
 * Export Reducers
 */
export default combineReducers({
    ui: uiReducer
})
