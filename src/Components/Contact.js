import React, { Component } from 'react'

export default class Contact extends Component{
    render(){
        return(
            <section id="contact" class="parallax-section">
            <div class="container">
                 <div class="row">
       
                      <div class="col-md-6 col-sm-6">
                           <div class="contact-img"></div>
                      </div>
       
                      <div class="bg-dark col-md-6 col-sm-6">
                           <div class="contact-thumb">
                                <div class="wow fadeInUp contact-info" data-wow-delay="0.6s">
                                    <h3 class="color-white" style={{textAlign:"center"}}>Would like to keep in touch!</h3>
                                    <h3 class="color-white" style={{textAlign:"center"}}>Find me</h3>
                                    <ul class="wow fadeInUp social-icon" data-wow-delay="2s">
                                    <li><a href="mailto:anishakakwani96@gmail.com" target="_blank" class="fa fa-envelope-o"></a></li>
                                    <li><a href="https://www.facebook.com/anisha.kakwani" target="_blank" class="fa fa-facebook"></a></li>
                                    <li><a href="https://twitter.com/Anisha19338610" target="_blank" class="fa fa-twitter"></a></li>
                                    <li><a href="https://www.linkedin.com/in/anisha-kakwani-66452b113/" target="_blank" class="fa fa-linkedin"></a></li>
                                    <li><a href="https://github.com/Anisha-Kakwani" target="_blank" class="fa fa-github"></a></li>
                                </ul>
                                </div>
                                <div class="wow fadeInUp footer-copyright" data-wow-delay="1.8s">
                                    <p style={{textAlign:"center"}}>Made with Love <i class="fa fa-heart"></i> |   &nbsp;Design inspired by ColorLib </p>
                                </div>

                               
                           </div>
                      </div>
       
                 </div>
            </div>
       </section>
       
        )
    }
}