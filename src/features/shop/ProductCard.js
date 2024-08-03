import { Button, Card, CardActionArea, CardContent, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ProductCard({ product }) {
    const [cartButtonVal, setCartButtonVal] = useState({ message: 'Add To Cart', color: 'info' })
    const [ratingVal, setRatingVal] = useState(3.5)
    const navigate = useNavigate()
    let name

    function handleClick() {
        navigate(`/shop/${product.product_type}/${product.id}`)
    }

    if (product?.product_name.length > 24) {
        const split = product.product_name.split('')
        const splice = split.splice(21)
        name = split.join('').concat('...')
    } else {
        name = product.product_name
    }

    return (
        <Card className="productCard" elevation={10}>
            <CardActionArea sx={{ textAlign: 'center', marginBottom: '3%' }} onClick={handleClick}>
                <img src={product.image} className="cardImage" />
            </CardActionArea>
            <CardContent sx={{ textAlign: 'left', height: '25%' }} onClick={handleClick}>
                <div>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="h6">${product.price}</Typography>
                </div>
            </CardContent>
            <div style={{ marginLeft: '3%' }}>
                <Button variant="text" onClick={handleClick}>Veiw Details</Button>
                <Rating sx={{ marginLeft: '2%' }} value={ratingVal} onChange={(e, newVal) => setRatingVal(newVal)} />
            </div>
        </Card>
    )
}