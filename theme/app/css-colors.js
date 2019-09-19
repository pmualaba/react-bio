import {lighten, darken, desaturate, rgb, mix} from 'polished'

const themeColor = rgb(0, 121, 178)

const Colors = {
    white: '#FFFFFF',
    black: '#000000',
    grey: '#969696',
    lightGrey: '#c4c7d4',
    main: '#393276',
    dark: '#0D083B',
    light: '#837EB1',
    warningColor: '#ff5722',
    actionColor: '#fdd835',
    okColor: '#8bc34a'
}

const colors = {
    themeColor,
    ...Colors,

    primaryColor: Colors.grey,
    secondaryColor: Colors.grey,

    greyDark: darken(0.1, Colors.grey),
    greyLight: lighten(0.1, Colors.grey),
    greyExtraLight: lighten(0.5, Colors.grey),

    mainTextColor: {
        light: mix(0.4, Colors.black, desaturate(0.7, themeColor)),
        dark: rgb(255, 255, 255)
    },
    lightTextColor: {
        light: rgb(233, 235, 240),
        dark: rgb(255, 255, 255)
    },

    canvasDarkFront: 'rgba(30, 30, 30, 0.85)',
    canvasDarkBack: 'rgba(50, 50, 50, 0.9)',
    canvasLightFront: '#FDFDFD',
    canvasLightBack: 'rgba(76, 76, 76, 0.8)', // #f7f7f9
    transparentColor: 'rgb(0,0,0)',
    transparentColorInv: 'rgb(255,255,255)',

    canvasLightLine: '#e9ebf0',
    canvasDarkLine: '#3D424C',

    textDarkFront: '#4B505C',
    textDarkBack: '#8D9099',
    textLightFront: '#FFFFFF',
    textLightBack: '#C8C8C8',

    customColor: 'rgb(222, 0, 0)',
    customColorDark: 'rgb(222, 0, 0)',

    facebookColor: 'rgb(59, 89, 152)',
    twitterColor: 'rgb(0, 182, 241)',
    googlePlusColor: 'rgb(223, 74, 50)',
    linkedinColor: 'rgb(0, 123, 182)',

    module1Color: '#3395D6',
    module2Color: '#7F54A8',
    module3Color: '#AD4374',
    module4Color: '#CE4846',
    module5Color: '#D87641',
    module6Color: '#F5C42C',
    module7Color: '#8CBA53',
    module8Color: '#26AB5F',
    module9Color: '#12B796',
    module10Color: '#ec87bf',

    redShades: ['198,40,40', '216,67,21', '239,108,0', '255,143,0', '249,168,37'],
    greenShades: ['0,121,107', '56,142,60', '104,159,56', '175,180,43'],
    blueShades: ['48,63,159', '25,118,210', '2,136,209', '0,151,167'],
    purpleShades: ['48,63,159', '25,118,210', '2,136,209', '0,151,167'],

    /**
     * Color functions
     */
    fn: {
        getColor: color => {
            const colorString = `${color}`
            if (colorString.slice(0, 1) === '#' || colorString.slice(0, 3) === 'rgb') {
                return color
            } else {
                return `rgba(${color.length === 3 ? `${color},1` : color})`
            }
        }
    }
}

export default colors
