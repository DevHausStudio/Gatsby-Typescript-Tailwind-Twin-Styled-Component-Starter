import React from 'react'
import { ThemeProvider } from 'styled-components'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './../../tailwind.config.js'

const { theme } = resolveConfig(tailwindConfig)

const Theme = props => <ThemeProvider {...props} {...{ theme }} />

export default Theme
