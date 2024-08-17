import '../assets/css/nucleo-svg.css'
import '../assets/css/nucleo-icons.css'
import '../assets/css/material-kit.css'
import '../assets/css/material-icon.css'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Input from './Input'
import { Button, Slider, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';


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

const StepInput = ({handleStepInputChange}) => {
    const [open, setOpen] = React.useState(false);
    const [prompt, setPrompt] = React.useState('')
    const [stepType, setStepType] = React.useState(null); // State to track which button was clicked
    const [model, setModel] = React.useState('');
    const [step, setStep] = useState({});


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleButtonClick = (type) => {
        setStepType(type); // Update the stepType state if necessary
        setOpen(false); // Assuming you want to close something
    };
    const handleStepChange = () => {
        const newStep = {}
        if (stepType === "LLM") {
            newStep.type = "LLM";
            newStep.input = "TEXT";
            newStep.output = "TEXT";
            newStep.name = model;
            newStep.metadata = {};
            newStep.metadata.prompt = prompt;
        }
        setStep(newStep)
        handleStepInputChange(newStep)
    }

    const handleSelectModel = (event) => {
        setModel(event.target.value);
        handleStepChange();
    }
    const handlePrompt = (event) => {
        setPrompt(event.target.value);
        handleStepChange();
    }
    return (
        <>
        {!stepType && (
                    <div class="p-4 bg-green-50 rounded-lg shadow text-center">
                        <div class="flex flex-col items-center">
                            <div class="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-2">
                                <span class="text-green-600 font-bold text-xl">🔧</span>
                            </div>
                            <h3 class="text-lg font-semibold text-green-800 mb-1">Tool Steps</h3>
                            <p class="text-gray-700 mb-2">Chain together LLM prompts, call APIs and more</p>
                            <div class="row text-center py-1 mt-2">
                                <div class="col-12 mx-auto">
                                    <button type="button" class="btn bg-gradient-success btn-sm" onClick={handleOpen}>+ Add Input</button>
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
                    Define your step
                    </Typography>

                    <Divider sx={{ my: 2, borderBottomWidth: 2 }} />
                    <div className="Button" style={{ marginTop: '16px'}}>
                        <Button
                            variant="contained"
                            class="btn btn-outline-primary mb-0"
                            style={{ marginRight: '8px' }}
                            onClick={() => handleButtonClick('LLM')}
                        >
                            LLM
                        </Button>
                        <Button
                            variant="contained"
                            class="btn btn-outline-primary mb-0"
                            style={{ marginLeft: '8px' }}
                            onClick={() => handleButtonClick('Model')}
                        >
                            Model
                        </Button>
                    </div>

                </Box>
            </Modal>
            {stepType === 'LLM' && (
                <div class="p-4 bg-blue-50 rounded-lg shadow mt-4">
                    <h4 class="text-lg font-semibold text-blue-800 mb-2">LLM Configuration</h4>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Choose Model</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={model}
                                label="Model"
                                onChange={handleSelectModel}
                                >
                                <MenuItem value={'Gemini'}>Gemini</MenuItem>
                                <MenuItem value={'ChatGPT'}>ChatGPT</MenuItem>
                                <MenuItem value={'Mistral'}>Mistral</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField
                            id="outlined-basic"
                            label="Enter Your Prompt    "
                            variant="outlined"
                            multiline
                            minRows={1}
                            maxRows={9}  
                            fullWidth
                            value={prompt}
                            onChange={handlePrompt}
                            sx={{
                            maxHeight: '500px',  // Set a maximum height for the TextField
                            overflowY: 'auto',  // Enable vertical scrollbar when content exceeds maxHeight
                            marginTop: '16px'
                            }}
                        />
                </div>
            )}

            {stepType === 'Model' && (
                <div class="p-4 bg-purple-50 rounded-lg shadow mt-4">
                    <h4 class="text-lg font-semibold text-purple-800 mb-2">Model Configuration</h4>
                    <TextField
                        label="Enter model parameters"
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

export default StepInput;