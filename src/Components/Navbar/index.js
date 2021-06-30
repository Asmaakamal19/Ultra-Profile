import React from 'react';
import {Navsection, Logo, LogoText, Ullist, ListItem, Links, Nlink, Label,Input } from './style.js'
const Navbar = ()=> {
    return(
        <Navsection>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <Input type="checkbox" id="nav" className="inputchecked" />
                <Label htmlFor="nav"/>
                <Ullist className="list">
                    <ListItem><Nlink to="/">Home</Nlink></ListItem>
                    <ListItem><Links href="#">Work</Links></ListItem>
                    <ListItem><Links href="#">Portfolio</Links></ListItem>
                    <ListItem><Links href="#">Resume</Links></ListItem>
                    <ListItem><Links href="#">About</Links></ListItem>
                    <ListItem><Nlink to="/contact">Contact</Nlink></ListItem>
                </Ullist>
            </div>
        </Navsection>
    )
}
export default Navbar