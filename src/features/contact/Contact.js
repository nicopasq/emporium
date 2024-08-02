import { Alert, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import necklaceImage from '../../images/misc/pages/contactPgImage.png'

export default function Contact() {
    const [alert, setAlert] = useState({
        severity: 'success',
        display: 'none',
        message: ''
    })
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
    })

    function handleSubmit(e) {
        e.preventDefault();
        setAlert({ severity: 'success', message: 'Thank you for your message!', display: true })
        setTimeout(() => {
            setAlert({
                severity: 'success',
                display: 'none',
                message: ''
            })
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                message: ''
            })
        }, [3000])
    }
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Alert severity={alert.severity} sx={{ display: alert.display }}>{alert.message}</Alert>
            <form className="contactForm" onSubmit={(e) => handleSubmit(e)}>
                <Typography variant="h2" sx={{ marginBottom: '5%' }}>Get in touch with our team!</Typography>
                <Typography variant="body2" sx={{ fontFamily: "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif", marginBottom: '2%' }}>required feild *</Typography>
                <TextField required sx={{ marginRight: '10%' }} className="nameInputs" variant="filled" name='first_name' label='First Name' value={formData.first_name} onChange={(e) => handleChange(e)} />
                <TextField required className="nameInputs" variant="filled" name='last_name' label='Last Name' value={formData.last_name} onChange={(e) => handleChange(e)} />
                <TextField required sx={{ marginTop: '10%', marginBottom: "10%" }} className="emailInput" variant="filled" name='email' label='Your Email' value={formData.email} onChange={(e) => handleChange(e)} />
                <TextField required multiline sx={{ marginBottom: '5%' }} className="messageInput" variant="filled" name='message' label='Message' value={formData.message} onChange={(e) => handleChange(e)} />
                <Button type="submnit" variant="outlined">Send Message</Button>
            </form>
            <img src={necklaceImage} alt="necklace image" className="contactUsImage" />
        </div>
    )
}