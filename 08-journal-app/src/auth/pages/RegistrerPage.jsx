import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegistrerPage = () => {
  return (
    <AuthLayout title="Create a new account">
      <form>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Full name"
            type='text'
            placeholder='Alan Vega'
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Emaill"
            type='email'
            placeholder='email@google.com'
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Password"
            type='password'
            fullWidth
          />
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button variant='contained' fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Typography>Already have an account?</Typography>
          <Link component={RouterLink} color='inherit' to='/auth/login' sx={{ml:1}}>
            Sign in
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
