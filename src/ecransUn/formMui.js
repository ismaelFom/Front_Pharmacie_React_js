import React, { useState } from 'react';
import { accountServices } from '../Zservices/account.services';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { LoginOutlined } from '@mui/icons-material';
// import '../style/StyleLogin.css'

const Auth = () => {
  const [test, setTest] = useState({
    login: "",
    password: ""
  })

  let navigate = useNavigate();
  const onChange = (e) => {
    setTest({ ...test, [e.target.name]: e.target.value })

  }

  const handleSubmit = (e) => {
    e.preventDefault()


    let data = JSON.stringify(test);
    console.log(data);

    accountServices.login(data)
      .then(response => {
        console.log(response)
        accountServices.saveToken(response.data.accessToken)
        alert('vous êtes connectés')
        navigate("/element/admin/addLots", { replace: true })
      })
      .catch(error => {
        console.log(error)
        alert('vous ne vous êtes pas connectés')
      })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          margin-top={10}
          padding={2}
        >
          <Typography
            textAlign="center"
            margin-top={0}
            color="blue"
            variant='h5'
            padding={3}
            padding-top={0}
          >
            Login
          </Typography>

          <TextField
            name="login"
            value={test.login}
            onChange={onChange}
            margin="dense"
            type={'text'}
            variant='outlined'
            label='Email' />

          <TextField
            name="password"
            value={test.password}
            onChange={onChange}
            margin="dense"
            type={'text'}
            variant='outlined'
            label='PassWord' />

          <Button
            type="submit"
            onSubmit={handleSubmit}
            endIcon=<LoginOutlined />
            sx={{ marginTop: 3, borderRadius: 5 }}
            variant="container"
            backgroundColor={"red"}
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
  )

}
export default Auth;