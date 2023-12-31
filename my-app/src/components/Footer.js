import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
 
  return (
    <div className='footer-container'>
    
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
             {/* 
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
            */}
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
             {/* 
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
            */}
          </div>
          
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            {/* 
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          */}
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram </Link>
            <a
          className='social-icon-link facebook'
          href='https://www.facebook.com/61550281257813'
          target='_blank'
          rel='noopener noreferrer'
          style={{ fontSize: '16px' }} 
        >Facebook
          
        </a>
          
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='foocol'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='images/logo.png' alt='Logo'  style={{ width: '300px', height: 'auto' }} />
              <i class='fab fa-typo3' />
            </Link>
            
          </div>    
          <small class='website-rights'>Your Pet Business, Our Social Media Expertise</small>

          <small class='website-rights'>Copyright © 2023 Pets Reach - All Rights Reserved.</small>
      
          </div>
          {/* 
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>*/}
        </div>
      </section>
    </div>
  );
}

export default Footer;