import '../assets/css/nucleo-svg.css'
import '../assets/css/nucleo-icons.css'
import '../assets/css/material-kit.css'
import '../assets/css/material-icon.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'


const Input = ({type, handleRequestChange}) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [request, setRequest] = useState('');

  const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile ? selectedFile.name : '');
  };

  const handleInputRequestChange = (event) => {
    const newRequest = event.target.value;
    setRequest(newRequest);
    handleRequestChange(newRequest);
  }

    if (type === "TEXT"){
      return <TextField
        id="outlined-basic"
        label="Your Text"
        variant="outlined"
        multiline
        minRows={1}
        maxRows={9}  
        fullWidth
        value={request}
        onChange={handleInputRequestChange}
        sx={{
          maxHeight: '500px',  // Set a maximum height for the TextField
          overflowY: 'auto',  // Enable vertical scrollbar when content exceeds maxHeight
          marginTop: '16px'
        }}
    />
    }else if(type === "FILE"){
        return (
          <>
            <input
                type="file"
                id="fileInput"
                accept="application/pdf"
                onChange={handleFileChange}
                style={{ display: 'none', textAlign:  'mid' }}
            />
              <label htmlFor="fileInput">
                    <Button variant="contained" component="span">
                        Choose PDF File
                    </Button>
                </label>
                {fileName && (
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Selected file: {fileName}
                    </Typography>
                )}
          
          </>
        );  
    }
}

export default Input;

