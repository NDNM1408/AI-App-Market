import Navbar from './component/Navbar';
import Header from './component/Header';
import {BrowserRouter, Route, Switch, Link, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Tool from './pages/Tool';
import Agent from './pages/Agent';
import CreateTool from './pages/CreateTool';
function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
            <Route index element={<Home />}></Route>
            <Route path="tool" element={<Tool />}></Route>
            <Route path='agent' element={<Agent />}></Route>
            <Route path='/tool/create_tool' element={<CreateTool/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
