import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "./"


export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>Agoust 2024</Typography>
            </Grid>
            <Grid>
                <Button>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}></SaveOutlined>
                    Save
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Input a title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happens today?"
                    minRows={5}
                />
            </Grid>

            <ImageGallery/>
        </Grid>
    )
}