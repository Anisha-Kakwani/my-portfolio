import React, { Component } from 'react'

export default class Loader extends Component{
    render(){
        return(
        <div class="preloader">
            <div class="spinner">
                <span class="spinner-rotate"></span>
            </div>
        </div>)
    }
}