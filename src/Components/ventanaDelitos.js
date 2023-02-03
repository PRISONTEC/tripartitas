import * as React from 'react';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function VentanaDelitos(props) {
    const { onClose, open, rows, selectedId} = props;
    const isChecked = (value) => {
        var index = (rows[selectedId].delitosCometidos).indexOf(value)
        if(index < 0){
            return false;
        } else {
            return true;
        }
    };
    const [robo, setRobo] = React.useState(isChecked("robo"));
    const [sicariato, setSicariato] = React.useState(isChecked("sicariato"));
    const [trafico, setTrafico] = React.useState(isChecked("trafico"));
    const [estupefacientes, setEstupefacientes] = React.useState(isChecked("estupefacientes"));

    const handleClose = () => {
        onClose();
    };
    
    const actualizarDelito = (value) =>{
        if(value==="sicariato"){
            setSicariato(!sicariato);
        } else if (value==="robo"){
            setRobo(!robo);
        } else if (value==="trafico"){
            setTrafico(!trafico);
        } else if (value==="estupefacientes"){
            setEstupefacientes(!estupefacientes)
        }
        var index = (rows[selectedId].delitosCometidos).indexOf(value)
        if(index < 0){
            rows[selectedId].delitosCometidos.push(value)
        } else {
            delete(rows[selectedId].delitosCometidos[index])
        }
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
                        <Checkbox checked={isChecked("robo")} onChange={()=>actualizarDelito("robo")}/>
                    }
                    label="Robo"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={isChecked("sicariato")} onChange={()=>actualizarDelito("sicariato")}/>
                    }
                    label="Sicariato"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={isChecked("trafico")} onChange={()=>actualizarDelito("trafico")}/>
                    }
                    label="Trafico de Personas"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={isChecked("estupefacientes")} onChange={()=>actualizarDelito("estupefacientes")}/>
                    }
                    label="Estupefacientes"
                />
                </Box>
            </DialogContent>
        </Dialog>
    )
}