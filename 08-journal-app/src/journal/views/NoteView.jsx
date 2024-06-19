import { useEffect, useMemo, useRef } from "react";
import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, IconButton } from "@mui/material"
import { ImageGallery } from "./"
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';
import { useForm } from "../../hooks/UseForm";
import { useDispatch, useSelector } from "react-redux";
import { setActivateNote, startSaveNote, startUploadingFiles } from "../../store/journal";

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    //console.log('note active: '+JSON.stringify(note.imageUrls));

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    const fileInputRef = useRef();

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

    const onFileInputChange = ({ target }) => {
        if (!target) return;
        dispatch(startUploadingFiles(target.files))
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
            <Grid item>
                <input
                    type="file"
                    multiple onChange={onFileInputChange}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                />
                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined></UploadOutlined>
                </IconButton>
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

            <ImageGallery images={note.imageUrls} />
        </Grid>
    )
}
