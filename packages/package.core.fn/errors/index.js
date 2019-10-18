/**
 * ***********
 * Error Types
 * ***********
 */

/**
 * ERR_JOI
 * JOI Validation Error Creator
 */

exports.ERR_JOI = (locale = 'en_GB', err, server = false, service = 'cloud.beware.core...', debug = [], code = -1, reference) => {
    const LocalizedErrorStrings = {
        'string.min__en_GB': 'Value does not meet the length requirements.',
        'string.min__nl_NL': 'Waarde voldoet niet aan het minimaal aantal tekens.',
        'string.min__fr_FR': 'La valeur ne répond pas au nombre minimum de caractères.',
        'string.max__en_GB': 'Value does not meet the length requirements.',
        'string.max__nl_NL': 'Waarde overschrijdt het maximaal aantal tekens.',
        'string.max__fr_FR': 'La valeur ne répond pas au nombre maximum de caractères.'
    }

    const specificErrorStrings = {
        any_empty_name__en_GB: 'Name is required',
        any_empty_subject__en_GB: 'Subject is required',
        any_required_subject__en_GB: 'Subject is required',
        string_regex_base_phone__en_GB: 'This is not a valid phone number',
        string_email__en_GB: 'This is not a valid email address',
        date_base_date__en_GB: 'This is not a valid date',
        any_empty_status__en_GB: 'Status is required',
        any_empty_propertyType__en_GB: 'Property Type is required',
        any_empty_datatype__en_GB: 'Value cannot be empty',
        number_base_datatype__en_GB: 'Value must be a number',
        date_base_datatype__en_GB: 'Value must be a valid date',
        boolean_base_datatype__en_GB: 'Value must be true or false',
        number_base_uniqueCode__en_GB: 'code should be unique',
        any_empty_dualselect__en_GB: 'Please pick a relation'
    }

    const errors = {}
    /**
     * Example errors:
     * {
     *      password: {
     *          type: "ValidationError",
     *          alert: "La valeur ne répond pas au nombre minimum de caractères.",
     *          text: "password" length must be at least 4 characters long",
     *          label: "string.min",
     *          server: false,
     *          package: "cloud.beware.core.authentication",
     *          ref: "password",
     *          code: -1,
     *          key: "string.min",
     *          raw: "",
     *          debug: []
     *      },
     *      username: {
     *          ...
     *      }
     * }
     */
    err.details.forEach((error, index) => {
        errors[err.details[index].path] = {
            type: err.name,
            alert: LocalizedErrorStrings[`${err.details[index].type}__${locale}`] || err.details[index].message,
            message: specificErrorStrings[`${err.details[index].type.replace(/\./g, '_')}_${reference}__${locale}`] || 'Something went wrong',
            text: err.details[index].message,
            label: err.details[index].type,
            server,
            package: service,
            ref: err.details[index].path,
            code,
            key: err.details[index].type,
            raw: err,
            debug
        }
    })
    return errors
}

/**
 * ERR_NODEJS
 * Node.js Server Error Creator
 */

exports.ERR_NODEJS = (locale = 'en_GB', err, server = true, service = 'cloud.beware.core...', debug = [], code = -1) => {
    console.log('ERR', err)
    const LocalizedErrorStrings = {
        '401__en_GB': 'Wrong Username or Password.',
        '401__nl_NL': 'Gebruikersnaam of Paswoord zijn niet correct.',
        '401__fr_FR': 'Nom ou Mot de passe incorrecte.',
        '503__en_GB': 'Authentication service unreachable',
        '503__nl_NL': 'Authenticatie service niet beschikbaar',
        '503__fr_FR': "Service d'Authentication non disponible",
        '500__en_GB': 'Server Error.',
        '500__nl_NL': 'Server Fout.',
        '500__fr_FR': 'Serveur Erroné.'
    }

    /**
     * Example errors:
     * {
     *     type: "ServerError",
     *     alert: "Gebruikersnaam of Paswoord zijn niet correct.",
     *     text: "Wrong username or password, or user is blocked. Check caps lock. Note: Username is case sensitive!",
     *     label: "",
     *     server: true,
     *     package: "cloud.beware.core.authentication",
     *     ref: "",
     *     code: 401,
     *     key: "",
     *     raw: "",
     *     debug: ['cloud.beware.core.authentication/api/authentication/AUTHENTICATE_USER_FAILED']
     * }
     */

    return {
        type: 'ServerError',
        alert: LocalizedErrorStrings[`${code}__${locale}`] || err.response.data.message,
        text: err.response.data.message,
        label: '',
        server,
        package: service,
        ref: '',
        code,
        key: '',
        raw: err.message,
        debug
    }
}
