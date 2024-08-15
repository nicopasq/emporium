import { Check, CheckBox } from "@mui/icons-material";
import { Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Input, MenuItem, Select, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setCheckout } from "../../slices/backendSlice";

export default function Checkout() {
    const [formDisplay, setFormDisplay] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
            card_number:'',
            address: {
                first: '',
                last: '',
                lineOne: '',
                lineTwo: '',
                city: '',
                state: '',
                zip: ''
            }
        }
    })

    function handlePagination(e) {

        e.preventDefault();
        const id = e.target.id

        if (id === 'back') {
            setFormDisplay(prev => prev - 1)
        } else if (id !== 'back') {
            if (parseInt(id) + 1 < forms.length) {
                setFormDisplay(prev => prev + 1)
            } 
        }
    }

    function handleInput(e) {
        const data = e.target.name.split(':')
        const location = data[0]
        const name = data[1]

        const formCopy = { ...formData }
        formCopy[location][name] = e.target.value

        setFormData(formCopy)

    }

    const shortInputSx = {
        marginTop: "3%",
        marginLeft: '1%',
        marginRight: '1%',
        width:'48%'
    }

    const inputSx = {
        marginTop: "3%",
        width: '99%'
    }

    function handleSubmit(e){
        e.preventDefault();
        navigate('/confirmation')
        dispatch(setCheckout(formData))
    }

    const forms = [
        <form id={0} onSubmit={(e) => handlePagination(e)} className="checkoutForm">
            <p>* = required field</p>
            <div className="fsOne">
                <TextField sx={shortInputSx} label="First Name" name="user:first" value={formData.user.first} onChange={(e) => handleInput(e)} required />
                <TextField sx={shortInputSx} label="Last Name" name="user:last" value={formData.user.last} onChange={(e) => handleInput(e)} required />
            </div>
            <div className="fsTwo">
                <TextField sx={inputSx} label="Email" name="user:email" value={formData.user.email} onChange={(e) => handleInput(e)} required />
            </div>
            <div className="fsThree">
                <TextField sx={inputSx} label="Phone Number" name="user:phone" value={formData.user.phone} onChange={(e) => handleInput(e)} required />
            </div>
            <div className="formButtons">
                <Button type="submit">Next</Button>
            </div>
        </form>,

        <form id={1} onSubmit={(e) => handlePagination(e)} className="checkoutForm">
            <p>* = required field</p>
            <div className="fsOne">
                <TextField sx={shortInputSx} label="First Name" name="address:first" value={formData.address.first} onChange={(e) => handleInput(e)} required />
                <TextField sx={shortInputSx} label="Last Name" name="address:last" value={formData.address.last} onChange={(e) => handleInput(e)} required />
            </div>
            <div className="fsTwo">
                <TextField sx={inputSx} label="Address Line 1" name="address:lineOne" value={formData.address.lineOne} onChange={(e) => handleInput(e)} required />
                <TextField sx={inputSx} label="Address Line 2" name="address:lineTwo" value={formData.address.lineTwo} onChange={(e) => handleInput(e)} />
            </div>
            <div className="fsThree">
                <TextField sx={{ marginTop: '3%', width:'81%'}} label="City" name="address:city" value={formData.address.city} onChange={(e) => handleInput(e)} required />
                <Select sx={{ marginTop: '3%', width: '75px' }} name="address:state" required value={formData.address.state} onChange={(e) => handleInput(e)} >
                    {states.map((s, i) => (
                        <MenuItem key={i} value={s}>
                            {s}
                        </MenuItem>
                    ))}
                </Select>
                <TextField sx={inputSx} label="Zip Code" name="address:zip" value={formData.address.zip} onChange={(e) => handleInput(e)} required />
            </div>

            <div className="formButtons">
                <Button id='back' onClick={(e) => handlePagination(e)}>Back</Button>
                <Button type="submit">Next</Button>
            </div>
        </form>,

        <form id={2} onSubmit={(e) => handleSubmit(e)} className="checkoutForm">
            <p>* = required field</p>
            <div className="fsOne">
                <TextField sx={shortInputSx} label="Card Holder First Name" required name="billing:first" value={formData.billing.first} onChange={(e) => handleInput(e)} />
                <TextField sx={shortInputSx} label="Card Holder Last Name" required name="billing:last" value={formData.billing.last} onChange={(e) => handleInput(e)} />
            </div>
            <div className="fsTwo">
                <TextField helperText="Card Exp." sx={shortInputSx} type="date" required name="billing:expiration" value={formData.billing.expiration} onChange={(e) => handleInput(e)} />
                <TextField sx={shortInputSx} label="CVV"  required name="billing:cvv" value={formData.billing.cvv} onChange={(e) => handleInput(e)} />
            </div>
            <div className="fsThree">
                <TextField sx={inputSx} label="Card number"  required name="billing:card_number" value={formData.billing.card_number} onChange={(e) => handleInput(e)} />
            </div>
            <div className="formButtons">
                <Button id="back" onClick={(e) => handlePagination(e)}>Back</Button>
                <Button type="submit">Submit</Button>
            </div>
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