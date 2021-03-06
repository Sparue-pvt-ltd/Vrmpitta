import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<header id="header" class="header tra-menu navbar-light">
<div class="header-wrapper">
    <div class="wsmobileheader clearfix">
        <a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>
        <a href="/"><span class="smllogo smllogo-black"><img src="./assets/images/vrm_pitta.png" width="80" height="40" alt="mobile-logo"/></span></a>
        <a href="tel:+914042027115" class="callusbtn"><i class="fas fa-phone"></i></a>
     </div>

      <div class="wsmainfull menu clearfix">
        <div class="wsmainwp clearfix">

            <div class="desktoplogo"><a href="/" class="logo-black"><img src="./assets/images/vrm_pitta.png" width="80" height="40" alt="header-logo"/></a></div>
            <div class="desktoplogo"><a href="/" class="logo-white"><img src="./assets/images/vrm_pitta_white.png" width="80" height="40" alt="header-logo"/></a></div>

              <nav class="wsmenu clearfix blue-header">
                <ul class="wsmenu-list">

					<li aria-haspopup="true"><a href="/services">Services <span class="wsarrow"></span></a>
						<div class="wsmegamenu clearfix halfmenu">
							<div class="container-fluid">
								<div class="row">
									<!-- Links -->
                  <ul class="col-lg-12 col-md-12 col-xs-12 link-list">
                    <li><a href="/service-creative-design-services">Digital Strategy & Consulting</a></li>
                    <li><a href="/service-creative-design-services">Creative Design Services</a></li>
                    <li><a href="/service-content-writing-services">Content Writing Services</a></li>
                    <li><a href="/service-app-search-optimisation">App Search Optimisation</a></li>
                    <li><a href="/service-search-engine-optimisation">Search Engine Optimisation</a></li>
									</ul>
								</div>
							</div>
						</div>
					</li>	<!-- END DROPDOWN MENU -->

                    <li class="nl-simple" aria-haspopup="true"><a href="/pricing">Pricing</a></li>

                    <li class="nl-simple" aria-haspopup="true"><a href="/contacts">Contact Us</a></li>

                    <li class="nl-simple primary-scroll" aria-haspopup="true">
                        <a href="tel:+1307225998" class="last-link last-link-number">
                            <i class="fas fa-phone-square-alt"></i> +1(307)2259998
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</header>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Header extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Header;
