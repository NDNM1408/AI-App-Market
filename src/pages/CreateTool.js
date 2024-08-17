import Header from '../component/Header';
import { Link } from 'react-router-dom';
import KnowledgeInput from '../component/KnowledgeInput';
import StepInput from '../component/StepInput';
import UserInput from '../component/UserInput';
import { useState } from 'react';
import React from 'react';
import jsonData from './test_data.json';
import { useNavigate } from 'react-router-dom';
 


function CreateTool() {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [input, setInput] = React.useState(null);
    const [steps, setStepChance] = React.useState([]);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);

    const handleInputChange = (input) => {
        setInput(input);
    }

    const handleStepChange = (input) => {
        const tmp = [];
        tmp[0] = input;
        setStepChance(tmp)
    }
    const handleAddTool = async () => {
        const tool = {};
        tool.name = title;
        tool.description = description;
        tool.input = "TEXT";
        tool.output = "TEXT";
        tool.steps = steps;
        try {
            const response = await fetch('http://localhost:8080/api/create_tool', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(tool),
            });
      
            if (response.ok) {
              console.log('Success: Tool created successfully');
              alert('Tool added successfully!');
              navigate('/tool');
            } else {
              const errorText = await response.text();
              console.error('Failed to create tool:', errorText);
              setErrorMessage(`Failed to create tool: ${response.statusText}`);
            }
          } catch (error) {
            console.error('Error:', error);
            setErrorMessage(`Error: ${error.message}`);
          }
    }


    return (
        <div className="Tool">
        <div class="container mt-3">
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <div class="mb-2 w-100 w-md-50 w-lg-25">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/tool">Tool</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Create Tool</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="bg-gray-100 w-100 container centered-container">
            <div class="row py-1 mt-2">
                <div class="col-4">
                    <div class="input-group input-group-outline mb-3">
                        <span class="input-group-text"><i class="fas fa-search" aria-hidden="true"></i></span>
                        <input class="form-control" placeholder="Untitled Tool" type="text"
                         style={{ fontSize: '1.5rem', color: '#131353' }}
                         value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    </div>
                </div>
            </div>
            
            <div class="row py-1 mt-2">
                <div class="col-4">
                    <div class="input-group input-group-dynamic mb-3">
                        <span class="input-group-text"><i class="fas fa-search" aria-hidden="true"></i></span>
                        <input class="form-control" placeholder="Tool description" 
                        type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    </div>
                </div>
            </div>
    
            <div class="container mx-auto mt-3">
                <div class="bg-white p-4 rounded-lg shadow-lg text-center">  
                    <div id="tool-sections">
                        <KnowledgeInput></KnowledgeInput>
                        <UserInput handleUserInputChange={handleInputChange}></UserInput>
                        <StepInput handleStepInputChange={handleStepChange}></StepInput>
                    </div>
                </div>
            </div>

            <div class="row text-center py-1 mt-2">
                <div class="col-12 mx-auto">
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-lg"
                        onClick={handleAddTool}
                    >
                        Done
                    </button>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
            </div>

        </div>
    </div>
    
    );
}

export default CreateTool;
