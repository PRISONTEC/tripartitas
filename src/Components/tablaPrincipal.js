import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { DataGrid } from '@mui/x-data-grid';
import VentanaDetalles from './ventanaEmergente';

//const delitos={1:"robo",2:"sicariato",3:"trafico",4:"estupefacientes"}

const columns = [
    { field: 'id', headerName: 'ID', width: 70, type: 'integer' },
    { field: 'codigo', headerName: 'Codigo Azulito', width: 130 },
    { field: 'penitenciaria', headerName: 'Penitenciaria', width: 100 },
    { field: 'fecha', headerName: 'Fecha', type: 'Fecha', width: 100,},
    { field: 'destino', headerName: 'Destino', type: 'string'},
    { field: 'Audio', headerName: 'Audio'},
];

const rows = [
    { id: 1, codigo: '40914683', penitenciaria: 'Lurigancho', fecha: '02/01/2023', destino: '918773324',
      rating:2, delitosCometidos:["robo","sicariato"], transcripcion:"buenos días hola mami buenos días escúchame mami este sábado dijo que tenía que pasar y ahí le en el cielo tiene la igualito llegó al penal y lo voy a decir ya lo nuevo ya ya" },
    { id: 2, codigo: '15426726', penitenciaria: 'Castro', fecha: '12/01/2023', destino: '973638234', 
      rating:4,delitosCometidos:["sicariato","estupefacientes"],transcripcion: "ahorita paso eduardo halo kevin algo está fuera mi hermano eduardo ya ya ya ya ya e eduardo escúchame la he pasado había un billete falso no vaya a ser lo mismo porque sabe que es un problema para mí nada halo ya hay nada no sé si md cuenta escúchame que quede primero para que le pases con su hijo dile ahí te va a pasar con tu hijo tatooine"},
    { id: 3, codigo: '74318170', penitenciaria: 'Chimbote', fecha: '23/01/2023', destino: '956345234' , 
      rating:1,delitosCometidos:["trafico","robo"],transcripcion: "Habla, habla, te llamo Óscar. Sí. Y oiga, oiga, Halo. Eureco qué tal, Cholo? Buenos días te llamó oscar. Para arreglar eso, cuántos kilos.¿Sí, pero tú crees que hasta la una estás por ahí para recogerlo? Hasta las dos. Ya, pero sobraba por 1:30 H por ahí llegó ya, luego llamando mi viejo porque lo coordinen ya. Ya, ya ya listo, listo, listo, causa, listo, cuídense"},
    { id: 4, codigo: '74176012', penitenciaria: 'Chincha', fecha: '03/01/2023', destino: '976856322' , 
      rating:1,delitosCometidos:["sicariato","trafico"],transcripcion: "llamada penitenciaría chincha para aceptar no cuelgue no no buenos días mi amor buenos días mi amor a las 5 me tienes no mi amor sino que estaba esperando en la cola de la llamada tu cola ay mi amor te amo mucho ayer te puedo llamar sí todo esperando acá para llamar YY ya pues le dije a concretar en 52 ella esté a qué hora tienes ahí alta 53 sí ay acatamiento se pelean hasta por un minuto quieren hablar"},
   /* { id: 5, codigo: '832920747', penitenciaria: 'Huaral', fecha: '04/01/2023', destino: '991883443' , 
      rating:2,delitosCometidos:[2,1],transcripcion: "dfgd"},
    { id: 6, codigo: '020873289', penitenciaria: 'Huaraz', fecha: '20/01/2023', destino: '990786533' , 
      rating:4,delitosCometidos:[2,3],transcripcion: "dfgd"},
    { id: 7, codigo: '976820234', penitenciaria: 'Ancon', fecha: '07/01/2023', destino: '987654321' , 
      rating:3,delitosCometidos:[4,1],transcripcion: "dfgd"},
    { id: 8, codigo: '082649203', penitenciaria: 'Ica', fecha: '28/01/2023', destino: '990077662' , 
      rating:2,delitosCometidos:[2,3],transcripcion: "dfg"},
    { id: 9, codigo: '763739228', penitenciaria: 'Chincha', fecha: '31/01/2023', destino: '985467231' , 
      rating:5,delitosCometidos:[2,1,4],transcripcion: "dfgdf"},*/
  ];



export default function DataTable() {

    const [open, setOpen] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState([0]);
  
    const handleClose = () => {
        setOpen(false);
    };

    const openVentanaEmergente = (props) => {
        setSelectedId(props-1);
        console.log("selectedId: ",selectedId);

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
                rows={rows}
                selectedId={selectedId}
            />
            </Box>
        </Stack>
        
    );
}