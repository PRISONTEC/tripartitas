import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';
import VentanaDetalles from './ventanaEmergente';
import Audio from './audio';

const RenderDate = (props) => {
  /* console.log("props.row.url",props.row.url) */
 try{  
      if(props.row===variablePlay){
        play=true;
      }
    }catch(e){
  }
  return(
      <>
        <Audio url={props.row.url} reproducir={play} ></Audio>
      </>
  )     
}

var variablePlay="";
var play=""
function variableAudio(params){
    variablePlay=params.id-1;
} 

const columns = [
    { field: 'id', headerName: 'ID', width: 70, type: 'integer' },
    { field: 'codigo', headerName: 'Codigo Azulito', width: 130 },
    { field: 'penitenciaria', headerName: 'Penitenciaria', width: 100 },
    { field: 'fecha', headerName: 'Fecha', type: 'Fecha', width: 100,},
    { field: 'destino', headerName: 'Destino', type: 'string'},
    { field: 'Audio', headerName: 'Audio',width: 400,renderCell: RenderDate,},
];

const rows = [
  { id: 1, codigo: '40914683', penitenciaria: 'Lurigancho', fecha: '02/01/2023', destino: '918773324',
    rating:2, delitosCometidos:["robo","sicariato"], transcripcion:"buenos días hola mami buenos días escúchame mami este sábado dijo que tenía que pasar y ahí le en el cielo tiene la igualito llegó al penal y lo voy a decir ya lo nuevo ya ya",
  url:"http://docs.google.com/uc?export=open&id=1XumlcXG-ltZK6GKSWJQ669a1BC6NGQZO"},
  { id: 2, codigo: '15426726', penitenciaria: 'Castro', fecha: '12/01/2023', destino: '973638234', 
    rating:4,delitosCometidos:["sicariato","estupefacientes"],transcripcion: "ahorita paso eduardo halo kevin algo está fuera mi hermano eduardo ya ya ya ya ya e eduardo escúchame la he pasado había un billete falso no vaya a ser lo mismo porque sabe que es un problema para mí nada halo ya hay nada no sé si md cuenta escúchame que quede primero para que le pases con su hijo dile ahí te va a pasar con tu hijo tatooine",
  url:"http://docs.google.com/uc?export=open&id=1LFDHu5prxrg0Z-EqR7_h1gVqm_ZEuofH"},
  { id: 3, codigo: '74318170', penitenciaria: 'Chimbote', fecha: '23/01/2023', destino: '956345234' , 
    rating:1,delitosCometidos:["trafico","robo"],transcripcion: "Habla, habla, te llamo Óscar. Sí. Y oiga, oiga, Halo. Eureco qué tal, Cholo? Buenos días te llamó oscar. Para arreglar eso, cuántos kilos.¿Sí, pero tú crees que hasta la una estás por ahí para recogerlo? Hasta las dos. Ya, pero sobraba por 1:30 H por ahí llegó ya, luego llamando mi viejo porque lo coordinen ya. Ya, ya ya listo, listo, listo, causa, listo, cuídense",
  url:"http://docs.google.com/uc?export=open&id=1nw0cy3ifi-_KLaqc97IUTPLYvP3-3E_1"},
  { id: 4, codigo: '74176012', penitenciaria: 'Chincha', fecha: '03/01/2023', destino: '976856322' , 
    rating:1,delitosCometidos:["sicariato","trafico"],transcripcion: "llamada penitenciaría chincha para aceptar no cuelgue no no buenos días mi amor buenos días mi amor a las 5 me tienes no mi amor sino que estaba esperando en la cola de la llamada tu cola ay mi amor te amo mucho ayer te puedo llamar sí todo esperando acá para llamar YY ya pues le dije a concretar en 52 ella esté a qué hora tienes ahí alta 53 sí ay acatamiento se pelean hasta por un minuto quieren hablar",
  url:"http://docs.google.com/uc?export=open&id=1V2l3neglxNLQbtqCxgH3Rcm0M1zbywIc"},
]; 


export default function DataTable() {

    const [open, setOpen] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState([0]);
    const [finalClickInfo, setFinalClickInfo] = React.useState(null);
  
    const handleClose = () => {
        setOpen(false);
    };

    // devolvemos la transcripcion
    const getTranscription = (position) => {
      try{
        return rows[position].transcripcion;

      } catch(e){
        console.log("error: ", e);
        return ""
      }
    }

    // devolvemos el rating de la fila seleccionada
    const getRating = (position) => {
      try{
        return rows[position].rating;

      } catch(e){
        console.log("error: ", e);
        return 0
      }
    }

    // actulizamos el rating de la fila seleccionada
    const setRating = (position,rating) => {
      try{
        rows[position].rating=rating 
      } catch(e) {
        console.log("error: ", e);
      }      
    }

    // obtenemos el delito de la fila seleccionada
    const getCrime = (position) => {
      try{
        return rows[position].delitosCometidos;

      } catch(e){
        console.log("error: ", e);
        return []
      }
    }

    // actulizamos el delito de la fila seleccionada
    const setCrime = (position,crimes) => {
      try{
        rows[position].delitosCometidos = crimes 
      } catch(e) {
        console.log("error: ", e);
      }      
    }

    const handleOnCellClick = (params) => {
      if(params.field==="Audio"){
        setOpen(false)
        setFinalClickInfo(params.field)
        
      }else{
          setOpen(true)
          setFinalClickInfo(params)
          setSelectedId(params.id-1);
      }
        variableAudio(params)
      };

    return (
      <>
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{pt:"150px"}}>

            <Box sx={{width:900, height:450}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pfechaSize={5}
                    rowsPerPfechaOptions={[5]}
                    rowHeight={77}
                    container={false}
                    onCellClick={(newSelectionModel)=>handleOnCellClick(newSelectionModel)}
                     /* onSelectionModelChange={(newSelectionModel) => {
                            openVentanaEmergente(newSelectionModel)
                        } 
                    } */
                />

            <VentanaDetalles
                open={open}
                onClose={handleClose}
                rows={rows}
                selectedId={selectedId}
                getRating={getRating}
                setRating={setRating}
                getTranscription={getTranscription}
                getCrime={getCrime}
                setCrime={setCrime}
            />
            </Box>
        </Stack>       
        </>
    );
}