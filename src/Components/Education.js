import React, { Component } from 'react'

export default class Education extends Component{
    render(){
        return(

        <section id="education" className="parallax-section">
        <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-6">
            <div className="color-white education-thumb">
                <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                <h1>My Education</h1>
                <p className="color-white">Academic History</p>
                </div>
                <div className="wow fadeInUp color-white media" data-wow-delay="1.2s">
                <div className="media-object media-left">
                    <i className="fa fa-laptop" />
                </div>
                <div className="media-body">
                    <h3 className="media-heading">Master in Computer Science <small>2020 Sept - 2022 May</small></h3>
                    <p className="color-white">Pursuing Masters from University of North Carolina at Charlotte, USA</p>
                </div>
                </div>
                <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
                <div className="media-object media-left">
                    <i className="fa fa-laptop" />
                </div>
                <div className="media-body">
                    <h3 className="media-heading">Bachelor of Engineering <small>2013 Jun - 2017 May</small></h3>
                    <p className="color-white">Computer Engineering from VES Institute of Technology, India</p>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-sm-6">
            <div className="background-image education-img" />
            </div>
        </div>
        </div>
        </section>
        )
    }
}
