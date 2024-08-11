import { CheckBox, Label } from "@mui/icons-material";
import { Button, FormControl, FormControlLabel, FormHelperText, Input, MenuItem, Select, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
    const [formDisplay, setFormDisplay] = useState(0)
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
    const [formData, setFormData] = useState({
        user: {
            first: '',
            last: '',
            phone: '',
            email: '',
        },
        address: {
            first: '',
            last: '',
            lineOne: '',
            lineTwo: '',
            city: '',
            state: '',
            zip: ''
        },
        billing: {
            first: '',
            last: '',
            expiration: '',
            cvv: '',

        }
    })

    const cartItems = checkoutObj.items.map(i => (<Typography variant="h5">{i.item}</Typography>))

    function handlePagination(e) {
        if (e === -1) {
            setFormDisplay(formDisplay - 1)
        } else if (e !== -1) {
            e.preventDefault();
            const id = parseInt(e.target.id)

            if (id + 1 < forms.length) {
                setFormDisplay(id + 1)
            }
            if (id + 1 === forms.length) {
                console.log("PROCEED TO CONFIRMATION")
            }
        }
        console.log(formData)
    }

    function handleInput(e) {
        const data = e.target.name.split(':')
        const location = data[0]
        const name = data[1]

        const formCopy = { ...formData }
        formCopy[location][name] = e.target.value

        setFormData(formCopy)

    }

    const forms = [
        <form id={0} onSubmit={(e) => handlePagination(e)} className="checkoutForm">
            <TextField label="First Name" name="user:first" value={formData.user.first} onChange={(e) => handleInput(e)} required />
            <TextField label="Last Name" name="user:last" value={formData.user.last} onChange={(e) => handleInput(e)} required />
            <TextField label="Email" name="user:email" value={formData.user.email} onChange={(e) => handleInput(e)} required />
            <TextField label="Phone Number" name="user:phone" value={formData.user.phone} onChange={(e) => handleInput(e)} required />
            <Button type="submit">Next</Button>
        </form>,

        <form id={1} onSubmit={(e) => handlePagination(e)} className="checkoutForm">
            <TextField label="First Name" name="address:first" value={formData.address.first} onChange={(e) => handleInput(e)} required />
            <TextField label="Last Name" name="address:last" value={formData.address.last} onChange={(e) => handleInput(e)} required />
            <TextField label="Address Line 1" name="address:lineOne" value={formData.address.lineOne} onChange={(e) => handleInput(e)} required />
            <TextField label="Address Line 2" name="address:lineTwo" value={formData.address.lineTwo} onChange={(e) => handleInput(e)} />
            <TextField label="City" name="address:city" value={formData.address.city} onChange={(e) => handleInput(e)} required />
            <Select label="Choose State" name="address:state" required value={formData.address.state} onChange={(e) => handleInput(e)} sx={{ width: '10%' }}>
                {states.map((s, i) => (
                    <MenuItem key={i} value={s}>
                        {s}
                    </MenuItem>
                ))}
            </Select>
            <TextField label="Zip Code" name="address:zip" value={formData.address.zip} onChange={(e) => handleInput(e)} required />
            <Button onClick={() => handlePagination(-1)}>Back</Button>
            <Button type="submit">Next</Button>
        </form>,

        <form id={2} onSubmit={(e) => handlePagination(e)} className="checkoutForm">
            <TextField label="Card Holder First Name" required name="billing:first" value={formData.billing.first} onChange={(e) => handleInput(e)} />
            <TextField label="Card Holder Last Name" required name="billing:last" value={formData.billing.last} onChange={(e) => handleInput(e)} />
            <TextField helperText="Card Exp." type="date" required name="billing:expiration" value={formData.billing.expiration} onChange={(e) => handleInput(e)} />
            <TextField label="CVV" required name="billing:cvv" value={formData.billing.cvv} onChange={(e) => handleInput(e)} />
            <FormControlLabel control={<CheckBox />} label="Are the billing and shipping addresses the same?" />
            <Button onClick={() => handlePagination(-1)}>Back</Button>
            <Button type="submit">Next</Button>
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