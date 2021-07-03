import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import {useUser} from '../context/user'

const AddressForm = () => {

    const { shippingForm, setShippingForm } = useUser()

    const onChange = (event: React.ChangeEvent<any>) => {
      setShippingForm({ ...shippingForm, [event.target.name]: event.target.value });
    };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onChange}
            required
            id="name"
            name="name"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value={shippingForm.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onChange}
            required
            id="surname"
            name="surname"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            value={shippingForm.surname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onChange}
            required
            id="street"
            name="street"
            label="Street"
            fullWidth
            autoComplete="shipping street"
            value={shippingForm.street}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onChange}
            required
            id="email"
            name="email"
            label="E-Mail"
            fullWidth
            autoComplete="e-mail"
            value={shippingForm.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onChange}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            value={shippingForm.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          onChange={onChange}
          id="region" 
          name="region" 
          label="Region" 
          fullWidth
          value={shippingForm.region}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={onChange}
            required
            id="Postal code"
            name="postalCode"
            label="Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            value={shippingForm.postalCode}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={() => onChange}
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            value={shippingForm.country}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default AddressForm