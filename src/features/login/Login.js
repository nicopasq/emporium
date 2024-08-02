import { Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function Login() {
    const textFieldStyle = {
        marginBottom: "5%"
    }

    return (
        <div style={{ height: '100vh' }}>
            <form className="loginForm">
                <Typography variant="h5">Login</Typography>
                <Typography variant="body1">( required field * )</Typography>
                <div className="loginInputDiv">
                    <TextField label='Email or Username' required style={textFieldStyle} />
                    <TextField label='Password' required style={textFieldStyle} />
                </div>
                <Button type='submit' variant='outlined'>Login</Button>
            </form>
        </div>
    )
}