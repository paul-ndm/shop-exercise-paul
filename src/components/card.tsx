import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles,Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Input from '@material-ui/core/Input';

import {useUser} from '../context/user'

type Product = {
  picture: string;
  price: number;
  name: string;
};

const useStyles = makeStyles((theme: Theme) =>
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
    },
    input: {
      width: "25%",
      marginRight: theme.spacing(1)
    }
  })
);


const ProductCards = () => {
  const classes = useStyles();

  const { windowRounded, searchedProducts, cart, removeItem, addItem} = useUser()
  const cloumnsNumber = Math.floor(windowRounded / 2.5)


  const handleAdd = (event: React.ChangeEvent<any>, product: any) => {
    event.preventDefault()
    const number = parseInt(event.target[0].value, 10)
    addItem(product, number)
  };

  return (
  <Grid container className={classes.content} spacing={2}>
  <div id="grid" className={classes.gridStyles} style={{ gridTemplateColumns: `repeat(${cloumnsNumber}, ${cloumnsNumber}fr)`  }}>
  {searchedProducts.map((product : Product)=> {

    const {picture, price, name} = product
    const cartNames = cart.map((p : any) => p.name)
    const inCart = cartNames.includes(product.name)

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
          <Typography variant="h5" color="textSecondary" component="p">
          {`${price}€`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {
      inCart ?

      <Button
        className={classes.addButton}
        startIcon={<HighlightOffIcon />}
        variant="contained" size="small" color="secondary"
        onClick={()=> removeItem(product, 0, true)}>
          remove from cart
      </Button>


        :
      <form className={classes.buttonSection} onSubmit={(event: React.ChangeEvent<any>) => {handleAdd(event, product)}}>
      <Input
          className={classes.input}
          type="number"
          defaultValue={1}
          margin="dense"
          inputProps={{
              step: 1,
              min: 0,
              max: 999,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
      
      <Button
        className={classes.addButton}
        startIcon={<AddCircleOutlineIcon />}
        variant="outlined" size="small" color="primary"
        type="submit">
          add to cart
        </Button>
      </form>
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