import {useDispatch} from 'react-redux'
import {AUTHENTICATE_USER, FSA, ON_KEY_UP} from './reducer'

/**
 * Cell__login
 */

export default function Bio(props) {
    const dispatchStore = useDispatch()
    const bio = {}
    bio.Cell__login = {
        meta: {
            '@dna': `${props.meta['@dna']}.cells[0:Cell__login]`,
            '@component': "['package.core.ui'].web.cells.Cell",
            name: 'Cell__login',
            class: 'Cell',
            kind: 'cell'
        },
        dna: {
            data: {
                selectors: {
                    'ImageElement__logo.src': `ui['package.core.cms'].Image['${props.data.init.logo.id}'].localUrl`,
                    'ImageElement__logo.name': `ui['package.core.cms'].Image['${props.data.init.logo.id}'].name`,
                    'TextInputElement__user.value': `ui['package.core.auth'].web.LoginForm.db.user.identity`,
                    'TextInputElement__password.value': `ui['package.core.auth'].web.LoginForm.db.user.secret`
                    // 'TextInputElement__passwordConfirm.value': `ui['package.core.auth'].web.LoginForm.db.user.secret`
                }
            }
        }
    }

    /**
     * Cell__loginConfirm
     */

    bio.Cell__loginConfirm = {
        meta: {
            '@dna': `${props.meta['@dna']}.cells[0:Cell__loginConfirm]`,
            '@component': "['package.core.ui'].web.cells.Cell",
            name: 'Cell__loginConfirm',
            class: 'Cell',
            kind: 'cell'
        },
        dna: {
            data: {
                selectors: {
                    'ImageElement__logo.src': `ui['package.core.cms'].Image['${props.data.init.logo.id}'].localUrl`,
                    'ImageElement__logo.name': `ui['package.core.cms'].Image['${props.data.init.logo.id}'].name`,
                    'TextInputElement__user.value': `ui['package.core.auth'].web.LoginForm.db.user.identities`,
                    'TextInputElement__password.value': `ui['package.core.auth'].web.LoginForm.db.user.secrets`,
                    'TextInputElement__passwordConfirm.value': `ui['package.core.auth'].web.LoginForm.db.user.secrets`
                }
            }
        }
    }

    /**
     * ImageElement__logo
     */

    bio.ImageElement__logo = {
        meta: {
            '@dna': `${props.meta['@dna']}.cells[0:Cell__login].elements[0:ImageElement__logo]`,
            '@component': "['package.core.ui'].web.elements.ImageElement",
            name: 'ImageElement__logo',
            class: 'ImageElement',
            kind: 'element'
        },
        data: {
            init: {
                ...props.data.init.logo,
                src: props.data.init.logo.localUrl,
                localUrl: undefined
            }
        },
        context: props.context
    }

    /**
     * TextInputElement__user
     */

    bio.TextInputElement__user = {
        meta: {
            '@dna': `${props.meta['@dna']}.cells[0:Cell__login].elements[1:TextInputElement__user]`,
            '@component': "['package.core.ui'].web.elements.TextInputElement",
            name: 'TextInputElement__user',
            class: 'TextInputElement',
            kind: 'element'
        },
        data: {
            init: {
                name: 'user',
                autocomplete: 'new-password',
                value: ''
            }
        },
        context: props.context
    }

    /**
     * TextInputElement__password
     */

    bio.TextInputElement__password = {
        meta: {
            '@dna': `${props.meta['@dna']}.cells[0:Cell__login].elements[2:TextInputElement__password]`,
            '@component': "['package.core.ui'].web.elements.TextInputElement",
            name: 'TextInputElement__password',
            class: 'TextInputElement',
            kind: 'element'
        },
        data: {
            init: {
                name: 'password',
                autocomplete: 'autoComplete',
                value: ''
            }
        },
        context: props.context
    }

    /**
     * TextInputElement__passwordConfirm
     */

    bio.TextInputElement__passwordConfirm = {
        meta: {
            '@dna': `${props.meta['@dna']}.cells[1:Cell__loginConfirm].elements[0:TextInputElement__passwordConfirm]`,
            '@component': "['package.core.ui'].web.elements.TextInputElement",
            name: 'TextInputElement__passwordConfirm',
            class: 'TextInputElement',
            kind: 'element'
        },
        data: {
            init: {
                value: ''
            }
        },
        context: props.context,
        fn: {
            onKeyUp(payload) {
                payload.data.selector = `ui['package.core.auth'].web.LoginForm.db.user.secret`
                dispatchStore(FSA(ON_KEY_UP, false, payload, props.meta))
            }
        }
    }

    /**
     * ButtonElement__submit
     */

    bio.ButtonElement__submit = {
        meta: {
            '@dna': `${props.meta['@dna']}.elements[1:ButtonElement__submit]`,
            '@component': "['package.core.ui'].web.elements.ButtonElement",
            name: 'ButtonElement__submit',
            class: 'ButtonElement',
            kind: 'element'
        },
        dna: {
            set: {
                icon: 'fa-home',
                label: 'Login'
            },
            ui: {}
        },
        data: {
            init: {
                value: ''
            }
        },
        context: props.context,
        fn: {
            onClick(payload) {
                payload.data.selector = `ui['package.core.auth'].web.LoginForm.db.user.secret`
                dispatchStore(FSA(AUTHENTICATE_USER, false, payload, props.meta))
            }
        }
    }

    return bio
}
