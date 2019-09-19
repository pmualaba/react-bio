import {createContext} from 'react'

const CTXcreateGlobal = createContext({})

export const CTXprovideGlobal = CTXcreateGlobal.Provider
export const CTXconsumeGlobal = CTXcreateGlobal.Consumer
