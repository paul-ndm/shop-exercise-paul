import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Paper from '@material-ui/core/Paper';
import PaymentIcon from '@material-ui/icons/Payment';

import AddressForm from './addressForm';
import OrderDetails from './orderDetails';
import {useUser} from '../context/user'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: "wrap"
      
    },
    adress: {
      minWidth: 250,
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      width: "70%"
    },
    order: {
      minWidth: 250,
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      width: "20%"
    },
    button: {
      margin: theme.spacing(2),
    }
  }),
);

const Checkout = () =>  {
  const classes = useStyles();

  const { setCheckingout, bill, cart, shippingForm } = useUser()


  const message = `${shippingForm.name} ${shippingForm.surname} bought goods for a total of ${bill}€. The order includes: ${cart.map((product: any) => `${product.amount} ${product.name} for ${product.price} per pice `)}. The Order is delivered to ${shippingForm.street},${shippingForm.postalCode} in ${shippingForm.city} - ${shippingForm.country}. A recipe has been send to ${shippingForm.email}`

  return (
    <Grid>
    <Grid className={classes.root}>

      <Paper className={classes.order}>
        <OrderDetails />
      </Paper>

      <Paper className={classes.adress}>
        <AddressForm />
      </Paper>
    </Grid>
    <Button
    className={classes.button}
    startIcon={<PaymentIcon />}
    variant="contained" size="small" color="primary"
    onClick={()=> console.log(message)}>
      buy
    </Button>
    <Button
    className={classes.button}
    startIcon={<KeyboardReturnIcon />}
    variant="contained" size="small" color="secondary"
    onClick={()=> setCheckingout(false)}>
      back to shop
    </Button>
    </Grid>
  );
}

export default Checkout