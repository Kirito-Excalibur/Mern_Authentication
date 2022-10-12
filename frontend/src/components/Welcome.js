import { Box } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
axios.defaults.withCredentials = true
let firstRender = true
const Welcome = () => {
  const [user, setUser] = useState()

  const refreshToken = async () => {
    const res = await axios.get("https://murmuring-everglades-20283.herokuapp.com/api/refresh", {
      withCredential: true
    }).catch((err) => console.log(err))

    const data = await res.data
    return data
  }

  const sendRequest = async () => {
    const res = await axios.get('https://murmuring-everglades-20283.herokuapp.com/api/user', {
      withCredentials: true
    }).catch((err) => console.log(err))

    const data = await res.data
    return data
  }

  useEffect(() => {
    if (firstRender) {
      firstRender = false
      sendRequest().then((data) => setUser(data.user))
    }

    let interval = setInterval(() => {
      refreshToken().then((data) => setUser(data.user))
    }, 1000 * 29)

    return ()=>clearInterval(interval)

  }, [])
  return (
    <Box textAlign="center" border="thick" marginLeft="auto" marginRight="auto">
      {user && <h1>{user.name}</h1>}
      </Box>
  )
}

export default Welcome