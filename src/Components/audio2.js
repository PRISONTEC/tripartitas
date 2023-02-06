import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import pink from "@material-ui/core/colors/pink";
import deepPurple from "@material-ui/core/colors/deepPurple";
 
//import createTheme from "@material-ui/core/styles/createMuiTheme";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createTheme } from '@material-ui/core/styles';
 
import { AudioPlayer } from 'mui-audio-player';
 
const theme = createTheme({
    palette: {
        type: 'light',
        primary: deepPurple,
        secondary: pink
    }
});
 
function Audio(props){
        return (
            <ThemeProvider theme={theme}>
                <Grid justify="left" alignContent="left" alignItems="center" container style={{ height: "50vh", backgroundColor: deepPurple["10"] }}>
                    <Grid md={1} item />
                    <Grid md={4} item>
                        <AudioPlayer 
                            src={props.url}
                            autoPlay={false}
                            rounded={false}
                            elevation={1}
                            width="250%"
                            displaySlider={false}
                            volume={true}
                            
                        />
                    </Grid>
                    <Grid md={4} item />
                </Grid>
            </ThemeProvider>
        );
}

export default Audio;