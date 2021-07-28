import React from 'react';
import {Homesection, Homeinformation, Hometitle,Homeinfo, Homedesc, Infospan, Homebtn} from './style.js'
const Home= () =>  {
    return(
        <Homesection>
            <div className="container">
                <Homeinformation>
                    <Hometitle className="margin-bottom">Asmaa Kamal</Hometitle>
                    <Homeinfo>Creative Director</Homeinfo>
                    <Homedesc>
                        Iam a professional <Infospan>Front-End Developer</Infospan>creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </Homedesc>
                    <Homebtn>Let's Begin</Homebtn>
                </Homeinformation>
            </div>
        </Homesection>
    )
}
export default Home