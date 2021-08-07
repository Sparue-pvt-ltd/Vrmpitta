import React, { Component } from 'react'

export class Page extends Component {
    render() {
        return (
            <div id="page" class="root">

                {/* HEADER */}

                <header id="header" class="header tra-menu navbar-light">
                    <div class="header-wrapper">

                        {/* <!-- MOBILE HEADER --> */}
                        <div class="wsmobileheader clearfix">
                            {/* <a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a> */}
                            <span class="smllogo smllogo-black"><img src="images/logo.png" width="162" height="40" alt="mobile-logo"/></span>
                            <span class="smllogo smllogo-white"><img src="images/logo-white.png" width="162" height="40" alt="mobile-logo"/></span>
                            <a href="tel:123456789" class="callusbtn"><i class="fas fa-phone"></i></a>
                         </div>
    
    
                          {/* <!-- NAVIGATION MENU --> */}
                          <div class="wsmainfull menu clearfix">
                            <div class="wsmainwp clearfix">
    
    
                                {/* <!-- LOGO IMAGE -->
                                <!-- For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 334 x 80 pixels) --> */}
                                <div class="desktoplogo"><a href="#hero-4" class="logo-black"><img src="images/logo.png" width="162" height="40" alt="header-logo"/></a></div>
                                <div class="desktoplogo"><a href="#hero-4" class="logo-white"><img src="images/logo-white.png" width="162" height="40" alt="header-logo"/></a></div>
    
    
                                {/* <!-- MAIN MENU --> */}
                                  <nav class="wsmenu clearfix blue-header">
                                    <ul class="wsmenu-list">
    
    
                                        {/* <!-- SIMPLE NAVIGATION LINK --> */}
                                        <li class="nl-simple" aria-haspopup="true"><a href="about-us.html">About</a></li>
    
    
                                          {/* <!-- DROPDOWN MENU --> */}
                                        <li aria-haspopup="true"><a href="#">Pages <span class="wsarrow"></span></a>
                                            <div class="wsmegamenu clearfix halfmenu">
                                                  <div class="container-fluid">
                                                    <div class="row">
    
                                                        {/* <!-- Links --> */}
                                                        <ul class="col-lg-6 col-md-12 col-xs-12 link-list">
                                                            <li><a href="about-us.html">About Us Page</a></li>
                                                            <li><a href="services.html">Services Page</a></li>
                                                            <li><a href="service-details.html">Service Details Page</a></li>
                                                            <li><a href="case-studies-1.html">Case Studies #1</a></li>
                                                            <li><a href="case-studies-2.html">Case Studies #2</a></li>
                                                            <li><a href="project-details.html">Single Project Page</a></li>	
                                                            <li><a href="reviews.html">Customers Reviews</a></li>					                    
                                                          </ul>
    
                                                          {/* <!-- Links --> */}
                                                        <ul class="col-lg-6 col-md-12 col-xs-12 link-list">
                                                            <li><a href="resources.html">Resources Page</a></li>
                                                            <li><a href="pricing.html">Pricing Page</a></li>
                                                            <li><a href="team.html">Our Team Page</a></li>
                                                            <li><a href="faqs.html">FAQs Page</a></li>
                                                            <li><a href="blog-listing.html">Blog Listing Page</a></li>
                                                            <li><a href="single-post.html">Single Blog Post</a></li>
                                                            <li><a href="contats.html">Contact Us Page</a></li>
                                                        </ul>
    
                                                    </div>
                                                  </div>
                                            </div>
                                          {/* </li>	<!-- END DROPDOWN MENU --> */}
    
    
                                        {/* <!-- SIMPLE NAVIGATION LINK --> */}
                                        <li class="nl-simple" aria-haspopup="true"><a href="services.html">Services</a></li>
    
    
                                        {/* <!-- MEGAMENU --> */}
                                          <li aria-haspopup="true"><a href="#">Mega Menu <span class="wsarrow"></span></a>
                                            <div class="wsmegamenu clearfix">
                                                 <div class="container">
                                                       <div class="row">
    
    
                                                           {/* <!-- MEGAMENU QUICK LINKS --> */}
                                                        <div class="col-md-12 col-lg-3">
    
                                                            {/* <!-- Title --> */}
                                                            <h3 class="title">Marketing Solutions:</h3>  
    
                                                               <ul class="link-list">   						                    
                                                                <li><a href="#">Search Engine Optimization</a></li>
                                                                <li><a href="#">Web Design & Development</a></li>	
                                                                <li><a href="#">Social Media Marketing</a></li>							                
                                                                <li><a href="#">Pay per Click (PPC)</a></li>
                                                                <li><a href="#">Video Production</a></li>
                                                                <li><a href="#">Content Marketing</a></li>	
                                                                <li><a href="#">Email Marketing Campaigns</a></li>	
                                                            </ul>
    
                                                        {/* </div>	<!-- END MEGAMENU QUICK LINKS --> */}
    
    
                                                        {/* <!-- MEGAMENU FEATURED NEWS --> */}
                                                        <div class="col-md-12 col-lg-5">
    
                                                            {/* <!-- Title --> */}
                                                            <h3 class="title">Featured News:</h3>
    
                                                            {/* <!-- Image --> */}
                                                            <div class="fluid-width-video-wrapper mb-15"><img src="images/blog/featured-news.jpg" alt="featured-news" /></div>
    
                                                            {/* <!-- Text --> */}
                                                            <h5 class="h5-md">
                                                                <a href="single-post.html">Things to know while performing SEO for multiple location
                                                                     businesses
                                                                </a>
                                                            </h5>
                                                            <p class="wsmwnutxt">Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor
                                                               tempus feugiat dolor impedit magna...
                                                            </p>
    
                                                        </div>

                                                        {/* <!-- END MEGAMENU FEATURED NEWS --> */}
    
    
                                                        {/* <!-- MEGAMENU LATEST NEWS -->
                                                        <div class="col-md-12 col-lg-4"> */}
    
                                                            {/* <!-- Title --> */}
                                                            <h3 class="title">Latest News:</h3>
    
                                                            {/* <!-- Latest News --> */}
                                                            <ul class="latest-news">
                                            
                                                                {/* <!-- Post #1 --> */}
                                                                <li class="clearfix d-flex align-items-center">
    
                                                                    {/* <!-- Image --> */}
                                                                    <img class="img-fluid" src="images/blog/latest-post-1.jpg" alt="blog-post-preview" />
    
                                                                    {/* <!-- Text --> */}
                                                                    <div class="post-summary">
                                                                        <a href="single-post.html">Etiam sapien risus ante auctor tempus an accumsan...</a>
                                                                        <p>03 hours ago</p>
                                                                    </div>
    
                                                                </li>
                                                                
                                                                {/* <!-- Post #2 --> */}
                                                                <li class="clearfix d-flex align-items-center">
    
                                                                    {/* <!-- Image --> */}
                                                                    <img class="img-fluid" src="images/blog/latest-post-2.jpg" alt="blog-post-preview" />
    
                                                                    {/* <!-- Text --> */}
                                                                    <div class="post-summary">
                                                                        <a href="single-post.html">Blandit tempor sapien ipsum, porta risus auctor justo...
                                                                        </a>
                                                                        <p>Feb 02, 2020</p>
                                                                    </div>
    
                                                                </li>
                                                                
                                                                {/* <!-- Post #3 --> */}
                                                                <li class="clearfix d-flex align-items-center">
    
                                                                    {/* <!-- Image --> */}
                                                                    <img class="img-fluid" src="images/blog/latest-post-3.jpg" alt="blog-post-preview" />
    
                                                                    {/* <!-- Text --> */}
                                                                    <div class="post-summary">
                                                                        <a href="single-post.html">Cursus risus an auctor risus laoreet undo auctor varius...</a>
                                                                        <p>Jan 29, 2020</p>
                                                                    </div>
    
                                                                </li>
                                                            </ul>
                                                        </div>	
                                                        {/* <!-- END MEGAMENU LATEST NEWS --> */}
    
                                                        
                                                    </div>  
                                                    {/* <!-- End row -->	 */}
                                                </div>  
                                                {/* <!-- End container -->	 */}
                                            </div>  
                                            {/* <!-- End wsmegamenu -->	 */}
                                        </li>	
                                        {/* <!-- END MEGAMENU --> */}
    
                                        
                                        {/* <!-- SIMPLE NAVIGATION LINK --> */}
                                        <li class="nl-simple" aria-haspopup="true"><a href="case-studies-2.html">Case Studies</a></li>
    
    
                                        {/* <!-- SIMPLE NAVIGATION LINK --> */}
                                        <li class="nl-simple" aria-haspopup="true"><a href="contacts.html">Contacts</a></li>
    
    
                                        {/* <!-- HEADER PHONE NUMBER --> */}
                                        <li class="nl-simple primary-scroll" aria-haspopup="true">
                                            <a href="tel:123456789" class="last-link last-link-number">
                                                <i class="fas fa-phone-square-alt"></i> 855-569-7890
                                            </a>
                                        </li>
    
    
                                        {/* <!-- HEADER BUTTON 
                                        <li class="nl-simple" aria-haspopup="true">
                                            <a href="#" class="btn btn-primary tra-white-hover last-link">Get In Touch</a>
                                        </li> --> */}
                                    
    </li>
                                    </ul>
                                </nav>	
                                {/* <!-- END MAIN MENU --> */}
    
                            </div>
                        </div>	
                        {/* <!-- END NAVIGATION MENU --> */}
    
    
                    </div>     
                    {/* <!-- End header-wrapper --> */}
                </header>	
                {/* <!-- END HEADER --> */}
    
    
    
{/*     
                <!-- HERO-4
                ============================================= -->	 */}
                <section id="hero-4" class="bg-fixed hero-section division">
                    <div class="container">	
                        <div class="row">
    
    
                            {/* <!-- HERO TEXT --> */}
                            <div class="col-xl-10 offset-xl-1">
                                <div class="hero-txt text-center white-color">
    
                                    {/* <!-- Title --> */}
                                    <h3>Get more sales with SEO, PPC, and Email Marketing</h3>
    
                                    {/* <!-- Text --> */}
                                    <p>Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue luctus 
                                       magna dolor luctus undo magna an dolor
                                    </p>
    
                                    {/* <!-- HERO FORM --> */}
                                    <div class="form-holder text-center">
                                        <form name="seoForm" class="row seo-form">
                                                                                                
                                            {/* <!-- Hero Form Input --> */}
                                            <div id="input-email" class="col-lg-4">
                                                <input type="text" name="email" class="form-control email" placeholder="Email Address*"/> 
                                            </div>
    
                                            {/* <!-- Hero Form Input --> */}
                                            <div id="input-url" class="col-lg-5">
                                                <input type="url" name="url" class="form-control url" placeholder="Your Website*" value="http://www./"/> 
                                            </div>
    
                                            {/* <!-- Hero Form Button --> */}
                                            <div class="col-lg-3 form-btn">	
                                                <button type="submit" class="btn btn-yellow black-hover submit">Let's Started</button>	
                                            </div>
                                                                                                                                    
                                            {/* <!-- Hero Form Message --> */}
                                            <div class="col-lg-12 seo-form-msg"><span class="loading"></span></div>	
                                                                                                    
                                        </form>	
                                     </div>	
    
                                     {/* <!-- HERO LINKS --> */}
                                    <div class="hero-links">
                                        <span>No credit card required</span>
                                        <span>* <a href="#">See FAQ</a> for more details</span>
                                        <span><a href="#">Privacy Policy</a></span>	
                                    </div>
    
                                </div>
                            </div>	
                            {/* <!-- END HERO TEXT --> */}
    
    
                        </div>    
                        {/* <!-- End row --> */}
                    </div>	   
                    {/* <!-- End container --> 	 */}
                </section>	
                {/* <!-- END HERO-4 -->	 */}
    
    
    
    
                {/* <!-- ABOUT-2
                ============================================= --> */}
                <section id="about-2" class="pt-60 pb-60 about-section division">
                    <div class="container">
                        <div class="row d-flex align-items-center">
    
    
                            {/* <!-- ABOUT TEXT --> */}
                             <div class="col-md-7 col-lg-6">
                                 <div class="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">
    
                                     {/* <!-- Title -->	 */}
                                    <h4 class="h4-xl">We're providing the best SEO services for your website</h4>
    
                                    {/* <!-- List --> */}
                                    <ul class="txt-list">
                                                
                                        <li>Vitae auctor integer congue magna at pretium blandit porta justo integer. Feugiat a 
                                           ligula rutrum luctus primis ultrice
                                        </li>
    
                                        <li>Integer congue magna at pretium purus a pretium ligula rutrum and luctus risus eros dolor 
                                           auctor ipsum blandit purus vehicula magna luctus tempor quisque			
                                        </li>
    
                                    </ul>
    
                                    {/* <!-- SMALL STATISTIC --> */}
                                    <div class="small-statistic">
                                        <div class="row">	
    
                                            {/* <!-- STATISTIC BLOCK #1 --> */}
                                            <div class="col-sm-6">					
                                                <div class="statistic-block">							
                                                    <h5 class="statistic-number primary-color">4,<span class="count-element">379</span></h5>
                                                    <p>Websites Improved</p>
                                                    <p class="p-sm">An enim nullam tempor sapien gravida donec blandit ipsum</p>			
                                                </div>								
                                            </div>
    
                                            {/* <!-- STATISTIC BLOCK #2 --> */}
                                            <div class="col-sm-6">						
                                                <div class="statistic-block">								
                                                    <h5 class="statistic-number primary-color"><span class="count-element">99</span>%</h5>
                                                    <p>Customer Satisfaction</p>
                                                    <p class="p-sm">An enim nullam tempor sapien gravida donec blandit ipsum</p>	
                                                </div>							
                                            </div>
    
                                        </div>	
                                    </div>	
                                    {/* <!-- END SMALL STATISTIC --> */}
    
                                 </div>
                             </div>	  
                             {/* <!-- END ABOUT TEXT --> */}
    
    
                             {/* <!-- ABOUT IMAGE --> */}
                            <div class="col-md-5 col-lg-6">
                                <div class="img-block pl-25 mb-40 wow fadeInRight" data-wow-delay="0.6s">
                                    <img class="img-fluid" src="images/image-02.png" alt="about-image"/>
                                 </div>
                            </div>
    
    
                        </div>    
                        {/* <!-- End row --> 	 */}
                    </div>	   
                    {/* <!-- End container --> 	 */}
                </section>	
                {/* <!-- End ABOUT-2 -->  */}
    
    
    
    
                {/* <!-- SERVICES-5
                ============================================= --> */}
                <section id="services-5" class="bg-lightgrey wide-60 services-section division">
                    <div class="container">
                         <div class="row">
                             
    
                             {/* <!-- SERVICE BOX #1 --> */}
                             <div class="col-md-4">
                                 <div class="sbox-5 icon-md wow fadeInUp" data-wow-delay="0.4s">	
    
                                     {/* <!-- Icon -->  */}
                                    <img class="img-65" src="images/icons/hierarchical-structure-1.png" alt="feature-icon" />
    
                                    {/* <!-- Text --> */}
                                    <div class="sbox-5-txt">
        
                                        {/* <!-- Title --> */}
                                        <h5 class="h5-lg">Experienced and knowledgeable team</h5>
                                            
                                        {/* <!-- Text --> */}
                                        <p class="grey-color">Gravida magna luctus and augue tempor quisque at laoreet turpis and 
                                           viverra augue dictum tempor varius at posuere imperdiet
                                        </p>
    
                                    </div>
    
                                 </div>
                             </div>
    
    
                             {/* <!-- SERVICE BOX #2 --> */}
                             <div class="col-md-4">
                                 <div class="sbox-5 icon-md wow fadeInUp" data-wow-delay="0.6s">	
    
                                     {/* <!-- Icon -->  */}
                                    <img class="img-65" src="images/icons/trophy-1.png" alt="feature-icon" />
    
                                    {/* <!-- Text --> */}
                                    <div class="sbox-5-txt">
        
                                        {/* <!-- Title --> */}
                                        <h5 class="h5-lg">Transparent and trustworthy services</h5>
                                            
                                        {/* <!-- Text --> */}
                                        <p class="grey-color">Gravida magna luctus and augue tempor quisque at laoreet turpis and 
                                           viverra augue dictum tempor varius at posuere imperdiet
                                        </p>
    
                                    </div>
    
                                 </div>
                             </div>	
    
    
                             {/* <!-- SERVICE BOX #3 --> */}
                             <div class="col-md-4">
                                 <div class="sbox-5 icon-md wow fadeInUp" data-wow-delay="0.8s">	
    
                                     {/* <!-- Icon -->  */}
                                    <img class="img-65" src="images/icons/analytics-3.png" alt="feature-icon" />
    
                                    {/* <!-- Text --> */}
                                    <div class="sbox-5-txt">
        
                                        {/* <!-- Title --> */}
                                        <h5 class="h5-lg">Quality Traffic. Measurable Results</h5>
                                            
                                        {/* <!-- Text --> */}
                                        <p class="grey-color">Gravida magna luctus and augue tempor quisque at laoreet turpis and 
                                           viverra augue dictum tempor varius at posuere imperdiet
                                        </p>
    
                                    </div>
    
                                 </div>
                             </div>
    
    
                        </div>  
                        {/* <!-- End row -->	 */}
                     </div>	   
                     {/* <!-- End container -->		 */}
                </section>	
                {/* <!-- END SERVICES-5 --> */}
    
    
    
    
                {/* <!-- CONTENT-2
                ============================================= --> */}
                <section id="content-2" class="wide-60 content-section division">
                    <div class="container">
                        <div class="row d-flex align-items-center">
    
    
                            {/* <!-- IMAGE BLOCK --> */}
                            <div class="col-md-5 col-lg-6">
                                <div class="img-block pr-25 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                                    <img class="img-fluid" src="images/image-03.png" alt="content-image"/>
                                </div>
                            </div>
    
    
                            {/* <!-- TEXT BLOCK -->	 */}
                            <div class="col-md-7 col-lg-6">
                                <div class="txt-block pc-25 mb-40 wow fadeInRight" data-wow-delay="0.4s">
    
                                    {/* <!-- Title -->	 */}
                                    <h4 class="h4-xl">Integrated marketing solutions that business growth</h4>
    
                                    {/* <!-- Text --> */}
                                    <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer and 
                                       odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus 
                                       and ultrice a gravida lectus
                                    </p> 
    
                                    {/* <!-- List --> */}
                                    <ul class="ico-list mb-10">	
                                        <li><i class="fas fa-check grey-color"></i> <span>Vitae auctor integer congue magna at pretium</span></li>
                                        <li><i class="fas fa-check grey-color"></i> <span>Integer congue magna and pretium purus ligula</span></li>
                                        <li><i class="fas fa-check grey-color"></i> <span>Sagittis congue augue egestas volutpat egestas</span></li>
                                    </ul>
    
                                    {/* <!-- Button --> */}
                                    <a href="resources.html" class="btn btn-md btn-primary tra-black-hover">Our Resources</a>
    
                                </div>
                            </div>	
                            {/* <!-- END TEXT BLOCK -->	 */}
    
    
                        </div>	  
                        {/* <!-- End row -->	 */}
                    </div>     
                    {/* <!-- End container --> */}
                </section>	
                {/* <!-- END CONTENT-2 --> */}
    
    
    
    
                {/* <!-- CONTENT-4
                ============================================= --> */}
                <section id="content-4" class="bg-primary bg-map pt-100 content-section division">
                    <div class="container white-color">
                        <div class="row d-flex align-items-center">
    
    
                            {/* <!-- TEXT BLOCK -->		 */}
                            <div class="col-md-7 col-lg-6">
                                <div class="txt-block pc-25 wow fadeInLeft" data-wow-delay="0.4s">
    
                                    {/* <!-- Title -->	 */}
                                    <h4 class="h4-xl">We will help your business achieve predictable growth</h4>
    
                                    {/* <!-- List --> */}
                                    <ul class="txt-list mb-15">
                                                
                                        <li>Vitae auctor integer congue magna at pretium blandit porta justo integer. Feugiat a 
                                           ligula rutrum luctus primis ultrice
                                        </li>
    
                                        <li>Integer congue magna at pretium purus a pretium ligula rutrum and luctus risus eros dolor 
                                           auctor ipsum blandit purus vehicula magna luctus tempor quisque			
                                        </li>
    
                                        <li>Congue magna at pretium purus a pretium ligula rutrum and luctus risus luctus neque purus 
                                            posuere neque at dolor primis
                                        </li>
    
                                    </ul>
    
                                    {/* <!-- Button --> */}
                                    <a href="pricing.html" class="btn btn-md btn-yellow tra-white-hover">Our Pricing Packages</a>
    
                                </div>	
                            </div>	
                            {/* <!-- END TEXT BLOCK -->		 */}
    
    
                            {/* <!-- IMAGE BLOCK -->	 */}
                            <div class="col-md-5 col-lg-6">
                                <div class="content-4-img wow fadeInRight" data-wow-delay="0.6s">
                                    <img class="img-fluid" src="images/image-11.png" alt="content-image"/>
                                </div>	
                            </div>
    
    
                        </div>	  
                        {/* <!-- End row -->	 */}
                    </div>     
                    {/* <!-- End container --> */}
                </section>
                {/* <!-- END CONTENT-4 -->
     */}
    
    
    
                {/* <!-- SERVICES-4
                ============================================= --> */}
                <section id="services-4" class="wide-60 services-section division">
                    <div class="container">
    
    
                        {/* <!-- SECTION TITLE -->	 */}
                        <div class="row">	
                            <div class="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">	
    
                                {/* <!-- Title 	-->	 */}
                                <h3 class="h3-lg">SEO Management & Strategy Services</h3>	
    
                                {/* <!-- Text -->	 */}
                                <p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero 
                                   tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                                </p>
                                    
                            </div>
                        </div>
    
    
                        {/* <!-- SERVICE BOXES --> */}
                        <div class="services-boxes">
                             <div class="row">
                             
{/*     
                                 <!-- SERVICE BOX #1 --> */}
                                 <div class="col-md-6">
                                     <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="0.4s">	
    
                                         {/* <!-- Icon -->  */}
                                        <img class="img-65" src="images/icons/analytics-2.png" alt="feature-icon" />
    
                                        {/* <!-- Text --> */}
                                        <div class="sbox-4-txt">
            
                                            {/* <!-- Title --> */}
                                            <h5 class="h5-lg">Advanced Analytics Review</h5>
                                                
                                            {/* <!-- Text --> */}
                                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at 
                                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere vehicula imperdiet 
                                               varius undo viverra rutrum dignissim
                                            </p>
    
                                        </div>
    
                                     </div>
                                 </div>
    
    
                                 {/* <!-- SERVICE BOX #2 --> */}
                                 <div class="col-md-6">
                                     <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="0.6s">	
    
                                         {/* <!-- Icon -->  */}
                                        <img class="img-65" src="images/icons/email-1.png" alt="feature-icon" />
    
                                        {/* <!-- Text --> */}
                                        <div class="sbox-4-txt">
            
                                            {/* <!-- Title --> */}
                                            <h5 class="h5-lg">Email Marketing Campaigns</h5>
                                                
                                            {/* <!-- Text --> */}
                                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at 
                                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere vehicula imperdiet 
                                               varius undo viverra rutrum dignissim
                                            </p>
    
                                        </div>
    
                                     </div>
                                 </div>	
    
    
                                 {/* <!-- SERVICE BOX #3 --> */}
                                 <div class="col-md-6">
                                     <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="0.8s">	
    
                                         {/* <!-- Icon -->  */}
                                        <img class="img-65" src="images/icons/video-player-1.png" alt="feature-icon" />
    
                                        {/* <!-- Text --> */}
                                        <div class="sbox-4-txt">
            
                                            {/* <!-- Title --> */}
                                            <h5 class="h5-lg">Video Marketing</h5>
                                                
                                            {/* <!-- Text --> */}
                                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at 
                                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere vehicula imperdiet 
                                               varius undo viverra rutrum dignissim
                                            </p>
    
                                        </div>
    
                                     </div>
                                 </div>
    
    
                                 {/* <!-- SERVICE BOX #4 --> */}
                                 <div class="col-md-6">
                                     <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="1s">	
    
                                         {/* <!-- Icon -->  */}
                                        <img class="img-65" src="images/icons/price-tag.png" alt="feature-icon" />
    
                                        {/* <!-- Text --> */}
                                        <div class="sbox-4-txt">
            
                                            {/* <!-- Title --> */}
                                            <h5 class="h5-lg">Search Engine Optimization (SEO)</h5>
                                                
                                            {/* <!-- Text --> */}
                                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at 
                                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere vehicula imperdiet 
                                               varius undo viverra rutrum dignissim
                                            </p>
    
                                        </div>
    
                                     </div>
                                 </div>
    
    
                                 {/* <!-- SERVICE BOX #5 --> */}
                                 <div class="col-md-6">
                                     <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="1.2s">	
    
                                         {/* <!-- Icon -->  */}
                                        <img class="img-65" src="images/icons/pay-per-click-3.png" alt="feature-icon" />
    
                                        {/* <!-- Text --> */}
                                        <div class="sbox-4-txt">
            
                                            {/* <!-- Title --> */}
                                            <h5 class="h5-lg">Pay Per Click (PPC)</h5>
                                                
                                            {/* <!-- Text --> */}
                                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at 
                                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere vehicula imperdiet 
                                               varius undo viverra rutrum dignissim
                                            </p>
    
                                        </div>
    
                                     </div>
                                 </div>
    
    
                                 {/* <!-- SERVICE BOX #6 --> */}
                                 <div class="col-md-6">
                                     <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="1.4s">	
    
                                         {/* <!-- Icon -->  */}
                                        <img class="img-65" src="images/icons/chat.png" alt="feature-icon" />
    
                                        {/* <!-- Text --> */}
                                        <div class="sbox-4-txt">
            
                                            {/* <!-- Title --> */}
                                            <h5 class="h5-lg">Strategy and Analytics Consulting</h5>
                                                
                                            {/* <!-- Text --> */}
                                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at 
                                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere vehicula imperdiet 
                                               varius undo viverra rutrum dignissim
                                            </p>
    
                                        </div>
    
                                     </div>
                                 </div>
    
    
                                 {/* <!-- SERVICE BOX #7 --> */}
                                 <div class="col-md-6">
                                     <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="1.6s">	
    
                                         {/* <!-- Icon -->  */}
                                        <img class="img-65" src="images/icons/computer-1.png" alt="feature-icon" />
    
                                        {/* <!-- Text --> */}
                                        <div class="sbox-4-txt">
            
                                            {/* <!-- Title --> */}
                                            <h5 class="h5-lg">Content Marketing</h5>
                                                
                                            {/* <!-- Text --> */}
                                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at 
                                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere vehicula imperdiet 
                                               varius undo viverra rutrum dignissim
                                            </p>
    
                                        </div>
    
                                     </div>
                                 </div>
    
    
                                 {/* <!-- SERVICE BOX #8 --> */}
                                 <div class="col-md-6">
                                     <div class="sbox-4 icon-md wow fadeInUp" data-wow-delay="1.8s">	
    
                                         {/* <!-- Icon -->  */}
                                        <img class="img-65" src="images/icons/responsive.png" alt="feature-icon" />
    
                                        {/* <!-- Text --> */}
                                        <div class="sbox-4-txt">
            
                                            {/* <!-- Title --> */}
                                            <h5 class="h5-lg">Website Design & Development</h5>
                                                
                                            {/* <!-- Text --> */}
                                            <p class="grey-color">Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at 
                                                augue, viverra and augue eget dictum tempor. Pulvinar porta blandit posuere vehicula imperdiet 
                                               varius undo viverra rutrum dignissim
                                            </p>
    
                                        </div>
    
                                     </div>
                                 </div>
    
    
                            </div>  
                            {/* <!-- End row -->	 */}
                         </div>	 
                         {/* <!-- END SERVICE BOXES -->	 */}
    
    
                     </div>	   
                     {/* <!-- End container -->		 */}
                </section>	
                {/* <!-- END SERVICES-4 --> */}
    
    
    
    
                {/* <!-- PROJECTS-1
                ============================================= --> */}
                <section id="projects-1" class="bg-lightgrey wide-60 projects-section division">
                    <div class="container">
    
    
                        {/* <!-- SECTION TITLE -->	 */}
                        <div class="row">	
                            <div class="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">
    
                                {/* <!-- Title 	-->	 */}
                                <h3 class="h3-lg">We Leave Lasting Impressions</h3>	
    
                                {/* <!-- Text -->	 */}
                                <p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero 
                                   tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                                </p>
                                    
                            </div>
                        </div>
    
    
                        {/* <!-- PROJECTS IMAGES HOLDER --> */}
                        <div class="row">	
    
    
                            {/* <!-- IMAGE #1 --> */}
                            <div class="col-md-6 col-lg-4">
                                <div class="project-1 wow fadeInUp" data-wow-delay="0.4s">
                                      <a href="project-details.html">
    
                                        {/* <!-- Brand Logo --> */}
                                        <img class="img-fluid" src="images/brand-1.png" alt="project-logo" />
    
                                        {/* <!-- Category -->										 */}
                                        <p>Burger Restaurant Website</p>										
    
                                        {/* <!-- Project Data --> */}
                                        <div class="project-data">
                                        
                                            <div class="pd-box d-flex align-items-center clearfix">
                                                <h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 270%</h5>
                                                <p class="p-sm">Increase in Website Traffic</p>
                                            </div>
    
                                            <div class="pd-box d-flex align-items-center ">
                                                <h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 110%</h5>
                                                <p class="p-sm">Increase in Leads</p>
                                            </div>
                                        </div>
    
                                    </a>
                                </div>
                            </div>	
                            {/* <!-- END IMAGE #1 -->	 */}
    
    
                            {/* <!-- IMAGE #2 --> */}
                            <div class="col-md-6 col-lg-4">
                                  <div class="project-1 wow fadeInUp" data-wow-delay="0.6s">
                                      <a href="project-details.html">
    
                                        {/* <!-- Brand Logo --> */}
                                        <img class="img-fluid" src="images/brand-7.png" alt="project-logo" />
    
                                        {/* <!-- Category -->										 */}
                                        <p>Travel Website</p>
    
                                        {/* <!-- Project Data --> */}
                                        <div class="project-data">
                                        
                                            <div class="pd-box d-flex align-items-center clearfix">
                                                <h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 340%</h5>
                                                <p class="p-sm">Increase in Website Traffic</p>
                                            </div>
    
                                            <div class="pd-box d-flex align-items-center ">
                                                <h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 178%</h5>
                                                <p class="p-sm">Increase in Leads</p>
                                            </div>
                                        </div>
    
                                    </a>
                                </div>
                            </div>	
                            {/* <!-- END IMAGE #2 -->	 */}
    
    
                            {/* <!-- IMAGE #3 --> */}
                            <div class="col-md-6 col-lg-4">
                                  <div class="project-1 wow fadeInUp" data-wow-delay="0.8s">
                                      <a href="project-details.html">
    
                                        {/* <!-- Brand Logo --> */}
                                        <img class="img-fluid" src="images/brand-3.png" alt="project-logo" />	
    
                                        {/* <!-- Category -->										 */}
                                        <p>Freelancer Website</p>									
    
                                        {/* <!-- Project Data --> */}
                                        <div class="project-data">
                                        
                                            <div class="pd-box d-flex align-items-center clearfix">
                                                <h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 260%</h5>
                                                <p class="p-sm">Increase in Website Traffic</p>
                                            </div>
    
                                            <div class="pd-box d-flex align-items-center ">
                                                <h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 160%</h5>
                                                <p class="p-sm">Increase in Leads</p>
                                            </div>
                                        </div>
    
                                    </a>
                                </div>		
                            </div>	
                            {/* <!-- END IMAGE #3 --> */}
    
    
                            {/* <!-- IMAGE #4 --> */}
                            <div class="col-md-6 col-lg-4">
                                  <div class="project-1 wow fadeInUp" data-wow-delay="1s">
                                      <a href="project-details.html">
    
                                        {/* <!-- Brand Logo --> */}
                                        <img class="img-fluid" src="images/brand-4.png" alt="project-logo" />
    
                                        {/* <!-- Category -->										 */}
                                        <p>Homestays or Tourism Website</p>										
    
                                        {/* <!-- Project Data -->	 */}
                                        <div class="project-data">
                                        
                                            <div class="pd-box d-flex align-items-center clearfix">
                                                <h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 268%</h5>
                                                <p class="p-sm">Increase in Website Traffic</p>
                                            </div>
    
                                            <div class="pd-box d-flex align-items-center ">
                                                <h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 182%</h5>
                                                <p class="p-sm">Increase in Leads</p>
                                            </div>
                                        </div>
    
                                    </a>
                                </div>	
                            </div>	
                            {/* <!-- END IMAGE #4 -->	 */}
    
    
                            {/* <!-- IMAGE #5 --> */}
                            <div class="col-md-6 col-lg-4">
                                  <div class="project-1 wow fadeInUp" data-wow-delay="1.2s">
                                      <a href="project-details.html">
    
                                        {/* <!-- Brand Logo --> */}
                                        <img class="img-fluid" src="images/brand-5.png" alt="project-logo" />
    
                                        {/* <!-- Category -->										 */}
                                        <p>Organic Food Website</p>										
    
                                        {/* <!-- Project Data --> */}
                                        <div class="project-data">
                                        
                                            <div class="pd-box d-flex align-items-center clearfix">
                                                <h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 315%</h5>
                                                <p class="p-sm">Increase in Website Traffic</p>
                                            </div>
    
                                            <div class="pd-box d-flex align-items-center ">
                                                <h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 214%</h5>
                                                <p class="p-sm">Increase in Leads</p>
                                            </div>
                                        </div>
    
                                    </a>
                                </div>
                            </div>
                            	{/* <!-- END IMAGE #5 -->	 */}
    
    
                            {/* <!-- IMAGE #6 --> */}
                            <div class="col-md-6 col-lg-4">
                                  <div class="project-1 wow fadeInUp" data-wow-delay="1.4s">
                                      <a href="project-details.html">
    
                                        {/* <!-- Brand Logo --> */}
                                        <img class="img-fluid" src="images/brand-6.png" alt="project-logo" />
    
                                        {/* <!-- Category -->										 */}
                                        <p>e-Commerce Business</p>										
    
                                        {/* <!-- Project Data --> */}
                                        <div class="project-data">
                                        
                                            <div class="pd-box d-flex align-items-center clearfix">
                                                <h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 195%</h5>
                                                <p class="p-sm">Increase in Website Traffic</p>
                                            </div>
    
                                            <div class="pd-box d-flex align-items-center ">
                                                <h5 class="h5-sm"><i class="primary-color fas fa-arrow-alt-circle-up"></i> 96%</h5>
                                                <p class="p-sm">Increase in Leads</p>
                                            </div>
                                        </div>
    
                                    </a>
                                </div>	
                            </div>	
                            {/* <!-- END IMAGE #6 --> */}
    
    
                        </div>	
                        {/* <!-- END PROJECTS IMAGES HOLDER -->	 */}
    
    
                        {/* <!-- ALL PROJECTS BUTTON --> */}
                        <div class="row">
                            <div class="col-md-12 text-center all-projects-btn">
                                <a href="case-studies-2.html" class="btn btn-md btn-primary tra-black-hover">See All Case Studies</a>
                            </div>
                        </div>
    
    
                    </div>	   
                    {/* <!-- End container -->	 */}
                </section>	
                {/* <!-- END PROJECTS-1 --> */}
    
    
    
    
                {/* <!-- TESTIMONIALS-4
                ============================================= --> */}
                <section id="reviews-4" class="bg-05 reviews-section division">
                    <div class="container white-color">
                        <div class="row d-flex align-items-center">
    
    
                            {/* <!-- TESTIMONIAL STATISTIC --> */}
                            <div class="col-lg-6">
                                <div class="small-statistic pc-25">
                                    <div class="row">	
    
                                        {/* <!-- STATISTIC BLOCK #1 --> */}
                                        <div class="col-sm-6 col-md-3 col-lg-6">					
                                            <div class="statistic-block wow fadeInUp" data-wow-delay="0.4s">							
                                                <h5 class="statistic-number primary-color"><span class="count-element">735</span>%</h5>
                                                <p>increase in SEO traffic from benchmark month</p>			
                                            </div>								
                                        </div>
    
                                        {/* <!-- STATISTIC BLOCK #2 --> */}
                                        <div class="col-sm-6 col-md-3 col-lg-6">						
                                            <div class="statistic-block wow fadeInUp" data-wow-delay="0.6s">								
                                                <h5 class="statistic-number primary-color"><span class="count-element">363</span>%</h5>
                                                <p>increase in phone calls from search engines</p>	
                                            </div>							
                                        </div>
    
                                        {/* <!-- STATISTIC BLOCK #3 --> */}
                                        <div class="col-sm-6 col-md-3 col-lg-6">					
                                            <div class="statistic-block wow fadeInUp" data-wow-delay="0.8s">							
                                                <h5 class="statistic-number primary-color"><span class="count-element">528</span>%</h5>
                                                <p>increase in organic visitors in 6 months</p>			
                                            </div>								
                                        </div>
    
                                        {/* <!-- STATISTIC BLOCK #4 --> */}
                                        <div class="col-sm-6 col-md-3 col-lg-6">						
                                            <div class="statistic-block wow fadeInUp" data-wow-delay="1s">								
                                                <h5 class="statistic-number primary-color"><span class="count-element">436</span>%</h5>
                                                <p>increase in first page rankings in the 6 months</p>	
                                            </div>							
                                        </div>
    
                                    </div>	
                                </div>
                            </div>	
                            {/* <!-- END TESTIMONIAL STATISTIC --> */}
    
    
                            {/* <!-- TESTIMONIAL TEXT --> */}
                            <div class="col-lg-6">
                                <div class="review-4 wow fadeInUp" data-wow-delay="0.4s">
    
                                    {/* <!-- Quote Icon --> */}
                                    <div class="quote-ico"><img src="images/left-quote.png" alt="quote-image" /></div>
    
                                    {/* <!-- Testimonial Text --> */}
                                    <p>"<span>They're communicative, honest, and reliably deliver tangible results.</span> Etiam sapien 
                                       sem at sagittis congue an augue massa varius egestas and suscipit magna a tempus undo aliquet 
                                       a ligula magna suscipit vitae and rutrum luctus a risus ultrice luctus enim ipsum blandit porta 
                                       justo integer mollislorem primis in orci"				   
                                    </p>
    
                                    {/* <!-- Testimonial Author --> */}
                                    <div class="review-4-author">
                                        <h5 class="h5-xs">Sean McMarthy, CEO</h5>	
                                        <span class="lightgrey-color">Company Name</span>
                                    </div>	
    
                                </div>	
                                {/* <!-- END TESTIMONIAL TEXT -->	 */}
    
    
                            </div>
                        </div>	   
                        {/* <!-- End row --> */}
                    </div>	    
                    {/* <!-- End container --> */}
                </section>	 
                {/* <!-- END TESTIMONIALS-4 --> */}
    
    
    
    
                {/* <!-- CONTENT-5
                ============================================= --> */}
                <section id="content-5" class="wide-60 content-section division">
                    <div class="container">
                        <div class="row d-flex align-items-center">
    
    
                            {/* <!-- TEXT BLOCK -->	 */}
                            <div class="col-md-7 col-lg-6">
                                <div class="txt-block pc-25 mb-40 wow fadeInLeft" data-wow-delay="0.4s">
    
                                    {/* <!-- Title -->	 */}
                                    <h4 class="h4-xl">Our SEO plans will help you to dominate the search engines</h4>
    
                                    {/* <!-- Text --> */}
                                    <div class="cbox-1">		
                                         <i class="fas fa-check grey-color"></i>
                                        <div class="cbox-1-txt">
                                            <p>Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrice ligula 
                                               purus ipsum primis in cubilia
                                            </p>
                                        </div>
                                    </div>
    
                                    {/* <!-- Text --> */}
                                    <div class="cbox-1">	
                                         <i class="fas fa-check grey-color"></i>
                                        <div class="cbox-1-txt">
                                            <p>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor auctor 
                                               ipsum blandit purus vehicula magna and luctus tempor quisque	turpis magna ligula 
                                           </p>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Text --> */}
                                    <div class="cbox-1">	
                                         <i class="fas fa-check grey-color"></i>
                                        <div class="cbox-1-txt">
                                            <p>An enim nullam tempor sapien gravida donec enim blandit ipsum at porta justo integer velna
                                               vitae auctor integer congue magna pretium purus pretium magnis nulla dolor sapien 
                                            </p>
                                        </div>
                                    </div>
    
                                    {/* <!-- Text --> */}
                                    <div class="cbox-1">	
                                         <i class="fas fa-check grey-color"></i>
                                        <div class="cbox-1-txt">
                                            <p>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor auctor 
                                               ipsum blandit purus
                                           </p>
                                        </div>
                                    </div>
    
                                </div>
                            </div>	
                            {/* <!-- END TEXT BLOCK -->	 */}
    
    
                            {/* <!-- IMAGE BLOCK --> */}
                            <div class="col-md-5 col-lg-6">
                                <div class="content-5-img mb-40 wow fadeInRight" data-wow-delay="0.6s">
                                    <img class="img-fluid" src="images/image-09.png" alt="content-image"/>
                                </div>
                            </div>
    
    
                        </div>	  
                        {/* <!-- End row -->	 */}
                    </div>     
                    {/* <!-- End container --> */}
                </section>
                	{/* <!-- END CONTENT-5 --> */}
    
    
    
    
                {/* <!-- TESTIMONIALS-3
                ============================================= --> */}
                <section id="reviews-3" class="bg-04 wide-100 reviews-section division">
                    <div class="container">
    
    
                        {/* <!-- SECTION TITLE -->	 */}
                        <div class="row">	
                            <div class="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">	
    
                                {/* <!-- Title 	-->	 */}
                                <h3 class="h3-xs">
                                    <span class="title-digit">2,<span class="count-element">968</span></span> 
                                    Positive Reviews From Our Customers
                                </h3>
    
                                {/* <!-- Text -->	 */}
                                <p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero 
                                   tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                                </p>
    
                            </div>
                        </div>
                    
                        
                        {/* <!-- TESTIMONIALS CONTENT --> */}
                        <div class="row">
                            <div class="col-xl-10 offset-xl-1">					
                                <div class="owl-carousel owl-theme reviews-holder">
    
                            
                                    {/* <!-- TESTIMONIAL #1 --> */}
                                    <div class="review-3">
    
                                        {/* <!-- Quote Icon --> */}
                                        <div class="quote-ico"><img src="images/left-quote.png" alt="quote-image" /></div>
    
                                        {/* <!-- Testimonial Text --> */}
                                        <p>Etiam sapien sem at sagittis congue an augue massa varius egestas and suscipit magna and 
                                           tempus and aliquet porta vitae purus congue a cursus magna cubilia augue vitae laoreet				   
                                        </p>
    
                                        {/* <!-- Author Data --> */}
                                        <div class="review-3-author d-flex align-items-center">
    
                                            {/* <!-- Author Avatar --> */}
                                            <div class="author-avatar">
                                                <img class="img-fluid" src="images/review-author-1.jpg" alt="review-author-avatar" />
                                            </div>
    
                                            {/* <!-- Testimonial Author --> */}
                                            <div class="review-author">
                                                <h5 class="h5-xs">Sean McMarthy</h5>	
                                                <span>Owner, <a href="#">Company Name</a></span>
                                            </div>
    
                                        </div>									
                                                                                        
                                    </div>	
                                    {/* <!--END  TESTIMONIAL #1 -->
                             */}
                            
                                    {/* <!-- TESTIMONIAL #2 --> */}
                                    <div class="review-3">
    
                                        {/* <!-- Quote Icon --> */}
                                        <div class="quote-ico"><img src="images/left-quote.png" alt="quote-image" /></div>
                        
                                        {/* <!-- Testimonial Text --> */}
                                        <p>At sagittis congue augue egestas rhoncus in magna ipsum vitae purus ipsum primis cubilia 
                                           laoreet augue egestas luctus and donec diam ociis ultrice ligula magna suscipit
                                        </p>
    
                                        {/* <!-- Author Data --> */}
                                        <div class="review-3-author d-flex align-items-center">
    
                                            {/* <!-- Author Avatar --> */}
                                            <div class="author-avatar">
                                                <img class="img-fluid" src="images/review-author-2.jpg" alt="review-author-avatar" />
                                            </div>
    
                                            {/* <!-- Testimonial Author --> */}
                                            <div class="review-author">
                                                <h5 class="h5-xs">Evelyn Martinez</h5>
                                                <span>Owner, <a href="#">Company Name</a></span>
                                            </div>
    
                                        </div>
                        
                                    </div>	
                                    {/* <!-- END TESTIMONIAL #2 --> */}
                            
                            
                                    {/* <!-- TESTIMONIAL #3 --> */}
                                    <div class="review-3">
    
                                        {/* <!-- Quote Icon --> */}
                                        <div class="quote-ico"><img src="images/left-quote.png" alt="quote-image" /></div>
                                                                    
                                        {/* <!-- Testimonial Text --> */}
                                        <p>Mauris donec ociis magnis sapien etiam sapien congue and augue egestas et ultrice vitae undo 
                                           purus and diam integer congue at magna ligula an egestas magna suscipit lectus   
                                        </p>
    
                                        {/* <!-- Author Data --> */}
                                        <div class="review-3-author d-flex align-items-center">
    
                                            {/* <!-- Author Avatar --> */}
                                            <div class="author-avatar">
                                                <img class="img-fluid" src="images/review-author-3.jpg" alt="review-author-avatar" />
                                            </div>
    
                                            {/* <!-- Testimonial Author --> */}
                                            <div class="review-author">
                                                <h5 class="h5-xs">Joel Peterson</h5>
                                                <span>Owner, <a href="#">Company Name</a></span>
                                            </div>	
    
                                        </div>	
    
                                    </div>	
                                    {/* <!-- END TESTIMONIAL #3 --> */}
    
    
                                    {/* <!-- TESTIMONIAL #4 --> */}
                                    <div class="review-3">
    
                                        {/* <!-- Quote Icon --> */}
                                        <div class="quote-ico"><img src="images/left-quote.png" alt="quote-image" /></div>
                        
                                        {/* <!-- Testimonial Text --> */}
                                        <p>Mauris donec ociis magnis sapien etiam sapien congue undo augue pretium purus ligula lectus aenean 
                                           magna and mauris lectus undo laoreet tempor egestas magna vitae laoreet augue
                                        </p>
    
                                        {/* <!-- Author Data --> */}
                                        <div class="review-3-author d-flex align-items-center">
    
                                            {/* <!-- Author Avatar --> */}
                                            <div class="author-avatar">
                                                <img class="img-fluid" src="images/review-author-4.jpg" alt="review-author-avatar" />
                                            </div>
    
                                            {/* <!-- Testimonial Author --> */}
                                            <div class="review-author">
                                                <h5 class="h5-xs">Michael Deal</h5>
                                                <span>Owner, <a href="#">Company Name</a></span>
                                            </div>
                        
                                        </div>	
    
                                    </div>	
                                    {/* <!-- END TESTIMONIAL #4 -->
                                     */}
                                    
                                    {/* <!-- TESTIMONIAL #5 --> */}
                                    <div class="review-3">
    
                                        {/* <!-- Quote Icon --> */}
                                        <div class="quote-ico"><img src="images/left-quote.png" alt="quote-image" /></div>
    
                                        {/* <!-- Testimonial Text --> */}
                                        <p>An augue in cubilia laoreet magna suscipit egestas magna ipsum at purus ipsum primis in augue 
                                           ultrice ligula egestas and suscipit lectus gestas integer congue
                                        </p>	
    
                                        {/* <!-- Author Data --> */}
                                        <div class="review-3-author d-flex align-items-center">
    
                                            {/* <!-- Author Avatar --> */}
                                            <div class="author-avatar">
                                                <img class="img-fluid" src="images/review-author-5.jpg" alt="review-author-avatar" />
                                            </div>
    
                                            {/* <!-- Testimonial Author --> */}
                                            <div class="review-author">
                                                <h5 class="h5-xs">Mark Paterson</h5>
                                                <span>Owner, <a href="#">Company Name</a></span>
                                            </div>					
                                                                    
                                        </div>	
    
                                    </div>	
                                    {/* <!-- END TESTIMONIAL #5 --> */}
                                    
                                    
                                    {/* <!-- TESTIMONIAL #6 --> */}
                                    <div class="review-3">
    
                                        {/* <!-- Quote Icon --> */}
                                        <div class="quote-ico"><img src="images/left-quote.png" alt="quote-image" /></div>
    
                                        {/* <!-- Testimonial Text --> */}
                                        <p>An augue cubilia laoreet undo magna a suscipit egestas magna an ipsum ligula vitae purus and 
                                           ipsum primis in cubilia
                                        </p>
    
                                        {/* <!-- Author Data --> */}
                                        <div class="review-3-author d-flex align-items-center">
    
                                            {/* <!-- Author Avatar --> */}
                                            <div class="author-avatar">
                                                <img class="img-fluid" src="images/review-author-6.jpg" alt="review-author-avatar" />
                                            </div>
    
                                            {/* <!-- Testimonial Author --> */}
                                            <div class="review-author">
                                                <h5 class="h5-xs">Mark Hodges</h5>
                                                <span>Owner, <a href="#">Company Name</a></span>
                                            </div>
    
                                        </div>	
    
                                    </div>	
                                    {/* <!-- END TESTIMONIAL #6 --> */}
                                    
                                    
                                    {/* <!-- TESTIMONIAL #7 --> */}
                                    <div class="review-3">
    
                                        {/* <!-- Quote Icon --> */}
                                        <div class="quote-ico"><img src="images/left-quote.png" alt="quote-image" /></div>
                    
                                        {/* <!-- Testimonial Text --> */}
                                        <p>Augue egestas volutpat egestas augue purus cubilia laoreet magna suscipit luctus and dolor blandit 
                                           vitae purus diam tempus undo aliquet porta rutrum gestas egestas 
                                        </p>
    
                                        {/* <!-- Author Data --> */}
                                        <div class="review-3-author d-flex align-items-center">
    
                                            {/* <!-- Author Avatar --> */}
                                            <div class="author-avatar">
                                                <img class="img-fluid" src="images/review-author-7.jpg" alt="review-author-avatar" />
                                            </div>
    
                                            {/* <!-- Testimonial Author --> */}
                                            <div class="review-author">
                                                <h5 class="h5-xs">Aaron Wall</h5>
                                                <span>Owner, <a href="#">Company Name</a></span>
                                            </div>
                        
                                        </div>	
    
                                    </div>	
                                    {/* <!-- END TESTIMONIAL #7 --> */}
    
    
                                    {/* <!-- TESTIMONIAL #8 --> */}
                                    <div class="review-3">
    
                                        {/* <!-- Quote Icon --> */}
                                        <div class="quote-ico"><img src="images/left-quote.png" alt="quote-image" /></div>
                        
                                        {/* <!-- Testimonial Text --> */}
                                        <p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus and dolor blandit
                                           vitae purus diam tempus 
                                        </p>	
    
                                        {/* <!-- Author Data --> */}
                                        <div class="review-3-author d-flex align-items-center">
    
                                            {/* <!-- Author Avatar --> */}
                                            <div class="author-avatar">
                                                <img class="img-fluid" src="images/review-author-8.jpg" alt="review-author-avatar" />
                                            </div>
    
                                            {/* <!-- Testimonial Author --> */}
                                            <div class="review-author">
                                                <h5 class="h5-xs">Tosha Wisdom</h5>
                                                <span>Owner, <a href="#">Company Name</a></span>
                                            </div>							
                                                                    
                                        </div>	
    
                                    </div>	
                                    {/* <!-- END TESTIMONIAL #8 --> */}
    
                                
                                </div>
                            </div>									
                        </div>
                        	{/* <!-- END TESTIMONIALS CONTENT -->  */}
                                
                            
                    </div>	   
                    {/* <!-- End container --> */}
                </section>	 
                {/* <!-- END TESTIMONIALS-3 --> */}
    
    
    
    
                {/* <!-- VIDEO-2
                ============================================= --> */}
                <div id="video-2" class="bg-scroll video-section division">
                    <div class="container white-color">
                        <div class="row">
    
    
                            {/* <!-- VIDEO LINK -->	 */}
                             <div class="col-md-8 offset-md-2">
                                 <div class="video-link text-center">
                                     
                                    {/* <!-- Change the link HERE!!! -->						 */}
                                    <div class="play-btn-primary text-center">
                                        <a class="video-popup2 video-play-button" href="https://www.youtube.com/watch?v=7e90gBu4pas">
                                          <span></span>
                                        </a>
                                    </div>
    
                                </div>
                             </div>
                             	{/* <!-- END VIDEO LINK -->	 */}
    
                        
                        </div>    
                        {/* <!-- End row -->	 */}
                    </div>	   
                    {/* <!-- End container -->						 */}
                </div>	
                {/* <!-- END VIDEO-2 --> */}
    
    
    
    
                {/* <!-- PRICING-1
                ============================================= --> */}
                <section id="pricing-1" class="wide-60 pricing-section division">
                    <div class="container">
    
    
                        {/* <!-- SECTION TITLE --> */}
                        <div class="row">	
                            <div class="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">	
    
                                {/* <!-- Title 	-->	 */}
                                <h3 class="h3-lg">Simple Pricing, Instant Sign Up</h3>	
                                
                                {/* <!-- Text -->	 */}
                                <p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero 
                                   tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                                </p>
                                    
                            </div>
                        </div>	 
                        {/* <!-- END SECTION TITLE -->	 */}
    
    
                        <div class="row pricing-row">
    
    
                            {/* <!-- PRICE PLAN STARTER --> */}
                            <div class="col-md-4 col-lg-4">
                                <div class="pricing-table wow fadeInUp" data-wow-delay="0.4s">	
                                                    
                                    {/* <!-- Plan Price  --> */}
                                    <div class="pricing-plan">
                                        <h5 class="h5-md">SEO Starter</h5>									
                                        <sup>$</sup>								
                                        <span class="price">3</span>
                                        <sup class="coins">99</sup>
                                    </div>	
    
                                    <p class="p-sm">Monthly Payment</p>
                                                                                        
                                    {/* <!-- Pricing Plan Features  --> */}
                                    <ul class="features">
                                        <li>10 Analytics Campaign</li>
                                        <li><span>800 Change Keywords</span></li>
                                        <li><span>3 Free Optimization</span></li>							
                                        <li><span>25 Social Media Reviews</span></li>
                                        <li class="disabled-option">Upgrate Options</li>
                                        <li class="disabled-option">Extra Features</li>
                                        <li>12/5 Free Support</li>
                                    </ul>
    
                                    {/* <!-- Pricing Table Button  --> */}
                                    <a href="#" class="btn btn-tra-grey black-hover">Get Started</a>
    
                                </div>
                            </div>	
                            {/* <!-- END PRICE PLAN STARTER --> */}
    
    
                            {/* <!-- PRICE PLAN BASIC --> */}
                            <div class="col-md-4 col-lg-4">
                                <div class="pricing-table wow fadeInUp" data-wow-delay="0.6s">	
                                                    
                                    {/* <!-- Plan Price  --> */}
                                    <div class="pricing-plan primary-color">
                                        <h5 class="h5-md">SEO Basic</h5>									
                                        <sup>$</sup>								
                                        <span class="price">24</span>
                                        <sup class="coins">99</sup>
                                    </div>	
    
                                    <p class="p-sm">Monthly Payment</p>
                                                                                        
                                    {/* <!-- Pricing Plan Features  --> */}
                                    <ul class="features">
                                        <li>20 Analytics Campaign</li>
                                        <li><span>1,200 Change Keywords</span></li>
                                        <li><span>15 Optimization</span></li>							
                                        <li><span>1K Social Media Reviews</span></li>
                                        <li><span>Upgrate Options</span></li>
                                        <li class="disabled-option">Extra Features</li>
                                        <li>12/7 Free Support</li>
                                    </ul>
    
                                    {/* <!-- Pricing Table Button  --> */}
                                    <a href="#" class="btn btn-primary black-hover">Get Started</a>
    
                                </div>
                            </div>	
                            {/* <!-- END PRICE PLAN BASIC --> */}
    
    
                            {/* <!-- PRICE PLAN PRO --> */}
                            <div class="col-md-4 col-lg-4">
                                <div class="pricing-table wow fadeInUp" data-wow-delay="0.8s">	
    
                                    {/* <!-- Plan Price  --> */}
                                    <div class="pricing-plan">
                                        <h5 class="h5-md">SEO Premium</h5>	
                                        <sup>$</sup>								
                                        <span class="price">89</span>
                                        <sup class="coins">99</sup>
                                    </div>	
    
                                    <p class="p-sm">Monthly Payment</p>
                                                                                        
                                    {/* <!-- Pricing Plan Features  --> */}
                                    <ul class="features">
                                        <li>Unlimited Analytics Campaign</li>
                                        <li><span>Unlimited Change Keywords</span></li>
                                        <li><span>Unlimited Optimization</span></li>							
                                        <li><span>5K Social Media Reviews</span></li>
                                        <li><span>Upgrate Options</span></li>
                                        <li>Extra Features</li>
                                        <li>24/7 Free Support</li>
                                    </ul>
    
                                    {/* <!-- Pricing Table Button  --> */}
                                    <a href="#" class="btn btn-tra-grey black-hover">Upgrade To Premium</a>
                                            
                                </div>
                            </div>	
                            {/* <!-- END PRICE PLAN PRO --> */}
    
    
                        </div>	 
                        {/* <!-- End row --> */}
    
    
                        {/* <!-- PRICING NOTICE TEXT --> */}
                        <div class="row">
                            <div class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                                <div class="pricing-notice text-center mb-40">							
                                    <p class="p-md"><span>Note!</span> Prices may vary from location to location due to local
                                       taxation laws and conversion rates from U.S. Dollars.
                                    </p>
                                </div>	
                            </div>
                        </div>
    
    
                    </div>	   
                    {/* <!-- End container --> */}
                </section>	
                {/* <!-- END PRICING-1 --> */}
    
    
    
    
                {/* <!-- BRANDS-2
                ============================================= --> */}
                <div id="brands-2" class="bg-lightgrey brands-section division">
                    <div class="container">					
                        <div class="row">
                            <div class="col-md-12 text-center">	
    
                                {/* <!-- Title --> */}
                                <p class="p-lg grey-color">Used by startups, e-stores, web designers, and teams including:</p>
    
                                <ul class="brands-list">
                                                        
                                    {/* <!-- BRAND LOGO IMAGE --> */}
                                    <li class="brand-logo">
                                        <img class="img-fluid" src="images/brand-1.png" alt="brand-logo" />
                                    </li>
                                                        
                                    {/* <!-- BRAND LOGO IMAGE --> */}
                                    <li class="brand-logo">
                                        <img class="img-fluid" src="images/brand-2.png" alt="brand-logo" />
                                    </li>
                                                        
                                    {/* <!-- BRAND LOGO IMAGE --> */}
                                    <li class="brand-logo">
                                        <img class="img-fluid" src="images/brand-3.png" alt="brand-logo" />
                                    </li>
                                                        
                                    {/* <!-- BRAND LOGO IMAGE --> */}
                                    <li class="brand-logo">
                                        <img class="img-fluid" src="images/brand-4.png" alt="brand-logo" />
                                    </li>
                                                        
                                    {/* <!-- BRAND LOGO IMAGE --> */}
                                    <li class="brand-logo">
                                        <img class="img-fluid" src="images/brand-5.png" alt="brand-logo"/>
                                    </li>
                                                        
                                    {/* <!-- BRAND LOGO IMAGE --> */}
                                    <li class="brand-logo">
                                        <img class="img-fluid" src="images/brand-6.png" alt="brand-logo" />
                                    </li>
    
                                    {/* <!-- BRAND LOGO IMAGE --> */}
                                    <li class="brand-logo">
                                        <img class="img-fluid" src="images/brand-7.png" alt="brand-logo" />
                                    </li>
                                                                
                                    {/* <!-- BRAND LOGO IMAGE --> */}
                                    <li class="brand-logo">
                                        <img class="img-fluid" src="images/brand-8.png" alt="brand-logo" />
                                    </li>
                                    
                                    {/* <!-- BRAND LOGO IMAGE --> */}
                                    <li class="brand-logo">
                                        <img class="img-fluid" src="images/brand-9.png" alt="brand-logo" />
                                    </li>
    
                                </ul>
    
                            </div>
                        </div>      
                        {/* <!-- End row --> */}
                    </div>	    
                    {/* <!-- End container --> */}
                </div>	
                {/* <!-- END BRANDS-2 --> */}
    
    
    
    
                {/* <!-- FAQs-1
                ============================================= --> */}
                <section id="faqs-1" class="wide-100 faqs-section division">
                    <div class="container">
    
    
                        {/* <!-- SECTION TITLE --> */}
                        <div class="row">	
                            <div class="col-lg-10 offset-lg-1 section-title wow fadeInUp" data-wow-delay="0.2s">
    
                                 {/* <!-- Title --> */}
                                <h3 class="h3-lg">Frequently Asked Questions</h3>
    
                                {/* <!-- Text -->	 */}
                                <p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero 
                                   tempus, blandit posuere and ligula varius magna a porta elementum massa risus
                                </p>
    
                            </div>
                        </div>	 
                        {/* <!-- END SECTION TITLE -->	 */}
    
    
                        {/* <!-- QUESTIONS HOLDER --> */}
                        <div class="row">						
                            <div class="col-lg-10 offset-lg-1">
                                 <div id="accordion" role="tablist">
    
    
                                     {/* <!-- QUESTION #1 --> */}
                                     <div class="card wow fadeInUp" data-wow-delay="0.4s">
    
                                         {/* <!-- Question --> */}
                                        <div class="card-header" role="tab" id="headingOne">
                                              <h5 class="h5-sm">
                                                   <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">
                                                     Do you require a contract?
                                                </a>
                                             </h5>
                                        </div>
    
                                        {/* <!-- Answer --> */}
                                        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                             <div class="card-body">
    
                                                {/* <!-- Text --> */}
                                                <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae and 
                                                   congue auctor magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam 
                                                   sapien sagittis congue tempor gravida donec enim ipsum porta justo integer at odio velna
                                                   placerat purus, aliquet elementum massa mollis risus lectus porta rutrum magna dignissim,
                                                   porttitor hendrerit
                                                </p>	
    
                                             </div>
                                           </div>
    
    
                                    </div>	
                                    {/* <!-- END QUESTION #1 --> */}
    
    
                                    {/* <!-- QUESTION #2 --> */}
                                    <div class="card wow fadeInUp" data-wow-delay="0.6s">
    
                                        {/* <!-- Question --> */}
                                        <div class="card-header" role="tab" id="headingTwo">
                                              <h5 class="h5-sm">
                                                   <a class="collapsed" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
                                                      Should I ask to see law firm website ranking proof?
                                                </a>
                                              </h5>
                                        </div>
    
                                        {/* <!-- Answer --> */}
                                        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                              <div class="card-body">
    
                                                  <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet
                                                     turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur 
                                                     nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu cursus est.
                                                     Fusce non nulla vitae massa placerat vulputate vel a purus
                                                </p>
                                            
                                              </div>
                                        </div>
    
                                    </div>	
                                    {/* <!-- END QUESTION #2 --> */}
    
    
                                    {/* <!-- QUESTION #3 --> */}
                                    <div class="card wow fadeInUp" data-wow-delay="0.8s">
    
                                         {/* <!-- Question --> */}
                                        <div class="card-header" role="tab" id="headingThree">
                                              <h5 class="h5-sm">
                                                <a class="collapsed" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">
                                                     Do you provide details of what SEO work you will be doing?
                                                </a>
                                              </h5>
                                        </div>
    
                                           {/* <!-- Answer --> */}
                                        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                              <div class="card-body">
                                            
                                                  {/* <!-- Text -->	 */}
                                                <p>Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, 
                                                   congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae
                                                   auctor eros dolor luctus odio placerat magna cursus
                                                </p>
                                                            
                                                {/* <!-- List --> */}
                                                <ul class="txt-list">
                                                            
                                                    <li>Vitae auctor integer congue magna at pretium</li>
    
                                                    <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor auctor 
                                                       ipsum blandit purus vehicula magna and luctus tempor quisque			
                                                    </li>
    
                                                    <li>Sagittis congue augue egestas volutpat egestas magna donec ociis et magnis ipsum porta justo 
                                                        integer velna purus ehicula magna luctus vel laoreet turpis 
                                                    </li>
    
                                                </ul>		
    
                                              </div>
                                        </div>
    
                                    </div>	 
                                    {/* <!-- END QUESTION #3 --> */}
    
    
                                    {/* <!-- QUESTION #4 --> */}
                                    <div class="card wow fadeInUp" data-wow-delay="1s">
    
                                         {/* <!-- Question --> */}
                                        <div class="card-header" role="tab" id="headingFour">
                                            <h5 class="h5-sm">
                                                <a class="collapsed" data-toggle="collapse" href="#collapseFour" role="button" aria-expanded="false" aria-controls="collapseFour">   		
                                                    What is on-page search engine optimization?
                                                </a>
                                              </h5>
                                        </div>
    
                                        {/* <!-- Answer --> */}
                                        <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                                              <div class="card-body">
                                            
                                                  {/* <!-- Text --> */}
                                                <p>Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo
                                                   ut aliquam. Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non molestie sed purus, 
                                                   venenatis nec. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor
                                                </p>   
    
                                              </div>
                                        </div>
    
                                    </div>	  
                                    {/* <!-- END QUESTION #4 --> */}
    
    
                                    {/* <!-- QUESTION #5 --> */}
                                    <div class="card wow fadeInUp" data-wow-delay="1.2s">
    
                                         {/* <!-- Question --> */}
                                        <div class="card-header" role="tab" id="headingFive">
                                            <h5 class="h5-sm">
                                                <a class="collapsed" data-toggle="collapse" href="#collapseFive" role="button" aria-expanded="false" aria-controls="collapseFive">   		
                                                    How much do your monthly services cost?
                                                </a>
                                              </h5>
                                        </div>
    
                                        {/* <!-- Answer --> */}
                                        <div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
                                              <div class="card-body">
                                            
                                                  {/* <!-- List --> */}
                                                <ul class="txt-list">
                                                            
                                                    <li>Vitae auctor integer congue magna at pretium</li>
    
                                                    <li>Integer congue magna at pretium purus pretium ligula rutrum and luctus risus eros dolor auctor 
                                                       ipsum blandit purus vehicula magna and luctus tempor quisque			
                                                    </li>
    
                                                    <li>Sagittis congue augue egestas volutpat egestas magna donec ociis et magnis ipsum porta justo 
                                                        integer velna purus ehicula magna luctus vel laoreet turpis 
                                                    </li>
    
                                                </ul>  
    
                                              </div>
                                        </div>
    
                                    </div>	  
                                    {/* <!-- END QUESTION #5 --> */}
    
                                                                                
                                </div>	
                                {/* <!-- END ACCORDION --> */}
                            </div>  
                            {/* <!-- End col-x -->	 */}
                        </div>	
                        {/* <!-- END QUESTIONS HOLDER --> */}
    
    
                        {/* <!-- MORE QUESTIONS BUTTON -->		 */}
                        <div class="row">
                            <div class="col-md-12 text-center more-questions">
                                <h5>Still have a question? <a href="contacts.html" class="primary-color">Ask your question here</a></h5>
                            </div>
                        </div>
    
    
                    </div>	   
                    {/* <!-- End container -->		 */}
                </section>
                {/* <!-- END FAQs-1 --> */}
    
    
    
    
                {/* <!-- CONTACTS-2
                ============================================= --> */}
                <section id="contacts-2" class="bg-primary bg-map contacts-section division">				
                    <div class="container white-color">
                        <div class="row">
    
    
                            {/* <!-- LOCATION --> */}
                            <div class="col-md-4">
                                <div class="contact-box icon-sm clearfix">
    
                                    {/* <!-- Icon -->  */}
                                    <img class="img-50" src="images/icons/placeholder-4.png" alt="clock-icon"/>
                                
                                    {/* <!-- Text --> */}
                                    <div class="cbox-2-txt">
    
                                        {/* <!-- Title -->	 */}
                                        <h5 class="h5-lg">Our Location:</h5>
    
                                        {/* <!-- Title -->	 */}
                                        <p>Merteex Processing, Inc</p>
                                        <p>121 King Street, Melbourne,</p> 
                                        <p>Victoria 3000 Australia</p>
    
                                    </div>
    
                                </div>
                            </div>
    
    
                            {/* <!-- QUICK CONTACTS --> */}
                            <div class="col-md-4">
                                <div class="contact-box icon-sm clearfix">
    
                                    {/* <!-- Icon -->  */}
                                    <img class="img-50" src="images/icons/contacts.png" alt="clock-icon" />
                                
                                    {/* <!-- Text --> */}
                                    <div class="cbox-2-txt">
    
                                        {/* <!-- Title -->	 */}
                                        <h5 class="h5-lg">Quick Contacts:</h5>
    
                                        {/* <!-- Text -->	 */}
                                        <p>Phone: +12 3 3456 7890</p>
                                        <p>Fax: +12 9 8765 4321</p>
                                        <p><a href="mailto:yourdomain@mail.com">hello@yourdomain.com</a></p>
    
                                    </div>
    
                                </div>
                            </div>
    
    
                            {/* <!-- WORKING HOURS --> */}
                            <div class="col-md-4">
                                <div class="contact-box clearfix">
    
                                    {/* <!-- Icon -->  */}
                                    <img class="img-50" src="images/icons/clock-1.png" alt="clock-icon" />
                                
                                    {/* <!-- Text --> */}
                                    <div class="cbox-2-txt">
    
                                        {/* <!-- Title -->	 */}
                                        <h5 class="h5-lg">Office Hours:</h5>
    
                                        {/* <!-- Text -->	 */}
                                        <p>Mon-Fri: 8:30AM - 7:30PM</p>
                                        <p>Saturday: 8:30AM - 3:30PM</p>
                                        <p>Sunday: 12:00PM - 5:00PM</p>
    
                                    </div>
    
                                </div>
                            </div>
    
                         
                         </div>	   
                         {/* <!-- End row --> */}
                    </div>	   
                    {/* <!-- End container -->		 */}
                </section>	
                {/* <!-- END CONTACTS-2 --> */}
    
    
    
    
                {/* <!-- FOOTER-2
                ============================================= --> */}
                <footer id="footer-2" class="pt-100 footer division">
                    <div class="container">
    
    
                        {/* <!-- FOOTER CONTENT --> */}
                        <div class="row">
    
    
                            {/* <!-- FOOTER INFO --> */}
                            <div class="col-md-10 col-lg-4">
                                <div class="footer-info mb-40">
    
                                    {/* <!-- Footer Logo -->
                                    <!-- For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 364 x 90 pixels) --> */}
                                    <img src="images/logo.png" width="182" height="45" alt="footer-logo"/>
    
                                    {/* <!-- Text -->	 */}
                                    <p>Aliquam orci a nullam tempor sapien gravida donec enim ipsum porta justo velna an auctor 
                                       undo congue magna laoreet augue sapien
                                    </p>
                                
                                </div>	
                            </div>	
    
    
                            {/* <!-- FOOTER PRODUCTS LINKS --> */}
                            <div class="col-md-3 col-lg-2 col-xl-2">
                                <div class="footer-links mb-40">
                                
                                    {/* <!-- Title --> */}
                                    <h5 class="h5-sm">Quick Links</h5>
    
                                    {/* <!-- Footer Links --> */}
                                    <ul class="foo-links clearfix">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Case Studies</a></li>
                                        <li><a href="#">Lawyer SEO</a></li>
                                        <li><a href="#">Testimonials</a></li>
                                        <li><a href="#">From the Blog</a></li>								
                                    </ul>
    
                                </div>
                            </div>
    
    
                            {/* <!-- FOOTER COMPANY LINKS --> */}
                            <div class="col-md-4 col-lg-3 col-xl-3">
                                <div class="footer-links mb-40">
                                
                                    {/* <!-- Title --> */}
                                    <h5 class="h5-sm">Featured Services</h5>
    
                                    {/* <!-- Footer Links --> */}
                                    <ul class="clearfix">
                                        <li><a href="#">Local SEO</a></li>
                                        <li><a href="#">Social Media Marketing</a></li>
                                        <li><a href="#">Pay Per Click Management</a></li>
                                        <li><a href="#">Search Engine Optimization</a></li>
                                        <li><a href="#">Free SEO Analysis</a></li>				
                                    </ul>
    
                                </div>
                            </div>
    
    
                            {/* <!-- FOOTER NEWSLETTER FORM --> */}
                            <div class="col-md-5 col-lg-3 col-xl-3">
                                <div class="footer-form mb-20">
    
                                    {/* <!-- Title --> */}
                                    <h5 class="h5-sm">Follow the Best</h5>
    
                                    {/* <!-- Newsletter Form Input --> */}
                                    <form class="newsletter-form">
                                                
                                        <div class="input-group">
                                            <input type="email" class="form-control" placeholder="Email Address" required id="s-email"/>								
                                            <span class="input-group-btn">
                                                <button type="submit" class="btn">
                                                    <i class="far fa-arrow-alt-circle-right"></i>
                                                </button>
                                            </span>
                                        </div>
    
                                        {/* <!-- Newsletter Form Notification -->		 */}
                                        <label for="s-email" class="form-notification"></label>
                                                    
                                    </form>
                                                            
                                </div>
                            </div>	
                            {/* <!-- END FOOTER NEWSLETTER FORM --> */}
    
    
                        </div>	  
                        {/* <!-- END FOOTER CONTENT --> */}
    
            
                        {/* <!-- BOTTOM FOOTER --> */}
                        <div class="bottom-footer">
                            <div class="row">
    
    
                                {/* <!-- FOOTER COPYRIGHT --> */}
                                <div class="col-lg-8">
                                    <ul class="bottom-footer-list">
                                        <li><p>&copy; Copyright Metreex 2020</p></li>
                                        <li><p><a href="tel:123456789">508.746.9892</a></p></li>
                                        <li><p class="last-li"><a href="mailto:yourdomain@mail.com">hello@domain.com</a></p></li>
                                    </ul>
                                </div>
    
    
                                {/* <!-- FOOTER SOCIALS LINKS --> */}
                                <div class="col-lg-4 text-right">
                                    <ul class="foo-socials text-center clearfix">
    
                                        <li><a href="#" class="ico-facebook"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" class="ico-twitter"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#" class="ico-google-plus"><i class="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="#" class="ico-tumblr"><i class="fab fa-tumblr"></i></a></li>
                                        {/* <!--
                                        <li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>	
                                        <li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>									
                                        <li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>	
                                        <li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>								
                                        <li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>										
                                        <li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>
                                        <li><a href="#" class="ico-yelp"><i class="fab fa-yelp"></i></a></li>
                                        <li><a href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></a></li>
                                        --> */}
                                    </ul>
                                </div>

                            </div>
                        </div>
                        {/* <!-- END BOTTOM FOOTER --> */}

                    </div>
                    {/* <!-- End container -->										 */}
                </footer>
                {/* <!-- END FOOTER-2 --> */}

            </div>


       )
    }
}
