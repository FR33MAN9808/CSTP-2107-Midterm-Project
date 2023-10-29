import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data }) => {

    const navigate = useNavigate();
  
    const navigateToDetail = () => {
      navigate(`/detail/${data.id}`)
    }
  
    const navigateToHomepage = () => {
      navigate(`/`)
    }
  
    return (
      <Card variant='outlined'>
          <CardContent>
          <CardMedia 
            sx={{height:200}} 
            image={data.image} 
            title={data.title}
        />
  
          <Typography variant='h4' component="div">
            {data.title}
          </Typography>
  
          <Box display="flex" flexDirection="column">
            <Typography>
              Price: {`${data.price}$`}
            </Typography>
            <Typography>
              Rating: {data.rating.rate}
            </Typography>
          </Box>
          </CardContent>
  
          <CardActions>
            {
              <Button onClick={navigateToDetail} variant='contained' color='primary'>Details</Button>
            }
          </CardActions>
  
          <CardActions>
            {
              <Button onClick={navigateToHomepage} variant='contained' color='primary'>Go Back</Button>
            }
          </CardActions>
      </Card>
    );
  };
  
  ProductCard.propTypes = {
      data: PropTypes.any
  }
  
  export default ProductCard