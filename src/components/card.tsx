import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import {useUser} from '../context/user'

type Product = {
  picture: string;
  price: number;
  name: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 220,
      padding: "15px"
    },
    media: {
      height: 140,
    },
    content: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "center"  
    },
    gridStyles: {
      display: "grid",
    },
    innerCard: {
      display: "flex",
      justifyContent: "space-between"
    },
    buttonSection: {
      display: "flex",
      justifyContent: "space-around"
    },
    addButton: {
      flexGrow: 1
    }}),
);


const ProductCards = () => {
  const classes = useStyles();

  const { windowRounded, searchedProducts, cart, removeItem, addItem} = useUser()
  const cloumnsNumber = Math.floor(windowRounded / 2.5)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("HI")
    console.log(event);
  };

  return (
  <Grid container className={classes.content} spacing={2}>
  <div id="grid" className={classes.gridStyles} style={{ gridTemplateColumns: `repeat(${cloumnsNumber}, ${cloumnsNumber}fr)`  }}>
  {searchedProducts.map((product : Product)=> {

    const {picture, price, name} = product
    const inCart = cart.includes(product)

    return(

    <Grid className={classes.root}>
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={picture}
        />
        <CardContent className={classes.innerCard}>
          <Typography gutterBottom variant="h5" component="h2">
          {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      <Input
            type="number"
            defaultValue={1}
            margin="dense"
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
      {



      // inCart ?
      //   <Grid className={classes.buttonSection}>
      //   <TextField
      //   id="number"
      //   name="number"
      //   label="number"
      //   defaultValue={1}   
      //   />
      //   <Button
      //   className={classes.addButton}
      //   startIcon={<HighlightOffIcon />}
      //   variant="contained" size="small" color="secondary" onClick={() => removeItem(product)}>
      //   </Button>
      //   </Grid>
      //       :
      //   <Grid className={classes.buttonSection}>
      //   <TextField
      //   id="number"
      //   name="number"
      //   label="number"
      //   defaultValue={1}   
      //   />
      //   <Button
      //   className={classes.addButton}
      //   startIcon={<AddCircleOutlineIcon />}
      //   variant="outlined" size="small" color="primary" onClick={() => addItem(product)}>
      //   </Button>
      //   </Grid>
        }
      </CardActions>
    </Card>
    </Grid>

    )})}
  </div>
  </Grid>
  );
}

export default ProductCards