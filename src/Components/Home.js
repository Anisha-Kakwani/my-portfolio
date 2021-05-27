import React, { Component } from 'react'

export default class Home extends Component{
    render(){
        return(
            <section id="home" class="parallax-section">
     <div class="container">
          <div class="row">

               <div class="col-md-6 col-sm-6">
                    <div class="home-img"></div>
               </div>

               <div class="col-md-6 col-sm-6">
                    <div class="home-thumb">
                         <div class="section-title">
                              <h4 class="wow fadeInUp" data-wow-delay="0.3s">welcome to my website</h4>
                              <h1 class="wow fadeInUp" data-wow-delay="0.6s">Hello, I am <strong>Anisha</strong> currently based in Charlotte, North Carolina.</h1>
                              <p class="wow fadeInUp" data-wow-delay="0.9s">I'm a Software Developer. Passionate about coding, Technology Enthusiast. Looking for some interesting work in the areas of Front-End Development and Data Science. Willing to relocate and explore different domains.</p>
                              
                              <a href="https://drive.google.com/file/d/1NCNNXNUb9Qi5nemTVJU5JV1WAm0cs973/view?usp=sharing" target="_blank" class="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s">My Resume</a>
                              
                         </div>
                    </div>
               </div>


          </div>
     </div>
     </section>
        // <section id="home" classname="parallax-section">
        //     <div className="container">
        //       <div className="row">
        //         <div classname="col-md-6 col-sm-6">
        //           <div classname="home-img" />
        //         </div>
        //         <div className="col-md-6 col-sm-6">
        //           <div className="home-thumb">
        //             <div className="section-title">
        //               <h4 className="wow fadeInUp" data-wow-delay="0.3s">welcome to my website</h4>
        //               <h1 className="wow fadeInUp" data-wow-delay="0.6s">Hello, I am <strong>Anisha</strong> currently based in Charlotte, North Carolina.</h1>
        //               <p className="wow fadeInUp" data-wow-delay="0.9s">Donec auctor arcu at efficitur lacinia. Praesent bibendum efficitur ipsum, et mattis tellus interdum in. Ut a dictum purus. Vestibulum non pellentesque felis, sed dignissim urna. Vestibulum id accumsan quam.</p>
        //               <a href="#about" className="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s">Get Started</a>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        // </section>
        )
    }
}