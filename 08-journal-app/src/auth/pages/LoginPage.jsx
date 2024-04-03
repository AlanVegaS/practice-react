import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthenticate, startGoogleSignIn } from '../../store/auth'
import { useDispatch, useSelector } from "react-redux"
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useMemo } from 'react'

export const LoginPage = () => {

  const { status } = useSelector(state => state.auth)
  const isAuthenticating = useMemo(() => status === 'checking')

  const { email, password, onInputChange } = useForm({
    email: 'alan.vega@outlook.es',
    password: '123456'
  })

  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault()
    console.log({ email, password });
    dispatch(checkingAuthenticate())
  }

  const onGoogleSignin = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Sign in">
      <form onSubmit={onSubmit}>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Emaill"
            type='email'
            placeholder='email@google.com'
            fullWidth
            name='email'
            value={email}
            onChange={onInputChange}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Password"
            type='password'
            fullWidth
            name='password'
            value={password}
            onChange={onInputChange}
          />
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
                disabled={isAuthenticating}
              >
                Sign in
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignin}
                variant='contained'
                fullWidth
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Link component={RouterLink} color='inherit' to='/auth/registrer'>
            Create a new account
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
