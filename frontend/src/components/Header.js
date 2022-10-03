import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material"
const Header = () => {
    const [value, setvalue] = useState()
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h3">MernAuth</Typography>
                    <Box sx={{marginLeft:"auto"}} >
                        <Tabs indicatorColor='secondary'
                        onChange={(e,val)=>setvalue(val)} value={value} textColor="inherit">
                            <Tab to='/Login' LinkComponent={Link} label="Login"></Tab>
                            <Tab to='/Signup' LinkComponent={Link} label="Signup"></Tab>
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header