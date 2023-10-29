import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Navbar from '../../components/Navbar/Navbar';

const URL = "https://fakestoreapi.com/products";

const DetailPage = props => {

  const {id}= useParams();
  const [productData,setProductData] = useState([])
  const cssConfig = {
    width: "100%",
    height: "100%",
    imageWidth: "800px",
    imageHeight: "400px",
    containerFlex: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
  };

  useEffect(() => {
    getDataByID()
  }, [])
  
  const getDataByID = async () => {
    try {
      const { data } = await axios.get(`${URL}/${id}`);
      setProductData([data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Navbar/>
      {
        productData.map((product, index) =>{
          return <ProductCard cssConfig={cssConfig} showViewMore={false} key={index} data={product} />
        })
      }
    </div>
  )
}

DetailPage.propTypes = {}

export default DetailPage