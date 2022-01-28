import React from 'react';
import { Link, NavLink, withRouter, useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { green } from '@mui/material/colors';

import { navbarMenu } from '../constants/navbar'


const drawerWidth = 240;


const Navbar = (props) => {
  const history = useHistory();
  return (
    // <nav className="nav-wrapper red darken-3">
    //   <div className="container">
    //       <button><NavLink exact to="/">Home</NavLink></button>
    //       <button><NavLink exact to="/about">About</NavLink></button>
    //   </div>
    // </nav> 
    <Box sx={{ display: 'flex' }}>
		<AppBar 
			position='fixed'
			sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
			>
			<Toolbar><h1>Yolanda</h1></Toolbar>
			<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
				  width: drawerWidth,
				  boxSizing: 'border-box',
				},
			  }}
			  variant="permanent"
			  anchor="left"
			>
				<Toolbar />
				<Divider />
				<List>
					{navbarMenu.map((item, index) => (
						<React.Fragment>
						<ListItem button key={item.name}>
						<ListItemIcon>
							{item.icon}
						</ListItemIcon>
						<ListItemText primary={item.name} sx={{ color: green[400], fontWeight: 'bold'}} primaryTypographyProps={{fontSize: '14px', fontFamily: 'Roboto,Helvetica Neue,sans-serif'}} />
						</ListItem>
						<Divider/>
						</React.Fragment>
					))}
				</List>
			</Drawer>
		</AppBar>
    </Box>
  )
}

export default withRouter(Navbar)