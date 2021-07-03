import React, { useState } from 'react';
import { fade, createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

import ShoppingCart from './shoppingCart'
import {useUser} from '../context/user'
import {products} from '../data/products'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center"
    },
    icons: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    sectionDesktop: {
      display: 'flex',
      alignSelf: 'flex-end'
    },
    search: {
      alignSelf: 'start-end',
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

const NavBar = () => {

    const { setSearchedProducts, userData, windowRounded} = useUser()

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const isProfileMenuOpen = () : boolean =>{
     if (anchorEl && anchorEl.id === profilMenuId) {
      return true
    } else {
      return false
    }}

    const filterByInput = (input : string) => {
      const results = products.filter(product => product.name.includes(input))
      setSearchedProducts(results)

    }

    const profilMenuId : string = 'account-info';
    const renderProfil = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={profilMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isProfileMenuOpen()}
        onClose={handleClose}
      >
      { userData ?
        <div>
        <MenuItem >{userData.surname} {userData.name}</MenuItem>
        <MenuItem onClick={handleClose}>log out</MenuItem>
        </div>
        :
        <MenuItem>no user</MenuItem>
        }
      </Menu>
    );

    const appBarWidth = Math.floor(windowRounded / 2.5) * 250

  return (
    <div className={classes.root}>
      <AppBar style={{width: appBarWidth}} position="static">
        <Toolbar>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={e=> filterByInput(e.target.value)}
            />
          </div>


          <Typography variant="h6" className={classes.title}>
            Store
          </Typography>

  
  
          <div className={classes.sectionDesktop}>
              <ShoppingCart />

              <IconButton
                aria-label="account of current user"
                aria-controls={profilMenuId}
                aria-haspopup="true"
                color="inherit"
                id={profilMenuId}
                onClick={handleClick}
                >
                <AccountCircle />
              </IconButton>
        </div>

          
        </Toolbar>
      </AppBar>
      {renderProfil}
    </div>
  );
}

export default NavBar