import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const AuthLayout = ({ children, title }) => {
    return (
        <Grid container
            spacing={0}
            direction={"column"}
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid item
                className='box-shadow'
                xs={3}
                sx={{
                    width: {xs:450},
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadiu: 2
                }}>
                <Typography variant='h5' mb={1}>{title}</Typography>
                {children}
            </Grid>
        </Grid>
    )
}