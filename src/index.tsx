import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import { translate } from 'react-i18next'
import { App } from './components/app'
import i18n from './i18n'

// Inject global CSS
injectGlobal`
  html, body, #index {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`

// Setup i18next
translate.setI18n(i18n)

// Change language (en, de, ro)
// i18n.changeLanguage('en')

// Render root component
// Date format: DD-MM-YYYY
ReactDOM.render(<App date="23-11-2018" />, document.getElementById('index'))
