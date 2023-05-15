import React from 'react'
import Services from './Services'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import {useNavigate} from 'react-router-dom';

import './Home.css'

export default function Home() {
    const navigate = useNavigate();
    const navigateLearnMore = () => {
        navigate('/services');
      };
    return (
        <div className='container '  style={{fontFamily:'cursive'}}>
            <div className='mainContainer_flex my-4'>
                <div className='child-1'>
                    <b className='text-center' style={{fontSize:'40px'}}>Devnath-Electricals</b>
                    <p className='homePara'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
                    <button className='btn-learnMore' onClick={navigateLearnMore} style={{color:'white',backgroundColor:'#7921B1'}}>Learn More</button>
                </div>
                <div className='child-2'></div>
            </div>
            <hr></hr>
            {/* circles */}
            <div className='my-4'>
                <h1 className=''>Our-Partners</h1>
                <div className='main-circle my-4'>
                    <div className='circle-1 item-1'></div>
                    <div className='circle-1 item-2'></div>
                    <div className='circle-1 item-3'></div>
                    <div className='circle-1 item-4'></div>
                </div>
            </div>
            <hr></hr>
            <Services/>
            <hr/>
          <AboutUs/>
          <hr/>
          <ContactUs/>
        </div>
      
    )
}
