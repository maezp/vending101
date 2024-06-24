/* eslint-disable react/no-unknown-property */
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateDevice from './CreateDevice';
import UpdateDevice from './UpdateDevice';
import Devices from './Devices';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Devices/>}></Route>
        <Route path='/create' element={<CreateDevice />}></Route>
        <Route path='/update' element={<UpdateDevice />}></Route>
      </Routes>
    </BrowserRouter>
    <p align="left"><Button variant="contained" href="/create">Dodaj novi uređaj</Button> </p>
    </div>
  )
}

export default App
