import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Signup = () => {
  const handleSumbit = () => {};
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
          <TextField variant="outlined" placeholder="Name" margin="normal" />
          <TextField variant="outlined" placeholder="Email" margin="normal" />
          <TextField variant="outlined" placeholder="Password" margin="normal" />
          <Button variant="contained" type="sumbit">Signup</Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
