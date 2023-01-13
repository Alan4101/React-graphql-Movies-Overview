import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from '../src/services/context/AuthContext'

import App from './App'
import client from './apolloClient'
import reportWebVitals from './reportWebVitals'

import './i18n/i18n'

const container = document.getElementById('app')
const root = createRoot(container as HTMLElement)

root.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </AuthProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
