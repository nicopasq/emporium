import React from "react";
import image from '../../images/misc/pages/aboutPgImage.avif'
import { Button, Typography } from "@mui/material";
import LoremIpsum from "react-lorem-ipsum";
import { useNavigate } from "react-router";

export default function About() {
    const navigate = useNavigate()

    return (
        <div>
            <img src={image} alt="aboutUsImage" className="aboutUsImage" />
            <div className="aboutUsContent">
                <Typography variant='h3'><strong>About Us</strong></Typography>
                <div className="aboutUsText">
                    <LoremIpsum p={2} random={false} />
                </div>
                <Button variant='outlined' color='secondary' sx={{marginTop:'10%', marginLeft:'40%'}} onClick={() => navigate('/contact')}>Get in touch!</Button>
            </div>
        </div>
    )
}