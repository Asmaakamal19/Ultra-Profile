import React,{useState , useEffect}  from 'react';
import {Profileskills, Profilediv,Profilelist,Profileitem,Skills,Span,Skillsdesc,Spantitel,Titel,Bar,Barparent,Bartitle,Barperc,Barparentspan} from './style.js'
import axios from 'axios'
const Profile= () => {
    const [ DataProfile , setDataProfile ] = useState([])
    useEffect ( () => {
        axios.get('js/data.json').then( res => { setDataProfile(res.data.profileskills) } )
    } , [] )
    const Profiledata = DataProfile.map( (Item) => {
        return (
            <Bar key={Item.id}>
                <Bartitle>{Item.title}</Bartitle>
                <Barperc>{Item.perc}</Barperc>
                <Barparent>
                    <Barparentspan sp1={Item.id===1}></Barparentspan>
                    <Barparentspan sp2={Item.id===2}></Barparentspan>
                    <Barparentspan sp3={Item.id===3}></Barparentspan>
                </Barparent>
            </Bar>       
        )
    } )
    return(
        <Profileskills>
            <div className="container">
                <Profilediv>
                    <Titel><Spantitel>My </Spantitel>Profile</Titel>
                    <Profilelist>
                        <Profileitem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </Profileitem>
                        <Profileitem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </Profileitem>
                        <Profileitem>
                            <Span>Address</Span>
                            Ain shams
                        </Profileitem>
                        <Profileitem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </Profileitem>
                        <Profileitem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </Profileitem>
                        <Profileitem>
                            <Span>Website</Span>
                            <Span web>www.google.com</Span>
                        </Profileitem>
                    </Profilelist>
                </Profilediv>
                <Skills>
                    <Titel>Some <Spantitel>skills</Spantitel></Titel>
                    <Skillsdesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing eProfileitemt. Quos praesentium blanditiis esse cupiditate, omnis simiProfileitemque.
                    </Skillsdesc>
                    {Profiledata}
                </Skills>
            </div>
        </Profileskills>
    )
}
export default Profile;