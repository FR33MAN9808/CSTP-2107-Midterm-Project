import React from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD
import { Box, grid2Classes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ProductCard from '../../components/ProductCard/ProductCard';

const URL = "https://fakestoreapi.com/products";
=======
>>>>>>> parent of 99fe265 (data fetched)

const cssConfig = {
  height: "100%",
  width: "auto",
  imageHeight: 200,
  containerFlex: {
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
};

const Homepage = props => {
  return (
<<<<<<< HEAD
    <>
      <Box>
        {
            productData.map((data, index) =>{
                return <ProductCard showViewMore = {true} cssConfig={cssConfig} data={data} key={index}/>
            })
        }
      </Box>
    </>
    
=======
    <div>Homepage</div>
>>>>>>> parent of 99fe265 (data fetched)
  )
}

Homepage.propTypes = {}

export default Homepage