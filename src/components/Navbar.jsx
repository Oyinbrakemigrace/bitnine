import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import youtube from '../assets/icons/youtube.svg'
import facebook from '../assets/icons/facebook.svg'
import search from '../assets/icons/search.svg'
import bitNineLogo from '../assets/images/bitnineLogo.png'

const Navbar = () => {
    return (
        <div>
            <nav class="navigation-bar navbar m-auto ">
                <div class="search-contact d-flex me-4 m-auto">
                    <Link to='#'><img src={search} alt="search" class="mx-3" /></Link>
                    <Link to='#' class="contact mx-3 text-decoration-none">Contact</Link>
                </div>
                <div>
                    <Link to="#" class="mx-3"><img src={github} alt="github"/></Link>
                    <Link to="#" class="mx-3"><img src={linkedin} alt="linkedin"/></Link>
                    <Link to="#" class="mx-3"><img src={youtube} alt="youtube"/></Link>
                    <Link to="#" class="mx-3"><img src={facebook} alt="facebook"/></Link>
                    
                </div>
            </nav>

            <div class="options">
                <select class="select d-block m-auto">Select Language
                    <option value="select-language">Select Language</option>
                    <option value="english">English</option>
                </select>
            </div>
            
            <nav className="navbar navbar-expand-md bg-white navbar-white p-4">
                <button className="navbar-toggler" data-bs-target="#links" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="links">
                    
                    <NavLink to={"/"} className="logo nav-item nav-link"><img src={bitNineLogo} alt="" /></NavLink>
                        <NavLink to={'#'} className='link text-decoration-none text-dark mx-2'>PRODUCTS</NavLink>
                        <NavLink to={'#'} className='link text-decoration-none text-dark mx-2'>USE CASES</NavLink>
                        <NavLink to={'#'} className='link text-decoration-none text-dark mx-2'>SERVICES</NavLink>
                        <NavLink to={'#'} className='link text-decoration-none text-dark mx-2'>RESOURCES</NavLink>
                        <NavLink to={'#'} className='link text-decoration-none text-dark mx-2'>BLOG</NavLink>
                        <NavLink to={'#'} className='link text-decoration-none text-dark mx-2'>COMPANY</NavLink>
                        <NavLink to={'#'} className='link text-decoration-none text-dark mx-2'>IR</NavLink>
                        <button>TRY FREE</button>
                </div>
            </nav>
        </div>

    )
}

export default Navbar