import * as React from 'react';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

export default function VentanaDelitos(props) {
    const { onClose, open } = props;
    const [ onCloseDelitos, setOpenDelitos ] = React.useState(false);

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle sx={{ color: 'blue', textAlign: 'center' }}>
                Delitos Tipificados
            </DialogTitle>
            <DialogContent dividers>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <FormControlLabel
                    control={
                        <Checkbox />
                    }
                    label="Robo"
                />
                <FormControlLabel
                    control={
                        <Checkbox />
                    }
                    label="Sicariato"
                />
                <FormControlLabel
                    control={
                        <Checkbox />
                    }
                    label="Trafico de Personas"
                />
                <FormControlLabel
                    control={
                        <Checkbox />
                    }
                    label="Estupefacientes"
                />
                </Box>
            </DialogContent>
        </Dialog>
    )
}