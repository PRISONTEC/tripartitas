import { ThemeProvider,makeStyles  } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { createTheme } from '@material-ui/core/styles';
import pink from "@material-ui/core/colors/pink";
import deepPurple from "@material-ui/core/colors/deepPurple";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.down('lg')]: {
        width: '114%',
      },
    },
    loopIcon: {
      color: '#070708',
      display: 'flex',
      '&.selected': {
        color: '#070708',
      },
      '&:hover': {
        color: '#7986cb',
      },
      [theme.breakpoints.down('lg')]: {
        display: 'flex',
      },
    },
    playIcon: {
      color: '#070708',
      width: '90%',
      '&:hover': {
        color: '#070708',
      },
    },
    replayIcon: {
      color: '#e6e600',
    },
    pauseIcon: {
      color: '#0099ff',
    },
    volumeIcon: {
      width: '40%',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    volumeSlider: {
      width: '10%',
      color: 'black',
    },
    progressTime: {
      width: '10%',
      color: '#070708',
    },
    mainSlider: {
      color: '#070708',
      '& .MuiSlider-rail': {
        color: '#070708',
      },
      '& .MuiSlider-track': {
        color: '#070708',
      },
      '& .MuiSlider-thumb': {
        color: '#070708',
      },
    },
  };
}); 
/* const theme = createTheme({
  palette: {
      type: 'light',
      primary: deepPurple,
      secondary: pink
  }
}); */

function Audio(props){
    /* console.log("url",props.url); */
    /* var src = [
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.wav',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.wav'
      ]; */
    
    return(
<ThemeProvider /* theme={theme} */>
 
        <AudioPlayer
          useStyles={useStyles} 
          elevation={1}
          /* width="250%" */
          spacing={1}
          timePosition={'start'}
          download={false}  
          autoplay={props.reproducir}
          order="standart" 
          preload="auto" 
          volume={false}
          displaySlider={true} 
          /* loop={true} */
          src={props.url}
        />

</ThemeProvider>
)
}

export default Audio;



