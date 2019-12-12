import styled from 'styled-components'

const ButtonElementStyled = styled('button').attrs(props => ({
    'data-kind': 'element',
    'data-component': `${props.meta.class}`,
    'data-rna': `${props.meta['@component']}`,
    'data-dna': `${props.meta['@dna']}`,
    className: `element ${props.meta.class} ${props.dna.ui['theme.style.class'] || ''}`
}))`
    --styled: '/packages/package.core.ui/web/elements/ButtonElement/styled.js';
    display: flex;
    background-image: linear-gradient(45deg, #59d1c7, rgb(201, 247, 243), rgb(245, 245, 245));
    background-size: auto 200%;
    background-position: 0 100%;
    color: #000;
    letter-spacing: 2px;
    font-size: 16px;
    padding: 10px 45px;
    border-radius: 25px;
    cursor: pointer;
    outline: none;
    border: none;
    box-shadow: rgb(167, 171, 190) 6px 5px 0.5rem -3px;
    margin: 20px;
    position: relative;
    transition: background-position 1s;
    &:hover {
        background-color: #fff;
        background-position: 0 0;
        transition: background-position 1s, background-color 1s, box-shadow 1s, transform 1s;
    }
    &:active {
        background-color: #a6d3cf;
        box-shadow: rgb(167, 171, 190) 0 0 0.5rem -3px;
        transform: translateX(2px);
        transition: transform 0.2s, box-shadow 0.2s;
    }

    ${props => props.css};
`
export default ButtonElementStyled
