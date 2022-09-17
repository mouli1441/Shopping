import React from 'react'
import './Login.css';
import { Grid , Paper , Avatar} from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { color } from '@mui/system';
import { Link, TextField, Typography , AppBar, IconButton , Toolbar, Box } from '@mui/material';
import { Menu as MenuIcon } from "@material-ui/icons";
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/OutlinedInput'
import {NavLink} from "react-router-dom";



const Login = () => {
const paperStyle = {padding:20 , height: '70vh' , width:300 , margin:"20px auto" , background: "FFE9A0" }
const avatarStyle = {backgroundColor: "#ABD9FF"}
const btnStyle = {margin: "8px 0"}


  return (
    <body className='body-page'>
    <div>
    <img className='image' src='https://www.pngitem.com/pimgs/m/207-2071176_customer-vector-online-shopping-online-order-icon-png.png'/>
    </div>
    <Grid> 
      <Paper elevation={20} style = {paperStyle}>
        <Grid align="center">
        <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
         <h2>Sign In</h2>
        </Grid>
        
        <div> 
        <TextField  label="Username" placeholder='Enter Username'  type= "email" variant="standard" fullWidth required/>
        <TextField label="Password"  type="password" placeholder='Enter Password' variant="standard" fullWidth required/>
        </div>
       
       <FormControlLabel
        label="Remember me"
        control={
          <Checkbox
            name="checked"
            color="primary"
          />
        }
      />
       <NavLink to="/cart">
       <Button  type="submit" variant="contained" fullWidth style={btnStyle}>
       Login
      </Button>
       </NavLink>
      <Typography>
        <Link href="#">
          Forgot Password
        </Link>
      </Typography>
      <Typography>Do you have an account?
        <Link href="#">
          Sign up
        </Link>
      </Typography>
      </Paper>
    </Grid>
    </body>
  )
}

export default Login