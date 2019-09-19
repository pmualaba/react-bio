/* eslint-disable max-len */
import React from 'react'
import Head from 'next/head'

const HtmlHead = props => (
    <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/theme/app/favicon.ico" />
        <title>TEST</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,600|Muli:100,300,400,700" rel="stylesheet" />
        <script src="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyC8IjruprOw1sFe5ioWqbH5BzPMftaMoQ0" />
    </Head>
)

export default HtmlHead
