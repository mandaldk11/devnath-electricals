import React from 'react'
import img1 from '../assets/img2.jpg'
import img2 from '../assets/img3.jpg'
import img3 from '../assets/homebg4.jpg'
export default function Services() {
    return (
        <div className='container my-2'>
            <h1 className=''>Our-Services</h1>
            <div>
                {/* <!-- first card --> */}
                <div className="container my-4 mx-4">
                    <div className="card mb-3" style={{maxWidth: '840px'}}>
                        <div className="row g-0">
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <img src={img1} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><b className='text-center'>Our Facilities</b></h5>
                                    <p className="card-text">
                                        <ul>
                                            <li>Latest technology and Well experience Faculty</li>
                                            <li> No front fee pay later when get a job minimum salary of 8LPA</li>
                                            <li> 100% Online</li>
                                            <li> Helps you to find jobs With 1000+ partners </li>
                                            <li> Experienced mentorship for your industry level projects</li>
                                        </ul>
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- second card --> */}
                    <div className="card mb-3 " style={{maxWidth: '840px'}}>
                        <div className="row g-0">
                            <div className="col-md-4 order-md-2 d-flex align-items-center justify-content-center">
                                <img src={img2} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8 ">
                                <div className="card-body">
                                    <h5 className="card-title"><b className='text-center'>About Devnath-Electricals</b></h5>
                                    <p className="card-text">This is a wider tech supporting website to enrich your tech skill it will
                                        defenately
                                        blow your mind it also comparises all trend tech skills which helps you to get software
                                        related jobs
                                        and and ensure your progress.It also heps you to Crack your interviews And the main thing is
                                        that
                                        there is <u> no Front fee for this. You will Pay After you get A job mimimum 8 LPA </u>.
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- third card--> */}
                    <div className="card mb-3" style={{maxWidth: '840px'}}>
                        <div className="row g-0">
                            <div className="col-md-4  d-flex align-items-center justify-content-center">
                                <img src={img3} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><b className='text-center'>Establishment</b></h5>
                                    <p className="card-text">This is a Tech company founded by<u> Mr.Dharmendra mandal and MR. Rahul Ratan
                                        mirdha(IIT Roorke) Since JAN 2022</u> .This will help you to shape your carrier in Modern
                                        Technology.So don't be afraid we are here for you .</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
