import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedViews = () => {
    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: 'calc(100vh - 115px)', backgroundColor: 'primary.main', borderRadius: 3 }}
        >
            <Grid item xs={12}>
                <StarOutline sx={{ fontSize: 50, color: 'gray' }} />
            </Grid>
            <Grid item xs={12}>
                <Typography color='gray' variant='h5'>Select or create an entry</Typography>
            </Grid>
        </Grid>
    )
}
