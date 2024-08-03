import { Button, Divider, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Cart() {
    const cart = useSelector(state => state.backend.cart)
    const navigate = useNavigate()
    let totalItemSum = 0
    
    cart.map(item => {
        totalItemSum += item.price * item.quantity
    })
    const total = (totalItemSum * .029) + totalItemSum
    return (
        <div className="cartDiv">
            <Paper className="itemsTable">
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
            </Paper>
            <div className="totalCostDiv" >
                <Divider sx={{ margin: '5%' }} />

                <Typography variant="h6" sx={{textIndent:'9%'}}>Subtotal</Typography>
                <Typography variant="h6" sx={{ textIndent: '15%', color:'seaGreen' }}>${totalItemSum.toFixed(2)}</Typography>
                <Typography variant="h6" sx={{textIndent:'9%'}}>Tax</Typography>
                <Typography variant="h6" sx={{ textIndent: '15%', color:'seaGreen' }}>2.9%</Typography>
                <Typography variant="h6" sx={{textIndent:'9%'}}>Total</Typography>
                <Typography variant="h6" sx={{ textIndent: '15%', color:'seaGreen' }}>${total.toFixed(2)}</Typography>

                <Divider sx={{ margin: '5%' }} />
                <div style={{ textAlign: 'center' }}>
                    <Button variant='outlined' >Proceed to Checkout</Button>
                </div>
            </div>
        </div>
    )
}