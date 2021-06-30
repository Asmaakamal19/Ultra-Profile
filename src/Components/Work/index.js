import React, {Component} from 'react';
import axios from 'axios';
import {Worksection,Worktitle,Span, Partsection, Icon, Parttitle, Line, Partdesc } from './style.js'
class Work extends Component {
    state= {
        works:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then(res=> {this.setState({works:res.data.works})})
    }
    render(){
        const{works} =this.state;
        const worklist = works.map((workItem)=>{
            return(
                <Partsection first={workItem.id} key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <Parttitle>{workItem.title}</Parttitle>
                    <Line />
                    <Partdesc>
                        {workItem.body}
                    </Partdesc>
                </Partsection>
            )
        })
        return(
            <Worksection>
                <div className="container">
                    <Worktitle><Span>My</Span> Work</Worktitle>
                    {worklist}
                </div>  
            </Worksection>  
        )
    }
}
export default Work