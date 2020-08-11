import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'
export default class landingpage extends Component {
    render() {
        return (
            <div style={{width:"100vh", margin:"auto"}}>
                   <Grid className="landing-grid">
                   <Cell col={12}>
                       <img src="https://image.shutterstock.com/image-vector/avatar-male-profile-gray-person-260nw-538708681.jpg" alt="avatar" className="avatar-img"/>
                   <div className="banner-text">
                       <h1>Full Stack Developer</h1>
                       <hr/>
                       <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>
                   <div className="social-links">

                       {/* Linkedin */}
                       <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                       </a>
                       {/* Github */}
                       <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-github-square"></i>
                       </a>
                       {/* Freecodecamp */}
                       <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-free-code-camp"></i>
                       </a>
                         {/* Freecodecamp */}
                         <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-youtube-square"></i>
                       </a>



                   </div>
                   </div>
                   
                   </Cell>
                   </Grid>
            </div>
        )
    }
}
