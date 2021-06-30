import React, {Component} from 'react';
import About from './../About/'
import Footer from './../Footer'
import Work from './../Work/'
import Socialmedia from './../social media'
import Profile from './../profile'
import Portfolio from './../Portfolio'
import Home from './../Home'
export default class Index extends Component {
    render(){
        return(
            <div>
                <Home />
                <Work />
                <Portfolio />
                <Profile />
                <About />
                <Socialmedia />
                <Footer />
            </div>
        )
    }
}