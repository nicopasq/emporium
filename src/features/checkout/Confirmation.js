import { Button, Container, Divider, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Confirmation() {
    const navigate = useNavigate()
    const backend = useSelector(state => state.backend.checkout)
    const cartItems = backend.items.map(i => (<Typography variant="h5">{i.item}</Typography>))

    const cart = useSelector(state => state.backend.cart)
    let totalItemSum = 0

    cart.map(item => {
        totalItemSum += item.price * item.quantity
    })
    const total = (totalItemSum * .029) + totalItemSum


    return (
        <Container>
                <div className="itemSummary" style={{marginTop:'3%'}}>
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

                    <Paper elevation={9} sx={{ width:'25%', height:'25vh', marginTop:'1%', marginLeft:'3%', bgcolor:"lightgrey"}}>
                        <Typography variant="h6" sx={{ textIndent: '3%', color: 'grey' }}>Subtotal</Typography>
                        <Typography variant="h5" sx={{ textIndent: '5%', color: 'seaGreen', marginBottom:'3%' }}>${totalItemSum.toFixed(2)}</Typography>
                        <Typography variant="h6" sx={{ textIndent: '3%', color: 'grey' }}>Tax</Typography>
                        <Typography variant="h5" sx={{ textIndent: '5%', color: 'seaGreen', marginBottom:'3%' }}>2.9%</Typography>
                        <Typography variant="h5" sx={{ textIndent: '3%', color: 'grey' }}>TOTAL</Typography>
                        <Typography variant="h4" sx={{ textIndent: '5%', color: 'seaGreen' }}>${total.toFixed(2)}</Typography>
                    </Paper>
                </div>
                <Divider sx={{margin:'3%', bgcolor:'black'}}/>

                <div className="contactSummary">
                    
                </div>

                <div className="shippingSummary">

                </div>
                <div className="billingSummary"></div>
        </Container>
    )
}