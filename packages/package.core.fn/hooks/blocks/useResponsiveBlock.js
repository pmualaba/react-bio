import React, {useEffect, useRef} from 'react'

export default function(refBlockStyled, divider = 20) {
    const refBlock = useRef({width: 0, height: 0})

    useEffect(
        () => {
            refBlock.current.height = refBlockStyled.current.clientHeight
            refBlock.current.width = refBlockStyled.current.clientWidth

            refBlockStyled.current.classList.remove('XS', 'S', 'M', 'L', 'XL', 'XXL')

            refBlock.current.width < 200 && refBlockStyled.current.classList.add('XS')

            refBlock.current.width > 200 &&
                refBlock.current.width < 400 &&
                refBlockStyled.current.classList.add('S')

            refBlock.current.width > 400 &&
                refBlock.current.width < 600 &&
                refBlockStyled.current.classList.add('M')

            refBlock.current.width > 600 &&
                refBlock.current.width < 800 &&
                refBlockStyled.current.classList.add('L')

            refBlock.current.width > 800 &&
                refBlock.current.width < 1000 &&
                refBlockStyled.current.classList.add('XL')

            refBlock.current.width > 1000 && refBlockStyled.current.classList.add('XXL')

            refBlockStyled.current.style.fontSize = `${refBlock.current.width / divider}px`
        },
        [refBlock.current.height, refBlock.current.width]
    )
}
