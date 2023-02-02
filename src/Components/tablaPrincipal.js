import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { DataGrid } from '@mui/x-data-grid';
import VentanaDetalles from './ventanaEmergente';

const columns = [
    { field: 'id', headerName: 'ID', width: 70, type: 'integer' },
    { field: 'codigo', headerName: 'Codigo Azulito', width: 130 },
    { field: 'penitenciaria', headerName: 'Penitenciaria', width: 100 },
    { field: 'fecha', headerName: 'Fecha', type: 'Fecha', width: 100,},
    { field: 'destino', headerName: 'Destino', type: 'string'},
    { field: 'Audio', headerName: 'Audio'},
];

const rows = [
    { id: 1, codigo: '812312332', penitenciaria: 'Lurigancho', fecha: '02/01/2023', destino: '918773324' },
    { id: 2, codigo: '238912381', penitenciaria: 'Castro', fecha: '12/01/2023', destino: '973638234' },
    { id: 3, codigo: '894012323', penitenciaria: 'Chincha', fecha: '23/01/2023', destino: '956345234' },
    { id: 4, codigo: '239023820', penitenciaria: 'Huacho', fecha: '03/01/2023', destino: '976856322' },
    { id: 5, codigo: '832920747', penitenciaria: 'Huaral', fecha: '04/01/2023', destino: '991883443' },
    { id: 6, codigo: '020873289', penitenciaria: 'Huaraz', fecha: '20/01/2023', destino: '990786533' },
    { id: 7, codigo: '976820234', penitenciaria: 'Ancon', fecha: '07/01/2023', destino: '987654321' },
    { id: 8, codigo: '082649203', penitenciaria: 'Ica', fecha: '28/01/2023', destino: '990077662' },
    { id: 9, codigo: '763739228', penitenciaria: 'Chincha', fecha: '31/01/2023', destino: '985467231' },
  ];



export default function DataTable() {

    const [open, setOpen] = React.useState(false);
  
    const handleClose = () => {
        setOpen(false);
    };

    const openVentanaEmergente = (props) => {
        setOpen(true);
    }

    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{pt:"150px"}}>

            <Box sx={{width:600, height:400}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pfechaSize={5}
                    rowsPerPfechaOptions={[5]}
                    onSelectionModelChange={(newSelectionModel) => {
                            openVentanaEmergente(newSelectionModel)
                        }
                    }
                />

            <VentanaDetalles
                open={open}
                onClose={handleClose}
            />
            </Box>
        </Stack>
        
    );
}