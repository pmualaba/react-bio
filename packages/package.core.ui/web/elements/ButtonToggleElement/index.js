import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LockButtonStyled = styled.div.attrs(props => ({
    at: `${props.at}`,
    component: `${props.component}`
}))`
    .LockButton__container {
        @include transition();
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 5rem;
        border-bottom: 1px solid #aaa;
        position: relative;
        z-index: 100;

        img {
            @include transition();
            position: absolute;
            opacity: 0;
        }
    }

    .LockButton {
        @include transition();
        position: absolute;
        width: 4rem;
        z-index: 1;
        margin-top: 0.2rem;

        span.LockButton__label {
            color: #222;
            font-size: 0.7rem;
            letter-spacing: 0px;
            line-height: 1.4rem;
            display: block;
            text-align: center;
        }
    }

    .LockButton__lock {
        @include transition(0.3s, ease);
        width: 2rem;
        height: 1.4rem;
        //border: 1px solid #222;
        background: #222;
        border-radius: 10px;
        display: block;
        position: relative;
        font-size: 0.7rem;
        line-height: 1.5rem;
        text-align: center;
        letter-spacing: 0;
        margin: 0 auto;

        &.locked {
            .LockButton__toggle {
                margin-left: 0.4rem;
            }
            .LockButton__handle {
                background: #ed6246;
            }
        }

        span {
            float: left;
            width: 1.5rem;
            color: #222;

            &:first-child {
                color: #fff;
            }
        }
    }

    .LockButton__toggle {
        @include transition(0.3s, ease);
        width: 11rem;
        padding: 0 0.3rem;
        margin-left: -0.4rem;
    }

    .LockButton__handle {
        background: #39b54a;
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 2rem;
        float: left;
    }
`

const LockButton = props => {
    return (
        <LockButtonStyled className="LockButton">
            <a
                id={props.id}
                href=""
                className={`LockButton__lock ${props.isLocked ? 'locked' : 'unlocked'}`}
                onClick={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    props.onClick(e)
                }}
            >
                <div className="LockButton__toggle">
                    <div className="LockButton__handle" />
                </div>
            </a>
            <span className="LockButton__label">{props.isLocked ? 'LOCKED' : 'UNLOCKED'}</span>
        </LockButtonStyled>
    )
}

LockButton.propTypes = {
    id: PropTypes.string.isRequired,
    isLocked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

LockButton.defaultProps = {
    id: '',
    isLocked: false,
    onClick: () => {}
}

export default LockButton
