import React from "react";

import "./assets/web/assets/mobirise-icons2/mobirise2.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/css/bootstrap-grid.min.css";
import "./assets/bootstrap/css/bootstrap-reboot.min.css";
import "./assets/theme/css/style.css"
import "./assets/mobirise/css/mbr-additional.css"

import background from "./assets/video/videoplayback.webm"

export const Home = () => {
    return (
        <>
            <body className="home-body">

            <section data-bs-version="5.1" className="header19 cid-t3YWNysssQ mbr-fullscreen"
                     data-bg-video="" id="header19-1">

                <video className='videoTag' autoPlay loop muted>
                    <source src={background} type='video/webm'/>
                </video>

                <div className="container">
                    <div className="media-container">
                        <div className="col-md-12 align-center">
                            <h1 className="mbr-section-title mbr-white mbr-bold mbr-fonts-style mb-3 display-1">Cloud Server</h1>
                            <p className="mbr-text mbr-white mbr-fonts-style display-7">Principe of work</p>

                            {/*<div className="mbr-section-btn align-center">*/}
                            {/*    <a className="btn btn-primary display-4" href="/">Learn More</a>*/}
                            {/*</div>*/}

                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card-wrapper">
                                        <div className="card-box align-center">
                                            <span className="mbr-iconfont mobi-mbri-login mobi-mbri"/>
                                            <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                                                <strong>Login in System</strong>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card-wrapper">
                                        <div className="card-box align-center">
                                            <span className="mbr-iconfont mobi-mbri-upload-2 mobi-mbri"/>
                                            <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                                                <strong>Upload File</strong>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card-wrapper">
                                        <div className="card-box align-center">
                                            <span className="mbr-iconfont mobi-mbri-database mobi-mbri"/>
                                            <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                                                <strong>ACID based</strong>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card-wrapper">
                                        <div className="card-box align-center">
                                            <span className="mbr-iconfont mobi-mbri-touch mobi-mbri"/>
                                            <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                                                <strong>Data management</strong>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <script src="./assets/bootstrap/js/bootstrap.bundle.min.js"/>
            <script src="./assets/smoothscroll/smooth-scroll.js"/>
            <script src="./assets/ytplayer/index.js"/>
            <script src="./assets/vimeoplayer/player.js"/>
            <script src="./assets/theme/js/script.js"/>

            </body>
        </>
    );
};