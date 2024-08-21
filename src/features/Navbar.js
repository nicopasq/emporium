import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import { Typography } from '@mui/material';
import { useSelector } from "react-redux";

export default function NavBar() {

    return (
        <div className="navBar">
            <div className="siteLinks">
                <NavLink to='/' className='navLink'>Home</NavLink>
                <NavLink to='/shop' className='navLink'>Shop</NavLink>
                <NavLink to='/about' className='navLink'>About</NavLink>
                <NavLink to='/contact' className='navLink'>Contact</NavLink>
            </div>
            <h1 style={{fontWeight:'400', fontSize:'60px', position:'relative', left:'32%', bottom:'4vh'}}>International Jewelry Suppliers</h1>

            <div className="socialsLinks">
                {/* <NavLink className='navLink' to='/login'>Login</NavLink>
                <NavLink className='navLink' to='/sign_up'>Sign-Up</NavLink> */}
            </div>
                <NavLink to='/cart' className='cart'><ShoppingCartIcon/></NavLink>
        </div>
    )
}