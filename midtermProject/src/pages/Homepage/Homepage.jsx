import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Box, grid2Classes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ProductCard from '../../components/ProductCard/ProductCard';

const URL = "https://fakestoreapi.com/products";

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
  const [productData, setProductData] = useState([])

    const fetchAPI = async () => {
        try {
          const {data} = await axios.get(URL)
          setProductData(data)
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(() =>{
      fetchAPI()
      
  }, []);

  return (
    <>
      <Box>
        {
            productData.map((data, index) =>{
                return <ProductCard showViewMore = {true} cssConfig={cssConfig} data={data} key={index}/>
            })
        }
      </Box>
    </>
    
  )
}

Homepage.propTypes = {}

export default Homepage