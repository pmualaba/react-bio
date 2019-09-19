# Storybook

## Setup

- npm i -g @storybook/cli
- sb init --type react
- edit .storybook/.babelrc 
	{
        "presets": ["@babel/preset-react"],
        "plugins": ["babel-plugin-styled-components"]
    }
- npm i --save-dev @babel/preset-react babel-plugin-styled-components
- rename stories to .stories and edit .storybook/config.js 
	require.context('../.stories', true, /\.stories\.js$/)  
- yarn add -D @storybook/addon-knobs	
- yarn storybook
- use On your network:  http://192.168.86.47:6006/ link

