import '../assets/css/nucleo-svg.css'
import '../assets/css/nucleo-icons.css'
import '../assets/css/material-kit.css'
import '../assets/css/material-icon.css'
import { Button } from '@mui/material'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Input from './Input'
import Output from './Output'


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

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

const Block = ({title, description, input, output, url}) => {
  const [open, setOpen] = React.useState(false);
  const [result, setResult] = React.useState(false);
  const [request, setRequest] = React.useState('');
  const [content, setContent] = React.useState('');

  const handleOpen = () => setOpen(true);
  
  const handleClose = () => {
    setOpen(false);
    setResult(false); 
  };

  const handleRequest = (req) => {
    setRequest(req);
  }

  const handleResult = async(event) => {
    event.preventDefault();

    const currentReq = {
      [input.toLowerCase()]: request 
    };
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentReq)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const result = await response.json();
  
      if (result.hasOwnProperty(output.toLowerCase())) {
        setContent(result[output.toLowerCase()]);
        setResult(true);

      } else {
        throw new Error('The expected output key was not found in the response');
      }
  
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while converting text to audio: ' + error.message);
    }
    return false;
  }

  return (
    <>
    <div className="col-md-4 mt-md-0 mt-4">
        <a>
            <div className="card shadow-lg move-on-hover min-height-160" style={{ position: 'relative' }}>
                <div className="mt-2 ms-2">
                    <h6 className="mb-0">{title}</h6>
                    <p className="text-secondary text-sm">{description}</p>
                </div>
                <div className="Button" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                    <Button variant="contained" class="btn bg-gradient-primary" onClick={handleOpen}>Use</Button>
                </div>
            </div>
        </a>
    </div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
        <Box sx={{ ...style, width: '80%', maxWidth: '800px', height: 'auto', p: 4 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <Divider sx={{ my: 2, borderBottomWidth: 2 }} />
          <Input type={input} handleRequestChange={handleRequest}></Input>
          {result && (
          <Box sx={{ mt: 2 }}>
            <Output type={output} content={content}/>
          </Box>
        )}
          <Divider sx={{ my: 2, borderBottomWidth: 2 }} />

          <div className="Button" style={{ marginTop: '16px', textAlign: 'right' }}>
            <Button variant="contained" className="btn bg-gradient-primary" onClick={handleResult} type='button'>Submit</Button>
          </div>
        </Box>
    </Modal>

    </>
  );  
}

export default Block;

