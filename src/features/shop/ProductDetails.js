import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import images from '../../images/images'
import { Button, Rating, Typography } from "@mui/material";
import LoremIpsum from "react-lorem-ipsum";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../slices/backendSlice";

export default function ProductDetails() {
  const [ratingVal, setRatingVal] = useState(3.5)
  const cart = useSelector(state => state.backend.cart);
  const dispatch = useDispatch()
  const products = useSelector(state => state.backend.products)
  const [currentProduct, setCurrentProduct] = useState({})
  const [count, setCount] = useState(0)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    products.map(p => {
      if (p.id === parseInt(id)) {
        images.map(image => {
          if (image.includes(p.image_path)) {
            setCurrentProduct({ ...p, image: image })
          }
          return null
        })
      }
    })

    cart.filter(i => {
      if (i.id === parseInt(id)) {
        setCount(i.quantity)
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

  function updateItem(item) {
    const itemCopy = { ...item }
    itemCopy.quantity = count

    const cartCopy = [...cart]

    const updatedCart = cartCopy.map(item => {
      if (item.id === itemCopy.id && itemCopy.quantity > 0) {
        return item = itemCopy
      } else if (item.id === itemCopy.id & itemCopy.quantity === 0) {
        return undefined
      }
      return item
    }).filter(i => i !== undefined)

    dispatch(setCart(updatedCart))
  }

  function submit() {
    const addProduct = { id: currentProduct.id, item: currentProduct.product_name, price: currentProduct.price, type: currentProduct.product_type, quantity: count }

    const inCart = cart.filter(item => item.id === currentProduct.id)[0]

    if (inCart?.id) {
      updateItem(inCart)
    } else if (cart.length === 0 && count > 0) {
      dispatch(setCart([...cart, addProduct]))
    } else if (!inCart?.id && count > 0) {
      dispatch(setCart([...cart, addProduct]))
    } else if (count === 0) {
      console.log({ error: 'Quantity Must be Greater Than 0' })
    }

  }

  return (
    <div className="productDetailsDiv">
      <Button onClick={() => navigate('/shop')} className="goBackButton">Back to shop</Button>
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
          <Button variant="contained" sx={{ position: 'relative', top: '6vh', }} onClick={submit}>update cart</Button>
        </div>
        <Rating sx={{ marginLeft: '2%', marginTop:'5%' }} value={ratingVal} onChange={(e, newVal) => setRatingVal(newVal)} size="large"/>
      </div>
    </div>
  )
}