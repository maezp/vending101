// eslint-disable-next-line no-unused-vars
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
 
function Devices () {
    const [device, setDevice] = useState([])
    useEffect(()=> {
        const fetchData = async () => {
        const res = await fetch('http://localhost:3000')
        const data = await res.json()
        setDevice(data.device)
        console.log(data)
      }
        fetchData()
      }, []);

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className='w-50 bg-white rounded p-3'>
  
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Device address</TableCell>
                        <TableCell>Device location</TableCell>
                        <TableCell align="center">Item1 qty</TableCell>
                        <TableCell align="center">Item2 qty</TableCell>
                        <TableCell align="center">Item3 qty</TableCell>
                        <TableCell align="center">Item4 qty</TableCell>
                    </TableRow>
                </TableHead>
                {device.map(i=> (
                 // eslint-disable-next-line react/jsx-key
              <TableBody>
                <TableRow>
                    <TableCell align="left">{i.deviceAddress}</TableCell>
                    <TableCell align="left">{i.deviceLocation}</TableCell>
                    <TableCell align="center">{i.item1}</TableCell>
                    <TableCell align="center">{i.item2}</TableCell>
                    <TableCell align="center">{i.item3}</TableCell>
                    <TableCell align="center">{i.item4}</TableCell>
                    <td><Button href="/update" variant="outlined">Edit quantities</Button></td>
                </TableRow>
              </TableBody>
            ))}
            </Table>
        </TableContainer>
            </div>
        </div>
    )
}

export default Devices;