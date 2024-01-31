import React from 'react'
import { Header1 } from './Header1'

export const Footer = () => {
    return (
        <div>
            <Header1></Header1>
            <section id="contact" class="subscription">
                <div class="container">
                    <div class="subscribe-title text-center">
                        <h2>
                            do you want to add your business listing with us?
                        </h2>
                        <p>
                            Listrace offer you to list your business with us and we very much able to promote your Business.
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="subscription-input-group">
                                <form action="#">
                                    <input type="email" class="subscription-input-form" placeholder="Enter your email here" />
                                    <button class="appsLand-btn subscribe-btn" onclick="window.location.href='#'">
                                        creat account
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            <footer id="footer" class="footer">
                <div class="container">
                    <div class="footer-menu">
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="navbar-header">
                                    <a class="navbar-brand" href="index.html">list<span>race</span></a>
                                </div>
                            </div>
                            <div class="col-sm-9">
                                <ul class="footer-menu-item">
                                    <li class="scroll"><a href="#works">how it works</a></li>
                                    <li class="scroll"><a href="#explore">explore</a></li>
                                    <li class="scroll"><a href="#reviews">review</a></li>
                                    <li class="scroll"><a href="#blog">blog</a></li>
                                    <li class="scroll"><a href="#contact">contact</a></li>
                                    <li class=" scroll"><a href="#contact">my account</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="hm-footer-copyright">
                        <div class="row">
                            <div class="col-sm-5">
                                <p>
                                    &copy;copyright. designed and developed by <a href="https://www.themesine.com/">themesine</a>
                                </p>
                            </div>
                            <div class="col-sm-7">
                                <div class="footer-social">
                                    <span><i class="fa fa-phone"> +1  (222) 777 8888</i></span>
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-linkedin"></i></a>
                                    <a href="#"><i class="fa fa-google-plus"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="scroll-Top">
                    <div class="return-to-top">
                        <i class="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                    </div>

                </div>

            </footer>
        </div>
    )
}
