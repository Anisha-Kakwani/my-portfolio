import React, { Component } from 'react'

export default class Service extends Component{
    render(){
        return(

        <section id="service" class="parallax-section">
            <div class="container">
                <div class="row">

                    <div class="bg-yellow col-md-3 col-sm-6">
                            <div class="wow fadeInUp color-white service-thumb" data-wow-delay="0.8s">
                                <i class="fa fa-html5"></i>
                                    <h3>Software Development</h3>
                                    <p class="color-white">React JS, Angular, Polymer JS, Node JS</p>
                                    <p class="color-white">Visual Studio Code, Webstorm</p>
                            </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                            <div class="wow fadeInUp color-white service-thumb" data-wow-delay="1.2s">
                                <i class="fa fa-desktop"></i>
                                    <h3>Data Science</h3>
                                    <p class="color-white">Python, R</p>
                                    <p class="color-white">Spyder, Jupyter Notebooks</p>
                            </div>
                    </div>

                    <div class="bg-dark col-md-3 col-sm-6">
                            <div class="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
                                <i class="fa fa-mobile"></i>
                                    <h3>Mobile App Development</h3>
                                    <p class="color-white">Android App Development</p>
                                    <p class="color-white">Android Studio, Firebase</p>
                            </div>
                    </div>

                    <div class="bg-light col-md-3 col-sm-6">
                            <div class="wow fadeInUp service-thumb" data-wow-delay="1.8s">
                                <i class="fa fa-database"></i>
                                    <h3>Back End Processing</h3>
                                    <p>SQL, Postgres, Oracle, Elastic Search</p>
                                    <p>Postman</p>
                            </div>
                    </div>

                </div>
            </div>
        </section>
        )
    }
}