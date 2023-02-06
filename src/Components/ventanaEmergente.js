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
    const { 
        onClose, 
        open, 
        rows, 
        selectedId, 
        getRating, 
        setRating, 
        getTranscription,
        getCrime,
        setCrime
    } = props;
    const [ openDelitos, setOpenDelitos ] = React.useState(false);
    const [rating, setRatingChild] = React.useState(getRating(selectedId));

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
        setRatingChild(rating)
        setRating(selectedId,rating)
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
                        {getTranscription(selectedId)}
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
                            value={getRating(selectedId)}
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
                rows={rows}
                selectedId={selectedId}
                getCrime={getCrime}
                setCrime={setCrime}
            />
        </>
    );
}