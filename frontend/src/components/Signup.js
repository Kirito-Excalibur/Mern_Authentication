import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Signup = () => {
  const [inputs, setinputs] = useState({
    name:"",
    email:"",
    password:""
  }
  )
  const handleChange=(e)=>{
    setinputs((prev)=>({
      ...prev,
      [e.target.name]:e.target.value,
    }))
  }
  const handleSumbit = (e) => {
    e.preventDefault()
    console.log(inputs)
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <Box
          marginLeft="auto"
          marginRight="auto"
          display="flex"
          flexDirection="column"
          width="300px"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2">SignUp</Typography>
          <TextField name="name"  onChange={handleChange} value={inputs.name} variant="outlined" placeholder="Name" margin="normal" />
          <TextField  name="email" onChange={handleChange} type={"email"} value={inputs.email} variant="outlined" placeholder="Email" margin="normal" />
          <TextField  name="password" onChange={handleChange} type={"password"} value={inputs.password} variant="outlined" placeholder="Password" margin="normal" />
          <Button variant="contained" type="sumbit">Signup</Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
