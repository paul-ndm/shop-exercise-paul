import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import PaymentIcon from '@material-ui/icons/Payment';
import { NavLink } from 'react-router-dom'

import {useUser} from '../context/user'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  list: {
    width: 250,
  },
  button: {
    alignSelf: "center"
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const ShoppingCart = () => {

  const { cart, bill, removeItem, setCheckingout } = useUser()

  const classes = useStyles();
  const [open, setOpen] = useState(false);



  const cartContent = () => (
    <div
      role="presentation"
      onKeyDown={() => setOpen(false)}
    >
      <List className={classes.list}>
      <Divider />
        {cart.map((product : any) => {
        
        const {price, name, amount} = product

        return (
          <ListItem key={name}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={name} />
            <ListItemText primary={amount} />
            <ListItemText primary={price} />
            <IconButton color="secondary" onClick={() => removeItem(product)}>
                <HighlightOffIcon/>
            </IconButton>
          </ListItem>
        )
        }
        )}
        
        <Divider />
        <ListItemText primary={bill} />
        <Divider />

        { cart.length ?  
        <ListItem>
        <NavLink to='/checkout' >
        <Button
        startIcon={<PaymentIcon />}
        variant="outlined" size="small" color="primary" onClick={()=> {setCheckingout(true); setOpen(false)}}>
          Check out
        </Button>
        </NavLink>
        </ListItem>
        :
        <ListItem >
        <ListItemText primary="Cart is empty" />
        </ListItem>
        }

      </List>
 
    </div>
  );

  const anchor : string = "cart-icon"

  return (
    <div key={anchor} className={classes.root}>
        <IconButton
          aria-label="shopping cart"
          aria-controls={anchor}
          aria-haspopup="true"
          color="inherit"
          id={anchor}
          onClick={() => setOpen(true)}
        >
        <Badge badgeContent={cart.length} color="secondary">
         <ShoppingCartIcon />
        </Badge>
        </IconButton>
        
    <Drawer anchor={"right"} open={open} onClose={ () =>setOpen(false)}>
      {cartContent()}
    </Drawer>
  </div>
  );
}

export default ShoppingCart