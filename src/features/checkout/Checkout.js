import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Checkout(){
    const cartItems = useSelector(state => state.backend.checkout)
    console.log(cartItems)

    return (
        <div className="checkoutDiv" style={{height:"100vh"}}>
        </div>
    )
}