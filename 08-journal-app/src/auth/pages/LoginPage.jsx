import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startLoginEmailPassword, startGoogleSignIn } from '../../store/auth'
import { useDispatch, useSelector } from "react-redux"
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useMemo } from 'react'

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth)
  const isAuthenticating = useMemo(() => status === 'checking')


  const { email, password, onInputChange } = useForm({})

  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(startLoginEmailPassword({ email, password }))
  }

  const onGoogleSignin = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Sign in">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
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
          <Grid item xs={12} sx={{ mt: 2 }} display={!errorMessage ? 'none':''}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 1, mt: 1 }}>
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
