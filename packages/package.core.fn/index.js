import {ERR_JOI} from './errors'
import API from './api'
import render, {CSSvariables, getGoogleFonts} from './theme'
import {storeEquality, objectify, getDepthOfTree} from './data'
import {keyCodes} from './utils'
import {blocks, elements} from './hooks'

export const api = {
    API
}

export const data = {
    storeEquality,
    objectify,
    getDepthOfTree
}

export const hooks = {
    blocks,
    elements
}

export const theme = {
    render,
    CSSvariables,
    getGoogleFonts
}

export const errors = {
    ERR_JOI
}

export const utils = {
    keyCodes
}
