/* eslint-disable no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CreateDevice () {
    const [deviceLocation, setdeviceLocation] = useState()
    const [deviceAddress, setdeviceAddress] = useState()
    const [item1, setitem1] = useState()
    const [item2, setitem2] = useState()
    const [item3, setitem3] = useState()
    const [item4, setitem4] = useState()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/create", {deviceAddress, deviceLocation, item1, item2, item3, item4})
        .then(result => console.log(result))
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}>
            <TextField onChange={(e)=>setdeviceAddress(e.target.value)} id="outlined-basic" label="Device Address" variant="outlined" />
            <TextField onChange={(e)=>setdeviceLocation(e.target.value)} id="outlined-basic" label="Device Location" variant="outlined" />
            <br></br>
            <TextField onChange={(e)=>setitem1(e.target.value)} id="outlined-basic" label="Item 1 QTY" variant="outlined" />
            <TextField onChange={(e)=>setitem2(e.target.value)} id="outlined-basic" label="Item 2 QTY" variant="outlined" />
            <TextField onChange={(e)=>setitem3(e.target.value)} id="outlined-basic" label="Item 3 QTY" variant="outlined" />
            <TextField onChange={(e)=>setitem4(e.target.value)} id="outlined-basic" label="Item 4 QTY" variant="outlined" />
            </Box>
            <p><Button variant="contained" onClick={Submit}>Spasi novi uređaj</Button> </p>
            <p><Button variant="contained" href="/">Na početnu</Button> </p>
        </div>
    )
}

export default CreateDevice;