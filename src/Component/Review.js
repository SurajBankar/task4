import React from 'react'
import { Header1 } from './Header1'
import { Statastic } from './Statastic'

export const Review = () => {
    return (
        <div>
            <Header1></Header1>
            <section id="reviews" class="reviews">
                <div class="section-header">
                    <h2>clients reviews</h2>
                    <p>What our client say about us</p>
                </div>
                <div class="blog-content">
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="single-testimonial-box">
                                <div class="testimonial-description">
                                    <div class="testimonial-info">
                                        <div class="testimonial-img">
                                            <img src="assets/images/clients/c1.png" alt="clients" />
                                        </div>
                                        <div class="testimonial-person">
                                            <h2>Tom Leakar</h2>
                                            <h4>london, UK</h4>
                                            <div class="testimonial-person-star">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="testimonial-comment">
                                        <p>
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="single-testimonial-box">
                                <div class="testimonial-description">
                                    <div class="testimonial-info">
                                        <div class="testimonial-img">
                                            <img src="assets/images/clients/c1.png" alt="clients" />
                                        </div>
                                        <div class="testimonial-person">
                                            <h2>Tom Leakar</h2>
                                            <h4>london, UK</h4>
                                            <div class="testimonial-person-star">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="testimonial-comment">
                                        <p>
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="single-testimonial-box">
                                <div class="testimonial-description">
                                    <div class="testimonial-info">
                                        <div class="testimonial-img">
                                            <img src="assets/images/clients/c1.png" alt="clients" />
                                        </div>
                                        <div class="testimonial-person">
                                            <h2>Tom Leakar</h2>
                                            <h4>london, UK</h4>
                                            <div class="testimonial-person-star">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="testimonial-comment">
                                        <p>
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Statastic></Statastic>
        </div>
    )
}
