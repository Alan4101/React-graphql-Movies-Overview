import { FC, useEffect, useState } from 'react'
import { Avatar, Box, Container, CssBaseline, Grid, Link, TextField, Typography, Button } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { useSignIn } from '../../graphql'
import { useFormik } from 'formik'
import { validationSchema } from './helper';

export const Login: FC = () => {
  const { signIn, authError } = useSignIn()
  const [loginErrors, setLoginErros] = useState({})

  const signInFormik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: values => {
      login(values)
    }
  })
  const { values, errors, handleSubmit, handleChange } = signInFormik

  useEffect(() => {
    if (authError) {
      setLoginErros({ ...loginErrors, authError })
    }
  }, [authError])

  const login = (data: typeof values) => {
    signIn({
      variables: {
        input: {
          email: data.email,
          password: data.password
        }
      }
    })
  }

  return (
    <Container component='main' maxWidth='xs' data-testid='loginContainer'>
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
          Sign in
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            value={values.email}
            autoComplete='email'
            autoFocus
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            value={values.password}
            id='password'
            autoComplete='current-password'
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          {authError && (
            <Grid container>
              <Typography color='error'>{authError.message}</Typography>
            </Grid>
          )}
          {/* <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' /> */}
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='/sign-up' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
