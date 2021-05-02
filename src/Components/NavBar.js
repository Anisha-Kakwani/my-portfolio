import React, { Component } from 'react'

export default class NavBar extends Component{
    render(){
        return(
            <div class="navbar navbar-fixed-top custom-navbar" role="navigation">
                 <div class="container">        
                    <div class="navbar-header">
                        <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon icon-bar"></span>
                                <span class="icon icon-bar"></span>
                                <span class="icon icon-bar"></span>
                        </button>
                        <a href="#" class="navbar-brand" style={{paddingLeft:"195px"}}>Anisha Kakwani</a>
                    </div>

                    <div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav navbar-right">
                                <li><a href="#home" class="smoothScroll">Home</a></li>
                                <li><a href="#about" class="smoothScroll">About Me</a></li>
                                <li><a href="#experience" class="smoothScroll">Experiences</a></li>
                                <li><a href="#education" class="smoothScroll">Education</a></li>
                                <li><a href="#contact" class="smoothScroll">Contact</a></li>
                        </ul>
                    </div>
                 </div>
            </div>
        )
    }
}