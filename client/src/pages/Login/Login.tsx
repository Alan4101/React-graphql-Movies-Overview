import { FC } from 'react'
// import { FormControlLabel } from '@material-ui/core'
import { Avatar, Box, Container, CssBaseline, Grid, Link, TextField, Typography, Button } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { useSignIn } from '../../graphql'
import { useFormik } from 'formik'

export const Login: FC = () => {
  const { signIn } = useSignIn()

  const signInFormik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    enableReinitialize: true,
    onSubmit: values => {
      login(values)
    }
  })
  const { values, handleSubmit, handleChange } = signInFormik

  const login = (values: unknown) => {
    if (values instanceof Object && 'email' in values && 'password' in values) {
      signIn({
        variables: {
          input: {
            email: values.email as string,
            password: values.password as string
          }
        }
      })
    }
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
          />
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
