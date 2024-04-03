import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div style={{marginTop:"80px"}}>
       <Typography variant="h1">Register Login page</Typography>
       <TextField label="enter name" variant='outlined'/> <br/>
       <TextField label="enter phone number" variant='outlined'/> <br/>
       <TextField label="nter address" variant='outlined'/> <br/>
       <Button variant='contained' color="success">Register</Button>
    </div>
   
  )
}

export default Registration