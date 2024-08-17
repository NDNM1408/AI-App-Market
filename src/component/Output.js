import '../assets/css/nucleo-svg.css'
import '../assets/css/nucleo-icons.css'
import '../assets/css/material-kit.css'
import '../assets/css/material-icon.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Card } from '@mui/material'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import CardMedia from '@mui/material/CardMedia';




const Output = ({type, content}) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [audioSource, setAudioSource] = React.useState('/home/minh/My project/AgentAI/UI/output.wav');

  const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile ? selectedFile.name : '');
  };
  const theme = useTheme();

    if (type === "TEXT"){
      return(
        <>
        <Divider sx={{ my: 2, borderBottomWidth: 2 }} />
        <h4 class="mb-0">Result</h4>
      <Box
        sx={{
          width: '100%',
          maxHeight: '200px', 
          overflowY: 'auto',
          border: '1px solid #ccc',
          padding: '8px',
          borderRadius: '4px',
          backgroundColor: '#f9f9f9',
          marginTop: '16px'
        }}
      >
        <Typography variant="body1" component="div">
          {content}
        </Typography>
      </Box>
      </>
      )
    }else if(type === "AUDIO"){
        return (
          <>
            <Divider sx={{ my: 2, borderBottomWidth: 2 }} />
            <h4 class="mb-0">Result</h4>
            <audio controls>
                <source src="/output.wav" type="audio/wav"></source>
            </audio>
            </>
        );  
    }
}

export default Output;

