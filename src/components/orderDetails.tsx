import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import {useUser} from '../context/user'

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const OrderDetails = () => {
  const classes = useStyles();
  const { cart, bill } = useUser()

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Items
      </Typography>
      <List disablePadding>
      {cart.map((product : any) => {
        
        const {price, name, amount} = product

        return (
          <ListItem key={name}>
            <ListItemText primary={name} />
            <ListItemText primary={amount} />
            <ListItemText primary={`${price}€`} />
          </ListItem>
        )
        }
        )}
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
          {`${bill}€`}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default OrderDetails