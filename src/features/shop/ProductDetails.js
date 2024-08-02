import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import images from '../../images/images'
import { Button, Typography } from "@mui/material";
import LoremIpsum from "react-lorem-ipsum";
import { useSelector } from "react-redux";

export default function ProductDetails() {
  const products = useSelector(state => state.backend.products)
  const [currentProduct, setCurrentProduct] = useState({})
  const [count, setCount] = useState(0)
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    products.map(p => {
      if (p.id === parseInt(id)){
        images.map(image => {
          if (image.includes(p.image_path)) {            
            setCurrentProduct({...p, image: image})
          }
          return null
        })
      } 
    })

    return () => {
      setCurrentProduct({})
    }
  }, [id]);

  function handleClick(e) {
    if (e.target.name === '-') {
      if (count - 1 !== -1) {
        setCount(prev => prev -= 1)
      }
    } else {
      setCount(prev => prev += 1)
    }
  }

  function submit(){
    if (count !== 0){
      console.log({item:currentProduct.product_name, price:currentProduct.price, type:currentProduct.product_type, quantity:count})
    } else {
      console.log({error: 'quantity must be greater than 0'})
    }
  }

  return (
    <div className="productDetailsDiv">
      <p className="goBackButton" onClick={() => navigate(-1)}> {'<<'}BACK TO SHOP</p>
      <img src={currentProduct.image} className="productDetailsImage" />
      <div className="info">
        <Typography variant="h3">{currentProduct.product_name}</Typography>
        <Typography variant="h5">{<LoremIpsum random={false} avgWordsPerSentence={4} />}</Typography>
        <div className="detailsInteractivity">
          <Typography variant="h5" marginBottom={'5%'}>${currentProduct.price}.00</Typography>
          <div className="quantityController">
            <Button variant="text" name='-' onClick={(e) => handleClick(e)} sx={{ fontSize: '30px' }}>-</Button>
            <Typography variant="h6" sx={{ margin: '5%' }}>{count}</Typography>
            <Button variant="text" name='+' onClick={(e) => handleClick(e)} sx={{ fontSize: '25px' }}>+</Button>
          </div>
          <Button variant="contained" sx={{ position: 'relative', top: '6vh', }} onClick={submit}>Add To Cart</Button>
        </div>
      </div>
    </div>
  )
}