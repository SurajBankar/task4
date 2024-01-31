import React from 'react'
import { Header1 } from './Header1'

export const Statastic = () => {
    return (
        <div>
            <Header1></Header1>

            <section id="statistics" class="statistics">
                <div class="container">
                    <div class="statistics-counter">
                        <div class="col-md-3 col-sm-6">
                            <div class="single-ststistics-box">
                                <div class="statistics-content">
                                    <div class="counter">90 </div> <span>K+</span>
                                </div>
                                <h3>listings</h3>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="single-ststistics-box">
                                <div class="statistics-content">
                                    <div class="counter">40</div> <span>k+</span>
                                </div>
                                <h3>listing categories</h3>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="single-ststistics-box">
                                <div class="statistics-content">
                                    <div class="counter">65</div> <span>k+</span>
                                </div>
                                <h3>visitors</h3>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="single-ststistics-box">
                                <div class="statistics-content">
                                    <div class="counter">50</div> <span>k+</span>
                                </div>
                                <h3>happy clients</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
