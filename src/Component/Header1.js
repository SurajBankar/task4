import React from 'react'
import { Link } from 'react-router-dom'


export const Header1 = () => {
    return (
        <div className='fixedElement'>

     
            <header id="header-top" class="header-top">
                <ul>
                    <li>
                        <div class="header-top-left">
                            <ul>
                                <li class="select-opt">
                                    <select name="language" id="language">
                                        <option value="default">EN</option>
                                        <option value="Bangla">BN</option>
                                        <option value="Arabic">AB</option>
                                    </select>
                                </li>
                                <li class="select-opt">
                                    <select name="currency" id="currency">
                                        <option value="usd">USD</option>
                                        <option value="euro">Euro</option>
                                        <option value="bdt">BDT</option>
                                    </select>
                                </li>
                                <li class="select-opt">
                                    <a href="#"><span class="lnr lnr-magnifier"></span></a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="head-responsive-right pull-right">
                        <div class="header-top-right">
                            <ul>
                                <li class="header-top-contact">
                                    +1 222 777 6565
                                </li>
                                <li class="header-top-contact">
                                    <a href="#">sign in</a>
                                </li>
                                <li class="header-top-contact">
                                    <a href="#">register</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

            </header>
            <section class="top-area">
                <div class="header-area">

                    <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                        <div class="container">


                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i class="fa fa-bars"></i>
                                </button>
                                <a class="navbar-brand" href="index.html">list<span>race</span></a>

                            </div>


                            <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li class=" scroll active"><a><Link to={'/home'}>home</Link></a></li>
                                    <li class="scroll"><a href="#works"><Link to={'/work'}>how it works</Link></a></li>
                                    <li class="scroll"><a href="#explore"><Link to={'/explore'}>explore</Link></a></li>
                                    <li class="scroll"><a href="#reviews"><Link to={'/review'}>review</Link></a></li>
                                    <li class="scroll"><a href="#blog"><Link to={'/blog'}>blog</Link></a></li>
                                    <li class="scroll"><a href="#contact"><Link to={'/footer'}>contact</Link></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
                <div class="clearfix"></div>

            </section>
        </div>
    )
}
