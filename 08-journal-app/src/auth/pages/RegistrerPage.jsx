import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: 'alanvega@gmail.com',
  password: '123456',
  displayName: 'Alan Vega'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'Password without @'],
  password: [(value) => value.length >= 6, 'The password must have more than 6 characters'],
  displayName: [(value) => value.length >= 1, 'Type your name']
}

export const RegistrerPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const { displayName, email, password, onInputChange, formState,
    displayNameValid, emailValid, passwordValid, isFormValid } = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault()
    setformSubmitted(true)
    if (!isFormValid) return
    dispatch(startCreatingUserWithEmailPassword(formData));
  }

  return (
    <AuthLayout title="Create a new account">
      <form onSubmit={onSubmit}>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Full name"
            type='text'
            placeholder='Alan Vega'
            fullWidth
            name='displayName'
            value={displayName}
            onChange={onInputChange}
            error={!!displayNameValid && formSubmitted}
            helperText={displayNameValid}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Emaill"
            type='email'
            placeholder='email@google.com'
            fullWidth
            name='email'
            value={email}
            onChange={onInputChange}
            error={!!emailValid && formSubmitted}
            helperText={emailValid}
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
            error={!!passwordValid && formSubmitted}
            helperText={passwordValid}
          />
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid
              item
              xs={12}
              sm={12}
              display={!errorMessage ? 'none' : ''}
            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                variant='contained'
                fullWidth type='submit'
                disabled={isCheckingAuthentication}
              >
                Create account
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Typography>Already have an account?</Typography>
          <Link component={RouterLink} color='inherit' to='/auth/login' sx={{ ml: 1 }}>
            Sign in
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
