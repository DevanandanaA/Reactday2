import {Button, TextField,Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{marginTop:"80px"}}>
       
    <Typography variant='h5'>Login page</Typography> <br/>
    <TextField label="enter name"variant='outlined'/> <br />
    <TextField label="enter pasword"variant='outlined'/> <br/><br/>
    <Button variant="contained" color="warning">Log In</Button>
    </div>
  )
}

export default Login;