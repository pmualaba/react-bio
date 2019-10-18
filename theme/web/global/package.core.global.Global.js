import {css} from 'styled-components'

export default css`
    .PageSection {
        &.homeBenefits {
            padding: 50px 20px 50px;
            text-align: center;
            .PageSection__title {
                &.h2 {
                    font-size: 45px;
                    font-weight: 900;
                    padding: 10px;
                }
                &.h4 {
                    font-size: 14px;
                    font-weight: 300;
                    padding: 10px;
                    margin: ${props => props.margin}px 0;
                }
            }
            > .PageSection__content {
                > .PageSection__column {
                    &:nth-child(1) {
                        .homeBenefitsItem {
                            background: #5696d5;
                        }
                    }
                    &:nth-child(2) {
                        .homeBenefitsItem {
                            background: #4e7a90;
                        }
                    }
                    &:nth-child(3) {
                        .homeBenefitsItem {
                            background: #3a597f;
                        }
                    }
                }
            }
        }
    }
`
