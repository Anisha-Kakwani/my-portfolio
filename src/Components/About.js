import React, { Component } from 'react'

export default class About extends Component{
    render(){
        return(
            <section id="about" className="parallax-section">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <div className="about-thumb">
                        <div className="wow fadeInUp section-title" data-wow-delay="0.4s">
                        <h1>About Me</h1>
                        <p className="color-yellow">Who am I ?</p>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay="0.8s">
                        <p>I am an IT professional from India, with a work experience of 3 years in Software Development.</p>
                        <p>I have mainly worked in Front-end technologies developing solutions for Oil & Gas industry. Spent some time creating and deploying internal frameworks for the development teams.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="background-image about-img" />
                    </div>
                    <div className="bg-yellow col-md-3 col-sm-6">
                    <div className="skill-thumb">
                        <div className="wow fadeInUp section-title color-white" data-wow-delay="1.2s">
                        <h1>My Skills</h1>
                        <p className="color-white">HTML CSS  . React JS  . Python . Tableau</p>
                        </div>
                        <div className=" wow fadeInUp skills-thumb" data-wow-delay="1.6s">
                        <strong>Frontend Development</strong>
                        <span className="color-white pull-right">90%</span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}} />
                        </div>
                        <strong>Backend Processing</strong>
                        <span className="color-white pull-right">60%</span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}} />
                        </div>
                        <strong>Data Science</strong>
                        <span className="color-white pull-right">50%</span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}} />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}