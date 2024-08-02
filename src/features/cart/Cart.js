import { Button, Divider, Paper, Table, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";

export default function Cart(){
    return (
        <div className="cartDiv">
            <Paper className="itemsTable">
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item Name</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </Paper>
            <div className="totalCostDiv" >
                <Typography variant="h5">Total</Typography>
                <Typography variant="h5">$1430.34</Typography>
                <Divider sx={{margin:'5%'}}/>
                <div style={{textAlign:'center'}}>
                <Button variant='outlined' >Proceed to Checkout</Button>
                </div>
            </div>
        </div>
    )
}