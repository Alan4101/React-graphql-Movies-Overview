import React, { FC } from 'react'

import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useSignUp } from '../../graphql'

export const SignUp: FC = () => {
  const { signUp, data } = useSignUp()

  console.log(data)

  const signUpFormik = useFormik({
    initialValues: {
      age: 0,
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      picture: ' '
    },
    enableReinitialize: true,
    onSubmit: values => {
      handleSignUp(values)
    }
  })
  const { values, handleSubmit, handleChange } = signUpFormik
  console.log(values)

  const handleSignUp = (data: typeof values) => {
    signUp({
      variables: {
        input: { ...data }
      }
    })
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
                value={values.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='family-name'
                value={values.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                onChange={handleChange}
                id='email'
                label='Email Address'
                name='email'
                value={values.email}
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField required onChange={handleChange} fullWidth id='age' label='Age' name='age' type='number' />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField required fullWidth name='picture' type='file' />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                value={values.password}
                autoComplete='new-password'
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='/sign-in' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
