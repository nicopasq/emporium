import React from "react";
import { Button, Chip, Typography } from "@mui/material";
import heroRing from '../../images/misc/pages/home/heroRing.jpg'
import { Link, useNavigate } from "react-router-dom";
import ringAd from '../../images/rings/sterling_flower_diamond.png'
import { useDispatch } from "react-redux";
import { setType } from "../../slices/typeParamSlice";

export default function Home() {
    const typographySx = { fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif', fontWeight: '300' }
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleClick(type){
        navigate('/shop')
        dispatch(setType(type))
    }

    return (
        <div >
            <div className="heroDiv">
                <div className="heroText">
                    <Typography variant="h2" sx={typographySx}>Hand Crafted Jewelry</Typography>
                    <Typography variant="h2" sx={typographySx}>Exquisite Gems</Typography>
                    <Typography variant="h2" sx={typographySx}>Unique Designs</Typography>
                </div>
                <img src={heroRing} alt="hero Image" />
            </div>
            <div className="chips">
                <Chip label='Shop All Jewelry' variant="outlined" color="warning" sx={{marginRight:'3%'}} onClick={() => handleClick('all')}/>
                <Chip label='Shop Rings' variant="outlined" color="primary" sx={{marginRight:'3%'}} onClick={(e) => handleClick('ring')}/>
                <Chip label='Shop Necklaces' variant="outlined" color="secondary" sx={{marginRight:'3%'}} onClick={(e) => handleClick('necklace')}/>
                <Chip label='Shop Earrings' variant="outlined" color="success" sx={{marginRight:'3%'}} onClick={(e) => handleClick('earring')}/>
            </div>
        </div>
    )
}