import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var fname="Devu"
    var [name,setValue]=useState("Devu")
    const changeName =()=>{
      console.log("clicked")
      // setName(value)
    }
    const inputHandler = (e)=>{
      console.log(e.target.value)
      // setValue[e.target.value]
    }
  return (
    <div>
      <Typography>welcome{name}</Typography>

      <TextField label="Enter Name" variant='outlined'onChange={inputHandler}/><br/>
      <Button variant='contained' color="error" onClick={changeName}>change</Button>


  

    </div>
  )
}

export default Statebasics