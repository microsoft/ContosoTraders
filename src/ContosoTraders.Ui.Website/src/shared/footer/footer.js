import React from 'react'
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import phoneLogo from '../../assets/images/original/Contoso_Assets/Icons/telephone_icon.svg'
import emailLogo from '../../assets/images/original/Contoso_Assets/Icons/email_icon.svg'
import { ReactComponent as Logo } from '../../assets/images/logo-horizontal.svg';


const Footer = () => {
  return (
    <div className='footer-container'>
    <Grid container className='footer-grid-container'>
        <Grid item xs={4} className='section-1'>
            <Link to="/">
                <Logo />
            </Link>
            <p  className='mt-2'>We are proud to announce the launch of one of our latest innovations: Contoso Traders eCommerce store. Our journey of building India’s biggest unicorn start-up has been full of successes, but also failures and learning from them.</p>
        </Grid>
        <Grid item xs={2} className='section-2'>
            <ul>
                <li className='main-element'>Catalog</li>
                {/* <li className='list-element'>My Account</li> */}
                <li className='list-element'><Link to='/list/all-products'>All Products</Link></li>
                <li className='list-element'><Link to='/list/controllers'>Controllers</Link></li>
                <li className='list-element'><Link to='/list/laptops'>Laptops</Link></li>
                <li className='list-element'><Link to='/list/monitors'>Monitors</Link></li>
            </ul>
        </Grid>
        <Grid item xs={2} className='section-3'>
            <ul>
                <li className='main-element'>Legals</li>
                <li className='list-element'><Link to='/terms-of-service'>Terms of Service</Link></li>
                <li className='list-element'><Link to='/refund-policy'>Refund Policy</Link></li>
                <li className='list-element'><Link to='/about-us'>About Us</Link></li>
            </ul>
        </Grid>
        <Grid item xs={4} className='section-4'>
            <ul>
                <li className='main-element'>Contact us</li>
                <li className='list-element'>Feel free to get in touch with us via phone or send us a message</li>
                <li>
                    <div className='contact-div' >
                        <div className='logo-div' >
                            <img src={phoneLogo} alt='phone-logo'/>
                        </div>
                        <div className='list-element'>
                            {' '}+123456768910
                        </div>
                    </div>           
                </li>
                <li>
                    <div className='contact-div' >
                        <div className='logo-div' >
                            <img src={emailLogo} alt='email-logo'/>
                        </div>
                        <div className='list-element'>
                            {' '}support@contosotraders.com
                        </div>
                    </div> 
                </li>
            </ul>
        </Grid>
    </Grid>
    </div>
  )
}

export default Footer