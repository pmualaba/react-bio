# **Example Reducer**

---

  ```
 /**
/**
 export const instances = {
    'bio.package.core.identity': {
        Identity: {
            '1': {
                id: '1',
                type: 'Identity',
                package: 'bio.package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789654',
                    type: 'GeoLocation',
                    package: 'bio.package.core.identity'
                },
                hasHomeAddressGeoLocations: [
                    {
                        type: 'GeoLocation',
                        package: 'bio.package.core.identity'
                    }
                ]
            },
            '2': {
                id: '2',
                type: 'Identity',
                package: 'bio.package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789655',
                    type: 'GeoLocation',
                    package: 'bio.package.core.identity'
                },
                hasHomeAddressGeoLocations: [
                    {
                        type: 'GeoLocation',
                        package: 'bio.package.core.identity'
                    }
                ]
            },
            '3': {
                id: '3',
                type: 'Identity',
                package: 'bio.package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789656',
                    type: 'GeoLocation',
                    package: 'bio.package.core.identity'
                }
            },
            '4': {
                id: '4',
                type: 'Identity',
                package: 'bio.package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789657',
                    type: 'GeoLocation',
                    package: 'bio.package.core.identity'
                }
            },
            '5': {
                id: '5',
                type: 'Identity',
                package: 'bio.package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789658',
                    type: 'GeoLocation',
                    package: 'bio.package.core.identity'
                }
            },
            '6': {
                id: '6',
                type: 'Identity',
                package: 'bio.package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789659',
                    type: 'GeoLocation',
                    package: 'bio.package.core.identity'
                }
            },
            '7': {
                id: '7',
                type: 'Identity',
                package: 'bio.package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789660',
                    type: 'GeoLocation',
                    package: 'bio.package.core.identity'
                }
            },
            '8': {
                id: '8',
                type: 'Identity',
                package: 'bio.package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789661',
                    type: 'GeoLocation',
                    package: 'bio.package.core.identity'
                }
            },
            '9': {
                id: '9',
                type: 'Identity',
                package: 'bio.package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789662',
                    type: 'GeoLocation',
                    package: 'bio.package.core.identity'
                }
            },
            '10': {
                id: '10',
                type: 'Identity',
                package: 'bio.package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789663',
                    type: 'GeoLocation',
                    package: 'bio.package.core.identity'
                }
            },
            '11': {
                id: '11',
                type: 'Identity',
                package: 'bio.package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789664',
                    type: 'GeoLocation',
                    package: 'bio.package.core.identity'
                }
            },
            '12': {
                id: '12',
                type: 'Identity',
                package: 'bio.package.core.identity',
                name: 'Patrick Mualaba',
                firstName: 'Patrick',
                lastName: 'Mualaba',
                hasHomeAddressGeoLocation: {
                    id: '789654',
                    type: 'GeoLocation',
                    package: 'bio.package.core.identity'
                }
            }
        },
        GeoLocation: {
            '789654': {
                id: '789654',
                type: 'GeoLocation',
                package: 'bio.package.core.erp',
                street: 'Gevaertstraat 54',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'bio.package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321654',
                    type: 'TaxonomyTerm',
                    package: 'bio.package.core.identity'
                }
            },
            '789656': {
                id: '789656',
                type: 'GeoLocation',
                package: 'bio.package.core.erp',
                street: 'Gevaertstraat 56',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'bio.package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321655',
                    type: 'TaxonomyTerm',
                    package: 'bio.package.core.identity'
                }
            },
            '789657': {
                id: '789657',
                type: 'GeoLocation',
                package: 'bio.package.core.erp',
                street: 'Gevaertstraat 57',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'bio.package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321656',
                    type: 'TaxonomyTerm',
                    package: 'bio.package.core.identity'
                }
            },
            '789658': {
                id: '789658',
                type: 'GeoLocation',
                package: 'bio.package.core.erp',
                street: 'Gevaertstraat 58',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'bio.package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321657',
                    type: 'TaxonomyTerm',
                    package: 'bio.package.core.identity'
                }
            },
            '789659': {
                id: '789659',
                type: 'GeoLocation',
                package: 'bio.package.core.erp',
                street: 'Gevaertstraat 59',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'bio.package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321654',
                    type: 'TaxonomyTerm',
                    package: 'bio.package.core.identity'
                }
            },
            '789660': {
                id: '789660',
                type: 'GeoLocation',
                package: 'bio.package.core.erp',
                street: 'Gevaertstraat 60',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'bio.package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321654',
                    type: 'TaxonomyTerm',
                    package: 'bio.package.core.identity'
                }
            },
            '789661': {
                id: '789661',
                type: 'GeoLocation',
                package: 'bio.package.core.erp',
                street: 'Gevaertstraat 61',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'bio.package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321658',
                    type: 'TaxonomyTerm',
                    package: 'bio.package.core.identity'
                }
            },
            '789662': {
                id: '789662',
                type: 'GeoLocation',
                package: 'bio.package.core.erp',
                street: 'Gevaertstraat 62',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'bio.package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321658',
                    type: 'TaxonomyTerm',
                    package: 'bio.package.core.identity'
                }
            },
            '789663': {
                id: '789663',
                type: 'GeoLocation',
                package: 'bio.package.core.erp',
                street: 'Gevaertstraat 63',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'bio.package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321659',
                    type: 'TaxonomyTerm',
                    package: 'bio.package.core.identity'
                }
            },
            '789664': {
                id: '789664',
                type: 'GeoLocation',
                package: 'bio.package.core.erp',
                street: 'Gevaertstraat 64',
                zipCode: '1800',
                city: 'Vilvoorde',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'bio.package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321659',
                    type: 'TaxonomyTerm',
                    package: 'bio.package.core.identity'
                }
            },
            '789655': {
                id: '789655',
                type: 'GeoLocation',
                package: 'bio.package.core.erp',
                street: 'Anspachlaan 25',
                zipCode: '1000',
                city: 'Brussel',
                country: 'BE',
                isClassifiedAs: [{type: 'TaxonomyTerm', package: 'bio.package.core.identity'}],
                isPrimaryClassifiedAs: {
                    id: '321659',
                    type: 'TaxonomyTerm',
                    package: 'bio.package.core.identity'
                }
            }
        },
        TaxonomyTerm: {
            '321654': {
                id: '321654',
                type: 'TaxonomyTerm',
                package: 'bio.package.core.identity',
                name: 'city'
            },
            '321655': {
                id: '321655',
                type: 'TaxonomyTerm',
                package: 'bio.package.core.identity',
                name: 'city2'
            },
            '321656': {
                id: '321656',
                type: 'TaxonomyTerm',
                package: 'bio.package.core.identity',
                name: 'city3'
            },
            '321657': {
                id: '321657',
                type: 'TaxonomyTerm',
                package: 'bio.package.core.identity',
                name: 'city4'
            },
            '321658': {
                id: '321658',
                type: 'TaxonomyTerm',
                package: 'bio.package.core.identity',
                name: 'city5'
            },
            '321659': {
                id: '321659',
                type: 'TaxonomyTerm',
                package: 'bio.package.core.identity',
                name: 'city6'
            },
            '321660': {
                id: '321660',
                type: 'TaxonomyTerm',
                package: 'bio.package.core.identity',
                name: 'city7'
            }
        }
    },
    'bio.package.core.erp': {
        Window: {
            '1594': {
                id: '1594',
                type: 'Window',
                package: 'bio.package.core.erp',
                startTime: '2000-01-01T06:00:00+0200',
                endTime: '2000-01-01T12:00:00+0200'
            },
            '821346': {
                id: '821346',
                type: 'Window',
                package: 'bio.package.core.erp',
                startTime: '2000-01-01T06:00:00+0200',
                endTime: '2000-01-01T12:00:00+0200'
            },
            '16820': {
                id: '16820',
                type: 'Window',
                package: 'bio.package.core.erp',
                startTime: '2000-01-01T06:00:00+0200',
                endTime: '2000-01-01T12:00:00+0200'
            },
            '944357': {
                id: '944357',
                type: 'Window',
                package: 'bio.package.core.erp',
                startTime: '2000-01-01T06:00:00+0200',
                endTime: '2000-01-01T12:00:00+0200'
            }
        }
    }
}

 export const collections = {
    'bio.package.core.identity': {
        Identity: {
            all: [
                {id: '2', type: 'Identity', package: 'bio.package.core.identity'},
                {id: '3', type: 'Identity', package: 'bio.package.core.identity'},
                {id: '4', type: 'Identity', package: 'bio.package.core.identity'},
                {id: '1', type: 'Identity', package: 'bio.package.core.identity'},
                {id: '5', type: 'Identity', package: 'bio.package.core.identity'},
                {id: '6', type: 'Identity', package: 'bio.package.core.identity'},
                {id: '8', type: 'Identity', package: 'bio.package.core.identity'},
                {id: '9', type: 'Identity', package: 'bio.package.core.identity'},
                {id: '7', type: 'Identity', package: 'bio.package.core.identity'},
                {id: '10', type: 'Identity', package: 'bio.package.core.identity'},
                {id: '11', type: 'Identity', package: 'bio.package.core.identity'},
                {id: '12', type: 'Identity', package: 'bio.package.core.identity'}
            ],
            '1': {
                hasHomeAddressGeoLocations: [
                    {id: '789654', type: 'GeoLocation', package: 'bio.package.core.identity'},
                    {id: '789659', type: 'GeoLocation', package: 'bio.package.core.identity'}
                ]
            },
            '2': {
                hasHomeAddressGeoLocations: [
                    {id: '789655', type: 'GeoLocation', package: 'bio.package.core.identity'},
                    {id: '789660', type: 'GeoLocation', package: 'bio.package.core.identity'}
                ]
            }
        },
        Availability: {
            '456789': {
                hasWindows: [
                    {id: '1594', type: 'Window', package: 'bio.package.core.erp'},
                    {id: '821346', type: 'Window', package: 'bio.package.core.erp'}
                ]
            },
            '789456': {
                hasWindows: [
                    {id: '16820', type: 'Window', package: 'bio.package.core.erp'},
                    {id: '944357', type: 'Window', package: 'bio.package.core.erp'}
                ]
            }
        },
        Calendar: {
            '123456': {
                hasAvailability: [
                    {id: '456789', type: 'Availability', package: 'bio.package.core.erp'},
                    {id: '789456', type: 'Availability', package: 'bio.package.core.erp'}
                ]
            }
        },
        GeoLocation: {
            '789654': {
                isClassifiedAs: [
                    {id: '321654', type: 'TaxonomyTerm', package: 'bio.package.core.identity'},
                    {id: '321655', type: 'TaxonomyTerm', package: 'bio.package.core.identity'}
                ]
            },
            '789656': {
                isClassifiedAs: [
                    {id: '321656', type: 'TaxonomyTerm', package: 'bio.package.core.identity'},
                    {id: '321657', type: 'TaxonomyTerm', package: 'bio.package.core.identity'}
                ]
            },
            '789657': {
                isClassifiedAs: [
                    {id: '321658', type: 'TaxonomyTerm', package: 'bio.package.core.identity'},
                    {id: '321657', type: 'TaxonomyTerm', package: 'bio.package.core.identity'}
                ]
            },
            '789658': {
                isClassifiedAs: [
                    {id: '321659', type: 'TaxonomyTerm', package: 'bio.package.core.identity'},
                    {id: '321657', type: 'TaxonomyTerm', package: 'bio.package.core.identity'}
                ]
            }
        }
    }
}
 */
 */
        
