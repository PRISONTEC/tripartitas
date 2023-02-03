import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import VentanaDelitos from './ventanaDelitos'

export default function VentanaDetalles(props) {
    const { onClose, open, rows, selectedId} = props;
    const [ openDelitos, setOpenDelitos ] = React.useState(false);
    const [rating, setRating] = React.useState(rows[selectedId].rating);
    const handleClose = () => {
        onClose();
    };

    const handleCloseVentanaDelitos = () => {
        setOpenDelitos(false)
    };

    const openVentanaDelitos = () => {
        setOpenDelitos(true)
    } 
    const actualizarRating = (rating) => {
        setRating(rating)
        rows[selectedId].rating = rating
    }   
    
    return (
        <>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle sx={{ color: 'blue', textAlign: 'center' }}>
                    Notas - Resultados
                </DialogTitle>
                
                <DialogContent dividers>
                    <Typography  sx={{fontWeight: 'bold'}} align="left" color="purple"> 
                        Transcripción 
                    </Typography>
                    <Box sx={{ margin: 1, boxShadow: 1, borderRadius: 2, p: 2, }}>
                        {rows[selectedId].transcripcion}
                    </Box>
                    <Box sx={{boxShadow:2, margin: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Typography  sx={{fontWeight: 'bold'}} align="left" color="purple"> 
                            Tags
                        </Typography>
                        <Button onClick={() => {openVentanaDelitos()}}>
                            Delitos
                        </Button>
                    </Box>  
                    <Box sx={{boxShadow:2, margin: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Typography  sx={{fontWeight: 'bold'}} align="left" color="purple"> 
                            Palabras Claves
                        </Typography>
                        <Button >
                            Mostrar
                        </Button>
                    </Box>  
                    <Box sx={{boxShadow:2, margin: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Typography  sx={{fontWeight: 'bold'}} align="left" color="purple"> 
                            Calificaciones
                        </Typography>
                        <Rating
                            name="simple-controlled"
                            value={rows[selectedId].rating}
                            onChange={(event, newValue) => {
                                actualizarRating(newValue);
                            }}
                        />
                    </Box>  
                </DialogContent>
            </Dialog>

            <VentanaDelitos 
                open={openDelitos}
                onClose={handleCloseVentanaDelitos}
                delitos={rows[selectedId].delitosCometidos}
                rows={rows}
                selectedId={selectedId}
            />
        </>
    );
}