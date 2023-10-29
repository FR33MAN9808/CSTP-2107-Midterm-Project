import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Link, Typography } from '@mui/material'

const URL = 'https://fakestoreapi.com/products/'

const CategoryPage = props => {

  const [categoryData, setCategoryData] = useState([])
  const cssConfig = {
    width: "25%",
    height: "25%"
  };

  useEffecet(()=>{
    getCategoryData()
  },[])

  const getCategoryData = async () =>{
    try {
      const { data } = await axios.get(URL);
      setCategoryData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
      {
        categoryData.map((category, index) =>{
          return <Typography>{category}</Typography>
        })
      }
    </div>
  )
}

CategoryPage.propTypes = {}

export default CategoryPage