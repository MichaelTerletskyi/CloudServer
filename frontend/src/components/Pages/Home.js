import React, {useState} from "react";
import "./assets/web/assets/mobirise-icons2/mobirise2.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/css/bootstrap-grid.min.css";
import "./assets/bootstrap/css/bootstrap-reboot.min.css";
import "./assets/dropdown/css/style.css";
import "./assets/socicon/css/styles.css";
import "./assets/theme/css/style.css";
import "./assets/mobirise/css/mbr-additional.css";
import "./assets/mobirise/css/mbr-additional.css";

export const Home = () => {
    const [user] = useState(localStorage.getItem("user"));

    return (
        <>
            <body>
            <section data-bs-version="5.1" className="header19 cid-sFGzrhlvIh" id="header19-3">

                <div className="mbr-overlay">

                </div>

                <div className="container">
                    <div className="media-container">
                        <div className="col-md-12 col-lg-10 m-auto align-center">
                            <h1 className="mbr-section-title mbr-white mbr-fonts-style mb-3 display-1">
                                <strong>Web
                                    <br/>Cloud Server
                                </strong>
                            </h1>
                            <p className="mbr-text mbr-white mbr-fonts-style display-7">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                bibendum diam eu tellus cursus, sodales sollicitudin erat
                                pulvinar. Quisque in mauris blandit, cursus ipsum non, hendrerit
                                enim. Nullam fringilla ex sed maximus efficitur. Sed auctor
                                justo elit, ac vestibulum metus semper non.</p>
                            <div className="mbr-section-btn align-center"><a
                                className="btn btn-primary display-4" href="https://mobiri.se/">Get
                                Started</a> <a className="btn btn-secondary display-4"
                                               href="index.html#features19-a">Read More</a>
                            </div>

                            <div className="row pt-5 justify-content-center">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card-wrapper">
                                        <div className="card-box align-center">
                                                                                <span className="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
                                            <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                                                <strong>Market Analysis</strong>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card-wrapper">
                                        <div className="card-box align-center">
                                                                                <span className="mbr-iconfont mobi-mbri-cart-add mobi-mbri"></span>
                                            <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                                                <strong>Demand Research</strong>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card-wrapper">
                                        <div className="card-box align-center">
                                                                                <span
                                                                                    className="mbr-iconfont mobi-mbri-users mobi-mbri"></span>
                                            <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                                                <strong>Competitor
                                                    Analysis</strong></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card-wrapper">
                                        <div className="card-box align-center">
                                                                                <span
                                                                                    className="mbr-iconfont mobi-mbri-layers mobi-mbri"></span>
                                            <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                                                <strong>Research
                                                    Results</strong></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" className="features19 cid-sFGBbGYuTc" id="features20-4">


                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="card-wrapper pb-4">
                                <div className="card-box align-center">
                                    <h4 className="card-title mbr-fonts-style mb-4 display-2">
                                        <strong>Research Steps</strong>
                                    </h4>
                                    <p className="mbr-text mbr-fonts-style mb-4 display-7">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Duis bibendum diam eu tellus
                                        cursus, sodales sollicitudin erat pulvinar.
                                        Quisque in mauris blandit, cursus ipsum non,
                                        hendrerit enim. Nullam fringilla ex sed maximus
                                        efficitur. Sed auctor justo elit, ac vestibulum
                                        metus semper non.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="item mbr-flex">
                                <div className="icon-box">
                                                                <span
                                                                    className="step-number mbr-fonts-style display-5">1</span>
                                </div>
                                <div className="text-box">
                                    <h4 className="icon-title card-title mbr-black mbr-fonts-style display-7">
                                        <strong>Market Analysis</strong></h4>
                                    <h5 className="icon-text mbr-black mbr-fonts-style display-4">Lorem
                                        ipsum dolor sit amet, consectetur adipiscing
                                        elit. Duis bibendum diam eu tellus cursus,
                                        sodales sollicitudin erat pulvinar. Quisque in
                                        mauris blandit, cursus ipsum non, hendrerit
                                        enim. Nullam fringilla ex sed maximus efficitur.
                                        Sed auctor justo elit, ac vestibulum metus
                                        semper non.</h5>
                                </div>
                            </div>
                            <div className="item mbr-flex">
                                <div className="icon-box">
                                                                <span
                                                                    className="step-number mbr-fonts-style display-5">2</span>
                                </div>
                                <div className="text-box">
                                    <h4 className="icon-title card-title mbr-black mbr-fonts-style display-7">
                                        <strong>Demand Research</strong></h4>
                                    <h5 className="icon-text mbr-black mbr-fonts-style display-4">Lorem
                                        ipsum dolor sit amet, consectetur adipiscing
                                        elit. Duis bibendum diam eu tellus cursus,
                                        sodales sollicitudin erat pulvinar. Quisque in
                                        mauris blandit, cursus ipsum non, hendrerit
                                        enim. Nullam fringilla ex sed maximus efficitur.
                                        Sed auctor justo elit, ac vestibulum metus
                                        semper non.</h5>
                                </div>
                            </div>
                            <div className="item mbr-flex">
                                <div className="icon-box">
                                                                <span
                                                                    className="step-number mbr-fonts-style display-5">3</span>
                                </div>
                                <div className="text-box">
                                    <h4 className="icon-title card-title mbr-black mbr-fonts-style display-7">
                                        <strong>Competitor Analysis</strong></h4>
                                    <h5 className="icon-text mbr-black mbr-fonts-style display-4">Lorem
                                        ipsum dolor sit amet, consectetur adipiscing
                                        elit. Duis bibendum diam eu tellus cursus,
                                        sodales sollicitudin erat pulvinar. Quisque in
                                        mauris blandit, cursus ipsum non, hendrerit
                                        enim. Nullam fringilla ex sed maximus efficitur.
                                        Sed auctor justo elit, ac vestibulum metus
                                        semper non.</h5>
                                </div>
                            </div>
                            <div className="item mbr-flex last">
                                <div className="icon-box">
                                                                <span
                                                                    className="step-number mbr-fonts-style display-5">4</span>
                                </div>
                                <div className="text-box">
                                    <h4 className="icon-title card-title mbr-black mbr-fonts-style display-7">
                                        <strong>Research Results</strong></h4>
                                    <h5 className="icon-text mbr-black mbr-fonts-style display-4">Lorem
                                        ipsum dolor sit amet, consectetur adipiscing
                                        elit. Duis bibendum diam eu tellus cursus,
                                        sodales sollicitudin erat pulvinar. Quisque in
                                        mauris blandit, cursus ipsum non, hendrerit
                                        enim. Nullam fringilla ex sed maximus efficitur.
                                        Sed auctor justo elit, ac vestibulum metus
                                        semper non.</h5>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" className="features18 cid-sFGGxz3b6J" id="features19-a">


                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card col-12 col-lg">
                            <div className="card-wrapper">
                                <h6 className="card-title mbr-fonts-style mb-4 display-2">
                                    <strong>About Agency</strong></h6>
                                <p className="mbr-text mbr-fonts-style display-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Duis bibendum diam eu tellus cursus, sodales
                                    sollicitudin erat pulvinar. Quisque in mauris blandit,
                                    cursus ipsum non, hendrerit enim. Nullam fringilla ex
                                    sed maximus efficitur. <br/><br/>Sed auctor justo elit, ac
                                    vestibulum metus semper non. Vestibulum ante ipsum
                                    primis in faucibus orci luctus et ultrices posuere
                                    cubilia curae; Etiam ut viverra ex. Nunc non elementum
                                    urna, auctor faucibus est.</p>
                                <div className="mbr-section-btn"><a
                                    className="btn btn-secondary display-4"
                                    href="https://mobiri.se">Read More</a></div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="image-wrapper">
                                <img src="assets/images/mbr.jpeg"
                                     alt="Mobirise Website Builder"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" className="features3 cid-sFGGDvi61Z" id="features3-b">


                <div className="container">
                    <div className="mbr-section-head">
                        <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                            <strong>How it Works</strong></h4>

                    </div>
                    <div className="row mt-4">
                        <div className="item features-image сol-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img src="assets/images/mbr-5.jpg"
                                         alt="Mobirise Website Builder"/>
                                </div>
                                <div className="item-content">
                                    <h5 className="item-title mbr-fonts-style display-5">
                                        <strong>Market Analysis</strong></h5>

                                    <p className="mbr-text mbr-fonts-style mt-3 display-7">Lorem
                                        ipsum dolor sit amet, consectetur adipiscing
                                        elit. Duis bibendum diam eu tellus.</p>
                                </div>
                                <div className="mbr-section-btn item-footer mt-2"><a href=""
                                                                                     className="btn btn-primary item-btn display-4"
                                                                                     target="_blank">Learn
                                    More
                                    &gt;</a></div>
                            </div>
                        </div>
                        <div className="item features-image сol-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img src="assets/images/mbr-2.jpg"
                                         alt="Mobirise Website Builder"/>
                                </div>
                                <div className="item-content">
                                    <h5 className="item-title mbr-fonts-style display-5">
                                        <strong>Demand Research</strong></h5>

                                    <p className="mbr-text mbr-fonts-style mt-3 display-7">Lorem
                                        ipsum dolor sit amet, consectetur adipiscing
                                        elit. Duis bibendum diam eu tellus.</p>
                                </div>
                                <div className="mbr-section-btn item-footer mt-2"><a href=""
                                                                                     className="btn btn-primary item-btn display-4"
                                                                                     target="_blank">Learn
                                    More
                                    &gt;</a></div>
                            </div>
                        </div>
                        <div className="item features-image сol-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img src="assets/images/mbr-1.jpg"
                                         alt="Mobirise Website Builder"/>
                                </div>
                                <div className="item-content">
                                    <h5 className="item-title mbr-fonts-style display-5">
                                        <strong>Competitor Analysis</strong></h5>

                                    <p className="mbr-text mbr-fonts-style mt-3 display-7">Lorem
                                        ipsum dolor sit amet, consectetur adipiscing
                                        elit. Duis bibendum diam eu tellus.<br/></p>
                                </div>
                                <div className="mbr-section-btn item-footer mt-2"><a href=""
                                                                                     className="btn btn-primary item-btn display-4"
                                                                                     target="_blank">Learn
                                    More
                                    &gt;</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" className="features9 cid-sFGBGm1Q33" id="features10-5">
                <div className="container">
                    <div className="mbr-section-head">
                        <h3 className="mbr-section-title mbr-fonts-style mb-0 display-2">
                            <strong>Our Pricing</strong></h3>

                    </div>
                    <div className="row mt-4">
                        <div className="card col-12">
                            <div className="card-wrapper">
                                <div className="top-line row">
                                    <div className="col">
                                        <h4 className="card-title mbr-fonts-style display-5">
                                            <strong>Market Analysis</strong></h4>
                                    </div>
                                    <div className="col-auto">
                                        <p className="price mbr-fonts-style display-5">
                                            $139</p>
                                    </div>
                                </div>
                                <div className="bottom-line">
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Duis bibendum diam eu tellus
                                        cursus, sodales sollicitudin erat pulvinar.
                                        Quisque in mauris blandit, cursus ipsum non,
                                        hendrerit enim. Nullam fringilla ex sed maximus
                                        efficitur. Sed auctor justo elit, ac vestibulum
                                        metus semper non. Vestibulum ante ipsum primis
                                        in faucibus orci luctus et ultrices posuere
                                        cubilia curae; Etiam ut viverra ex. Nunc non
                                        elementum urna, auctor faucibus est.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card col-12">
                            <div className="card-wrapper">
                                <div className="top-line row">
                                    <div className="col">
                                        <h4 className="card-title mbr-fonts-style display-5">
                                            <strong>Demand Research</strong></h4>
                                    </div>
                                    <div className="col-auto">
                                        <p className="price mbr-fonts-style display-5">
                                            $229</p>
                                    </div>
                                </div>
                                <div className="bottom-line">
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Duis bibendum diam eu tellus
                                        cursus, sodales sollicitudin erat pulvinar.
                                        Quisque in mauris blandit, cursus ipsum non,
                                        hendrerit enim. Nullam fringilla ex sed maximus
                                        efficitur. Sed auctor justo elit, ac vestibulum
                                        metus semper non. Vestibulum ante ipsum primis
                                        in faucibus orci luctus et ultrices posuere
                                        cubilia curae; Etiam ut viverra ex. Nunc non
                                        elementum urna, auctor faucibus est.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card col-12">
                            <div className="card-wrapper">
                                <div className="top-line row">
                                    <div className="col">
                                        <h4 className="card-title mbr-fonts-style display-5">
                                            <strong>Competitor Analysis</strong>
                                        </h4>
                                    </div>
                                    <div className="col-auto">
                                        <p className="price mbr-fonts-style display-5">
                                            $189</p>
                                    </div>
                                </div>
                                <div className="bottom-line">
                                    <p className="mbr-text mbr-fonts-style display-7">Lorem
                                        ipsum dolor sit amet, consectetur adipiscing
                                        elit. Duis bibendum diam eu tellus cursus,
                                        sodales sollicitudin erat pulvinar. Quisque in
                                        mauris blandit, cursus ipsum non, hendrerit
                                        enim. Nullam fringilla ex sed maximus efficitur.
                                        Sed auctor justo elit, ac vestibulum metus
                                        semper non. Vestibulum ante ipsum primis in
                                        faucibus orci luctus et ultrices posuere cubilia
                                        curae; Etiam ut viverra ex. Nunc non elementum
                                        urna, auctor faucibus est.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" className="team1 cid-sFGGp6mJeM" id="team1-9">


                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                                <strong>Our Team</strong>
                            </h3>

                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="card-wrap">
                                <div className="image-wrap">
                                    <img src="assets/images/mbr-6.jpg"
                                         alt="Mobirise Website Builder"/>
                                </div>
                                <div className="content-wrap">
                                    <h5 className="mbr-section-title card-title mbr-fonts-style align-center m-0 display-5">
                                        <strong>John Smith</strong>
                                    </h5>
                                    <h6 className="mbr-role mbr-fonts-style align-center mb-3 display-4">
                                        <strong>Programmer</strong>
                                    </h6>
                                    <p className="card-text mbr-fonts-style align-center display-7">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Duis bibendum diam eu tellus
                                        cursus.</p>
                                    <div className="social-row display-7">
                                        <div className="soc-item">
                                            <a href="https://www.facebook.com/Mobirise/"
                                               target="_blank">
                                                                                        <span
                                                                                            className="mbr-iconfont socicon socicon-facebook"></span>
                                            </a>
                                        </div>
                                        <div className="soc-item">
                                            <a href="https://twitter.com/mobirise"
                                               target="_blank">
                                                                                        <span
                                                                                            className="mbr-iconfont socicon socicon-twitter"></span>
                                            </a>
                                        </div>
                                        <div className="soc-item">
                                            <a href="https://instagram.com/mobirise"
                                               target="_blank">
                                                                                        <span
                                                                                            className="mbr-iconfont socicon socicon-instagram"></span>
                                            </a>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="card-wrap">
                                <div className="image-wrap">
                                    <img src="assets/images/mbr-7.jpg"
                                         alt="Mobirise Website Builder"/>
                                </div>
                                <div className="content-wrap">
                                    <h5 className="mbr-section-title card-title mbr-fonts-style align-center m-0 display-5">
                                        <strong>Sarah Palmer</strong>
                                    </h5>
                                    <h6 className="mbr-role mbr-fonts-style align-center mb-3 display-4">
                                        <strong>Manager</strong>
                                    </h6>
                                    <p className="card-text mbr-fonts-style align-center display-7">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Duis bibendum diam eu tellus
                                        cursus.
                                    </p>
                                    <div className="social-row display-7">
                                        <div className="soc-item">
                                            <a href="https://www.facebook.com/Mobirise/"
                                               target="_blank">
                                                                                        <span
                                                                                            className="mbr-iconfont socicon socicon-facebook"></span>
                                            </a>
                                        </div>
                                        <div className="soc-item">
                                            <a href="https://twitter.com/mobirise"
                                               target="_blank">
                                                                                        <span
                                                                                            className="mbr-iconfont socicon socicon-twitter"></span>
                                            </a>
                                        </div>
                                        <div className="soc-item">
                                            <a href="https://instagram.com/mobirise"
                                               target="_blank">
                                                                                        <span
                                                                                            className="mbr-iconfont socicon socicon-instagram"></span>
                                            </a>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="card-wrap">
                                <div className="image-wrap">
                                    <img src="assets/images/mbr-8.jpg"
                                         alt="Mobirise Website Builder"/>
                                </div>
                                <div className="content-wrap">
                                    <h5 className="mbr-section-title card-title mbr-fonts-style align-center m-0 display-5">
                                        <strong>Jessica Swift</strong>
                                    </h5>
                                    <h6 className="mbr-role mbr-fonts-style align-center mb-3 display-4">
                                        <strong>Analyst</strong>
                                    </h6>
                                    <p className="card-text mbr-fonts-style align-center display-7">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Duis bibendum diam eu tellus
                                        cursus.
                                    </p>
                                    <div className="social-row display-7">
                                        <div className="soc-item">
                                            <a href="https://www.facebook.com/Mobirise/"
                                               target="_blank">
                                                                                        <span
                                                                                            className="mbr-iconfont socicon socicon-facebook"></span>
                                            </a>
                                        </div>
                                        <div className="soc-item">
                                            <a href="https://twitter.com/mobirise"
                                               target="_blank">
                                                                                        <span
                                                                                            className="mbr-iconfont socicon socicon-twitter"></span>
                                            </a>
                                        </div>
                                        <div className="soc-item">
                                            <a href="https://instagram.com/mobirise"
                                               target="_blank">
                                                                                        <span
                                                                                            className="mbr-iconfont socicon socicon-instagram"></span>
                                            </a>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" className="clients1 cid-sFGFZiVtyo" id="clients1-8">

                <div className="images-container container">
                    <div className="mbr-section-head">
                        <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                            <strong>Our Clients</strong>
                        </h3>


                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-3 card">
                            <img src="assets/images/1.png" alt="Mobirise Website Builder"/>
                        </div>
                        <div className="col-md-3 card">
                            <img src="assets/images/2.png"/>
                        </div>
                        <div className="col-md-3 card">
                            <img src="assets/images/3.png"/>
                        </div>
                        <div className="col-md-3 card">
                            <img src="assets/images/4.png" alt="Mobirise Website Builder"/>
                        </div>
                        <div className="col-md-3 card">
                            <img src="assets/images/2.png" alt="Mobirise Website Builder"/>
                        </div>
                        <div className="col-md-3 card">
                            <img src="assets/images/3.png" alt="Mobirise Website Builder"/>
                        </div>


                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" className="contacts1 cid-sFGJrLtt3K" id="contacts1-c">


                <div className="container">
                    <div className="mbr-section-head">
                        <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                            <strong>Contacts</strong>
                        </h3>
                        <h4 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="card col-12 col-lg-6">
                            <div className="card-wrapper">
                                <div className="card-box align-center">
                                    <div className="image-wrapper">
                                                                        <span
                                                                            className="mbr-iconfont mobi-mbri-letter mobi-mbri"></span>
                                    </div>
                                    <h4 className="card-title mbr-fonts-style mb-2 display-2">
                                        <strong>Email</strong>
                                    </h4>
                                    <p className="mbr-text mbr-fonts-style mb-2 display-4">
                                        We will reply as soon as possible</p>
                                    <h5 className="link mbr-fonts-style display-7"><a
                                        href="mailto:info@site.com"
                                        className="text-primary">Send us an
                                        email</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="card col-12 col-lg-6">
                            <div className="card-wrapper">
                                <div className="card-box align-center">
                                    <div className="image-wrapper">
                                                                        <span
                                                                            className="mbr-iconfont mobi-mbri-mobile-2 mobi-mbri"></span>
                                    </div>
                                    <h4 className="card-title mbr-fonts-style align-center mb-2 display-2">
                                        <strong>Phone</strong>
                                    </h4>
                                    <p className="mbr-text mbr-fonts-style mb-2 display-4">
                                        Mon - Fri 09:00 - 18:00</p>
                                    <h5 className="link mbr-black mbr-fonts-style display-7">
                                        <a href="tel:+12345678910"
                                           className="text-primary">Call (800) 123 45
                                            67</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" className="testimonials2 cid-sFGJsyrALx" id="testimonials2-d">


                <div className="container">
                    <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                        <strong>Testimonials</strong>
                    </h3>
                    <div className="row justify-content-center">
                        <div className="card col-12 col-md-6">
                            <p className="mbr-text mbr-fonts-style mb-4 display-7">Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Duis bibendum diam eu
                                tellus cursus, sodales sollicitudin erat pulvinar. Quisque in
                                mauris blandit, cursus ipsum non, hendrerit enim. Nullam
                                fringilla ex sed maximus efficitur. Sed auctor justo elit, ac
                                vestibulum metus semper non. Vestibulum ante ipsum primis in
                                faucibus orci luctus et ultrices posuere cubilia curae; Etiam ut
                                viverra ex. Nunc non elementum urna, auctor faucibus est.</p>
                            <div className="d-flex mb-md-0 mb-4">
                                <div className="image-wrapper">
                                    <img src="assets/images/team1.jpg"
                                         alt="Mobirise Website Builder"/>
                                </div>
                                <div className="text-wrapper">
                                    <p className="name mbr-fonts-style mb-1 display-4">
                                        <strong>Martin Smith</strong>
                                    </p>
                                    <p className="position mbr-fonts-style display-4">
                                        <strong>Client</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card col-12 col-md-6">
                            <p className="mbr-text mbr-fonts-style mb-4 display-7">Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Duis bibendum diam eu
                                tellus cursus, sodales sollicitudin erat pulvinar. Quisque in
                                mauris blandit, cursus ipsum non, hendrerit enim. Nullam
                                fringilla ex sed maximus efficitur. Sed auctor justo elit, ac
                                vestibulum metus semper non. Vestibulum ante ipsum primis in
                                faucibus orci luctus et ultrices posuere cubilia curae; Etiam ut
                                viverra ex. Nunc non elementum urna, auctor faucibus est.</p>
                            <div className="d-flex mb-md-0 mb-4">
                                <div className="image-wrapper">
                                    <img src="assets/images/team2.jpg"
                                         alt="Mobirise Website Builder"/>
                                </div>
                                <div className="text-wrapper">
                                    <p className="name mbr-fonts-style mb-1 display-4">
                                        <strong>Jessica Brown</strong>
                                    </p>
                                    <p className="position mbr-fonts-style display-4">
                                        <strong>Client</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" className="map3 cid-sFGDeCn4OW" id="map3-6">


                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="mbr-section-title mb-4 align-center mbr-fonts-style display-2">
                                <strong>Office Locations</strong></h3>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h4 className="mbr-section-subtitle mb-3 align-center mbr-fonts-style display-5">New
                                York</h4>
                            <div className="google-map">
                                <iframe frameBorder="0"
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCt1265A4qvZy9HKUeA8J15AOC4SrCyZe4&amp;q=360 5th Ave, New York, NY 10118"
                                        allowFullScreen=""></iframe>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h4 className="mbr-section-subtitle mb-3 mt-5 mt-lg-0 align-center mbr-fonts-style display-5">London</h4>
                            <div className="google-map">
                                <iframe frameBorder="0"
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCt1265A4qvZy9HKUeA8J15AOC4SrCyZe4&amp;q=4-5 Chicheley St, South Bank, London SE1 7"
                                        allowFullScreen=""></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" className="footer1 cid-sFGDg6hy8z" once="footers" id="footer1-7">


                <div className="container">
                    <div className="row mbr-white">
                        <div className="col-12 col-md-6 col-lg-3">
                            <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 display-7">
                                <strong>Links</strong></h5>
                            <ul className="list mbr-fonts-style display-4">
                                <li className="mbr-text item-wrap">Home</li>
                                <li className="mbr-text item-wrap">Features</li>
                                <li className="mbr-text item-wrap">Research</li>
                                <li className="mbr-text item-wrap">Team</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 display-7">
                                <strong>Info</strong></h5>
                            <ul className="list mbr-fonts-style display-4">

                                <li className="mbr-text item-wrap">About</li>
                                <li className="mbr-text item-wrap">Pricing</li>
                                <li className="mbr-text item-wrap">Contacts</li>
                                <li className="mbr-text item-wrap">Office</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 display-7">
                                <strong>Features</strong></h5>
                            <ul className="list mbr-fonts-style display-4">
                                <li className="mbr-text item-wrap">Market Analysis
                                </li>
                                <li className="mbr-text item-wrap">Demand Research
                                </li>
                                <li className="mbr-text item-wrap">Competitor Analysis
                                </li>
                                <li className="mbr-text item-wrap">Research Results
                                </li>
                                <li className="mbr-text item-wrap"><br/></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 display-7">
                                <strong>About</strong>
                            </h5>
                            <p className="mbr-text mbr-fonts-style mb-4 display-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                bibendum diam eu tellus cursus,</p>
                            <h5 className="mbr-section-subtitle mbr-fonts-style mb-3 display-7">
                                <strong>Social</strong>
                            </h5>
                            <div className="social-row display-7">
                                <div className="soc-item">
                                    <a href="https://twitter.com/mobirise" target="_blank">
                                                                        <span
                                                                            className="mbr-iconfont socicon socicon-facebook"></span>
                                    </a>
                                </div>
                                <div className="soc-item">
                                    <a href="https://twitter.com/mobirise" target="_blank">
                                                                        <span
                                                                            className="mbr-iconfont socicon socicon-twitter"></span>
                                    </a>
                                </div>
                                <div className="soc-item">
                                    <a href="https://twitter.com/mobirise" target="_blank">
                                                                        <span
                                                                            className="mbr-iconfont socicon socicon-instagram"></span>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="display-7">
                <a href="https://mobiri.se/2754802"><img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/></a>
                <p className="display-7">Made with Mobirise &#8204;</p>
                    <a href="https://mobirise.com/website-maker.html">Website Maker</a>
            </section>
            <script src="assets/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/smoothscroll/smooth-scroll.js"></script>
            <script src="assets/ytplayer/index.js"></script>
            <script src="assets/dropdown/js/navbar-dropdown.js"></script>
            <script src="assets/vimeoplayer/player.js"></script>
            <script src="assets/theme/js/script.js"></script>
            </body>
        </>
);
};