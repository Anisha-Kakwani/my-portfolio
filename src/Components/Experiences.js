import React, { Component } from 'react'

export default class Experiences extends Component{
    render(){
        return(

        <section id="experience" className="parallax-section">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                    <div className="background-image experience-img" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                    <div className="color-white experience-thumb">
                        <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                        <h1>My Experience</h1>
                        <p className="color-white">Previous companies and my tasks</p>
                        </div>
                        <div className="wow fadeInUp color-white media" data-wow-delay="1.2s">
                        <div className="media-object media-left">
                            <i className="fa fa-laptop" />
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">Software Engineering Specialist <small>2017 Jun - 2020 Jun</small></h3>
                            <p className="color-white">General Electric Oil & Gas </p>
                            <p className="color-white">Worked closely with the Engineering teams to develop & deploy software applications used in Oil Refineries & Distillation Units</p>

                        </div>
                        </div>
                        {/* <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
                        <div className="media-object media-left">
                            <i className="fa fa-laptop" />
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">Web Designer <small>2015 Oct - 2017 Jan</small></h3>
                            <p className="color-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        </div> */}
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}