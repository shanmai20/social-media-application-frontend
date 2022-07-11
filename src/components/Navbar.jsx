import { AppBar, Toolbar,styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Box } from '@mui/system';
import { InputBase } from '@mui/material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:"20px",
  width:"30%"
}))
const Icons = styled(Box)(({theme})=>({
 display:"none",
 alignItems:"center",
 gap:"30px",
[theme.breakpoints.up("sm")]:{
display:"flex"
}
}))
const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
    }
  
 }))

const Navbar = () => {

  const [open,setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
       <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}> Shanmai</Typography>
      <CircleNotificationsIcon sx={{display:{xs:"block",sm:"none"}}} />
       <Search><InputBase placeholder='search'/></Search>
       <Icons>
       <Badge badgeContent={4} color="error">
      <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="error">
      <NotificationsIcon />
      </Badge>
      <Avatar sx={{width:30,height:30}}   src="https://www.pexels.com/photo/landscape-nature-sky-desert-10757870/"
      onClick = {(e)=> setOpen(true)}  />
       </Icons>
       <UserBox  onClick = {(e)=> setOpen(true)}>
       <Avatar sx={{width:30,height:30}}   src="https://www.pexels.com/photo/landscape-nature-sky-desert-10757870/"  />
       <Typography variant='h6'> Siddu</Typography>
       </UserBox>
       
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose = {(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
   </AppBar>
  )
}

export default Navbar