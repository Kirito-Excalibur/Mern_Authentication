import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { authActions } from '../store'
axios.defaults.withCredentials = true
const Header = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const sendLogoutReq = async () => {
        const res = await axios.post('http://localhost:5000/api/logout', null, {
            withCredentials: true
        })
        if (res.status === 200) {
            return res
        }
        return new Error("Unable to logout. Please try again")
    }
    const handleLogout = () => {
        sendLogoutReq().then(() => dispatch(authActions.logout()))
    }
    const [value, setvalue] = useState(0)
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h3">MernAuth</Typography>
                    <Box sx={{ marginLeft: "auto" }} >
                        <Tabs indicatorColor='secondary'
                            onChange={(e, val) => setvalue(val)} value={value} textColor="inherit">
                          { !isLoggedIn &&    <>
                              <Tab to='/Login' LinkComponent={Link} label="Login"></Tab>
                              <Tab to='/Signup' LinkComponent={Link} label="Signup"></Tab>
                              </>
                          }
                            {isLoggedIn &&
                                <Tab onClick={handleLogout} to='/' LinkComponent={Link} label="Logout"></Tab>
                            }
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header