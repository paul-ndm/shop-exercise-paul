import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import {useUser} from '../context/user'

const AddressForm = () => {

    const { userData } = useUser()

    const {name, surname, email, adresse } = userData

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            defaultValue={surname ? surname : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            defaultValue={name ? name : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="street"
            name="street"
            label="Street"
            fullWidth
            autoComplete="shipping street"
            defaultValue={adresse ? adresse.street : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="e-mail"
            name="e-mail"
            label="E-Mail"
            fullWidth
            autoComplete="e-mail"
            defaultValue={email ? email : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            defaultValue={adresse ? adresse.city : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
          id="region" 
          name="region" 
          label="Region" 
          fullWidth
          defaultValue={adresse ? adresse.region : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Postal code"
            name="Postal code"
            label="Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            defaultValue={adresse ? adresse.postalCode : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            defaultValue={adresse ? adresse.country : ''}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm