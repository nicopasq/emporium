import { Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function Signup() {
    const textFieldStyle = {
        marginBottom: "5%"
    }

    return (
        <div style={{ height: '100vh' }}>
            <form className="signUpForm">
                <Typography variant="h5">Create an Account</Typography>
                <Typography variant="body1">( required field * )</Typography>
                <div className="signUpInput">
                    <TextField label='Email' required style={textFieldStyle} />
                    <TextField label='Username' required style={textFieldStyle} />
                    <TextField label='Password' required style={textFieldStyle} />
                    <TextField label='Confirm Password' required style={textFieldStyle} />
                </div>
                <Button variant="outlined" type="submit">Sign Up</Button>
            </form>
        </div>
    )
}