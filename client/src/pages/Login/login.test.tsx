import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client';

import { Login } from './Login'
import client from './../../apolloClient';

describe('Login component', () => {
  test('should render Login component correctly', () => {
    render(
      <ApolloProvider client={client}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </ApolloProvider>
      
    )

    const container = screen.getByTestId('loginContainer')

    expect(container).toBeInTheDocument()
  })
})
