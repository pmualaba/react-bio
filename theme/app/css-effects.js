import {css} from 'styled-components'
import colors from './css-colors'
import typography from './css-typography'

const effects = {
    transition: (time = '0.5s', ease = 'cubic-bezier(.694,.0482,.335,1)') => css`
        -webkit-transition: all ${time} ${ease} 0s;
        transition: all ${time} ${ease} 0s;
    `,
    transitions: {},
    animations: {},
    tools: {
        clearFix: css`
            &::after {
                content: '';
                display: block;
                clear: both;
            }
        `
    }
}

export default effects
