import { useEffect, useMemo } from "react";
import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "./"
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';
import { useForm } from "../../hooks/UseForm";
import { useDispatch, useSelector } from "react-redux";
import { setActivateNote, startSaveNote } from "../../store/journal";

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])

    useEffect(() => {
        dispatch(setActivateNote(formState))
    }, [formState]);

    useEffect(() => {
        if (messageSaved)
            Swal.fire('Nota Actualizada', messageSaved, 'success')
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    return (
        <Grid
            container direction='row'
            justifyContent='space-between'
            alignItems='center' sx={{ mb: 1 }}
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid>
                <Button
                    disabled={isSaving}
                    onClick={onSaveNote}
                >
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
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happens today?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <ImageGallery />
        </Grid>
    )
}
