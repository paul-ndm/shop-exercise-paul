import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom'

import AddressForm from './addressForm';
import OrderDetails from './orderDetails';
import {useUser} from '../context/user'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }),
);

const Checkout = () =>  {
  const classes = useStyles();

  const { cart, removeItem, setCheckingout } = useUser()

  return (
    <Grid container>
      <Grid item>
        <AddressForm />
      </Grid>

      <Grid item>
        <OrderDetails />
      </Grid>

    </Grid>
  );
}

{/* <Button onClick={()=> setCheckingout(false)}>
        back to shop
    </Button> */}

export default Checkout