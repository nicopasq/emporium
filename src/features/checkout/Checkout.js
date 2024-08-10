import { CheckBox, Label } from "@mui/icons-material";
import { Button, FormControl, FormControlLabel, FormHelperText, Input, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
    const [formDisplay, setFormDisplay] = useState(0)
    const [state, setState] = useState('')
    const checkoutObj = useSelector(state => state.backend.checkout)
    const states = [
        "AL",
        "AK",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "FL",
        "GA",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY"
    ]

    const cartItems = checkoutObj.items.map(i => (<Typography variant="h5">{i.item}</Typography>))

    function handleNext(e) {
        e.preventDefault();
        const id = parseInt(e.target.id)

        if (id + 1 < forms.length) {
            setFormDisplay(id + 1)
        }
    }
    console.log(formDisplay)


    const forms = [
        <form id={0} onSubmit={(e) => handleNext(e)} className="checkoutForm">
            <TextField label="First Name" required />
            <TextField label="Last Name" required />
            <TextField label="Email" required />
            <TextField label="Phone Number" required />
            <Button type="submit">Next</Button>
        </form>,

        <form id={1} onSubmit={(e) => handleNext(e)} className="checkoutForm">
            <TextField label="First Name" required />
            <TextField label="Last Name" required />
            <TextField label="Address Line 1" required />
            <TextField label="Address Line 2" />
            <TextField label="City" required />
            <Select label="Choose State" required value={state} onChange={(e) => setState(e.target.value)} sx={{ width: '10%' }}>
                {states.map((s, i) => (
                    <MenuItem key={i} value={s}>
                        {s}
                    </MenuItem>
                ))}
            </Select>
            <TextField label="Zip Code" required />
            <Button type="submit">Next</Button>
        </form>,

        <form id={2} onSubmit={(e) => handleNext(e)} className="checkoutForm">
            <TextField label="Card Holder First Name" required />
            <TextField label="Card Holder Last Name" required />
            <DatePicker
                label="Card Exp."
                disablePast
                views={['year', 'month', 'day']}
            />
            <TextField name="date" required type="date" helperText="Expiration Date" />
            <TextField label="CVV" required />
            <FormControlLabel control={<CheckBox />} label="Are the billing and shipping addresses the same?" />
        </form>
    ]

    return (
        <div className="checkoutDiv" style={{ height: "100vh" }}>
            <div className="displayForm">
                {forms[formDisplay]}
            </div>
        </div>
    )
}