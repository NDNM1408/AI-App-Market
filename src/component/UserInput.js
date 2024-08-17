import '../assets/css/nucleo-svg.css'
import '../assets/css/nucleo-icons.css'
import '../assets/css/material-kit.css'
import '../assets/css/material-icon.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Input from './Input'
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { IconButton } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const UserInput = ({handleUserInputChange}) => {
    const [open, setOpen] = React.useState(false);
    const [stepType, setStepType] = React.useState(null); // State to track which button was clicked

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleBack = () => setStepType(null);

    const handleButtonClick = (type) => {
        setStepType(type);
        handleUserInputChange(type)
        setOpen(false);
    }
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
  
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setFileName(selectedFile ? selectedFile.name : '');
    };





    return (
        <>
           {!stepType && (
                <div class="mb-4 p-4 bg-purple-50 rounded-lg shadow text-center">
                    <div class="flex flex-col items-center">
                        <div class="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-2">
                            <span class="text-purple-600 font-bold text-xl">📝</span>
                        </div>
                        <h3 class="text-lg font-semibold text-purple-800 mb-1">User Inputs</h3>
                        <p class="text-gray-700 mb-2">Define what information the user should provide this tool</p>
                        <div class="row text-center py-1 mt-2">
                            <div class="col-12 mx-auto">
                                <button type="button" class="btn bg-gradient-primary btn-sm" onClick={handleOpen}>+ Add Input</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, width: '80%', maxWidth: '800px', height: 'auto', p: 4 }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Choose your input type
                    </Typography>

                    <Divider sx={{ my: 2, borderBottomWidth: 2 }} />
                    <div className="Button" style={{ marginTop: '16px'}}>
                        <Button
                            variant="contained"
                            class="btn btn-outline-primary mb-0"
                            style={{ marginRight: '8px' }}
                            onClick={() => handleButtonClick('Text')}
                        >
                            Text
                        </Button>

                        <Button
                            variant="contained"
                            class="btn btn-outline-primary mb-0"
                            style={{ marginLeft: '8px' }}
                            onClick={() => handleButtonClick('File')}
                        >
                            PDF File
                        </Button>

                        <Button
                            variant="contained"
                            class="btn btn-outline-primary mb-0"
                            style={{ marginLeft: '8px' }}
                            onClick={() => handleButtonClick('File')}
                        >
                            Audio
                        </Button>

                        <Button
                            variant="contained"
                            class="btn btn-outline-primary mb-0"
                            style={{ marginLeft: '8px' }}
                            onClick={() => handleButtonClick('File')}
                        >
                            Image
                        </Button>
                    </div>

                </Box>
            </Modal>

                {stepType === 'File' && (
                <div class="p-4 bg-purple-50 rounded-lg shadow mt-4" style={{position: 'relative'}}>
                    <IconButton onClick={handleBack} style={{ 
                            position: 'absolute', 
                            top: '0', 
                            left: '0',  
                            margin: '16px' 
                        }} class="btn btn-primary w-auto me-1 mb-0">
                        BACK
                    </IconButton>
                    <h4 class="text-lg font-semibold text-purple-800 mb-2">Upload Your Test File</h4>
                    <input
                    type="file"
                    id="fileInput"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    style={{ display: 'none', textAlign:  'mid' }}
                    />
                    <label htmlFor="fileInput">
                        <Button variant="contained" component="span" class="btn btn-outline-primary mb-0">
                            Choose PDF File
                        </Button>
                    </label>
                    {fileName && (
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            Selected file: {fileName}
                        </Typography>
                    )}
                </div>
            )}

            {stepType === 'Text' && (
                <div class="p-4 bg-purple-50 rounded-lg shadow mt-4" style={{position: 'relative'}}>
                    <h4 class="text-lg font-semibold text-purple-800 mb-2">Enter Your Test Value</h4>
                    <IconButton onClick={handleBack} style={{ 
                            position: 'absolute', 
                            top: '0', 
                            left: '0', 
                            margin: '16px' 
                        }} class="btn btn-primary w-auto me-1 mb-0">
                        BACK
                    </IconButton>
                    <TextField
                        label="Your Text"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    {/* Add more fields as needed */}
                </div>
            )}
        </>
    );
}

export default UserInput;