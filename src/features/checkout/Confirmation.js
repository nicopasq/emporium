import { Button, Container, Divider, Input, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Confirmation() {
    const navigate = useNavigate()
    const formData = useSelector(state => state.backend.checkout)
    const [shipping, setShipping] = useState({type:'standard:0', add:0})
    console.log('confirmation page', formData)

    const cart = useSelector(state => state.backend.cart)

    function handleShipping(e){
        const value = e.target.value
        const type = value.split(':')[0]
        const add = parseFloat(value.split(':')[1])
        console.log(add)
        setShipping({type: e.target.value, add:add})
    }

    let totalItemSum = 0

    cart.map(item => {
        totalItemSum += item.price * item.quantity
    })

    let total = ((totalItemSum * .029) + totalItemSum) + shipping.add


    return (
        <Container sx={{height:'100vh'}}>
             <h1 style={{ fontSize: '60px', fontWeight: '400' }}>Order Summary</h1>
             <Divider sx={{ bgcolor: 'black' }} />

            <div className="shippingSummary" style={{ marginTop: '3%' }}>
                <h1 style={{ fontSize: '50px', fontWeight: '300' }}>Shipping</h1>
                <InputLabel id='selectShipping'>Shipping Type</InputLabel>
                <Select sx={{ width: "40%" }} labelId="selectShipping" value={shipping.type} onChange={(e) => handleShipping(e)}>
                    <MenuItem value='standard:0'>Standard shipping (3-5 business days)</MenuItem>
                    <MenuItem value='priority:5'>Priority shipping (2-3 business days + $5.00)</MenuItem>
                    <MenuItem value='nextDay:15.5'>Next day shipping (24 hours + $15.50)</MenuItem>
                </Select>
            </div>

            <div className="itemSummary" style={{ marginTop: '3%' }}>
            <h1 style={{ fontSize: '35px', fontWeight: '300' }}>Items</h1>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant="body1">Item Name</Typography></TableCell>
                            <TableCell align="right"><Typography variant="body1">Quantity</Typography></TableCell>
                            <TableCell align="right"><Typography variant="body1">Price</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map(item => (
                            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} onClick={() => navigate(`/shop/${item.type}/${item.id}`)}>
                                <TableCell component='th' scope="row">{item.item}</TableCell>
                                <TableCell align="right">{item.quantity}</TableCell>
                                <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Paper elevation={9} sx={{ width: '32%', height: '32vh', marginTop: '1%', bgcolor: "lightgrey" }}>
                    <Typography variant="h6" sx={{ textIndent: '3%', color: 'grey' }}>Subtotal</Typography>
                    <Typography variant="h5" sx={{ textIndent: '5%', color: 'seaGreen', marginBottom: '3%' }}>${totalItemSum.toFixed(2)}</Typography>
                    <Typography variant="h6" sx={{ textIndent: '3%', color: 'grey' }}>Tax</Typography>
                    <Typography variant="h5" sx={{ textIndent: '5%', color: 'seaGreen', marginBottom: '3%' }}>2.9%</Typography>
                    <Typography variant="h6" sx={{ textIndent: '3%', color: 'grey' }}>Shipping Cost</Typography>
                    <Typography variant="h5" sx={{ textIndent: '5%', color: 'seaGreen', marginBottom: '3%' }}>${shipping.add.toFixed(2)}</Typography>
                    <Typography variant="h5" sx={{ textIndent: '3%', color: 'grey' }}>TOTAL</Typography>
                    <Typography variant="h4" sx={{ textIndent: '5%', color: 'seaGreen' }}>${total.toFixed(2)}</Typography>
                </Paper>
            </div>
            <Divider sx={{ marginTop:'2%', bgcolor: 'black' }} />

            <div className="contactSummary">

            </div>
            <div className="billingSummary"></div>
        </Container>
    )
}