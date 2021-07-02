import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
        {cart.map((product: any) => (

          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
              {bill}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default OrderDetails