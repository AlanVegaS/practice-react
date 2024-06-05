import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActivateNote } from '../../store/journal';

export const SideBarItem = ({ title, body, id, date, imageUrls }) => {

    const newTitlee = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [title]);

    const dispatch = useDispatch();

    const onClickNote = (event) => {
        dispatch(setActivateNote({ title, body, id, date, imageUrls }))
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitlee} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
