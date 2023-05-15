import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
export default function Navbar() {
    const [showModal,setShowModal]=useState(false);
    const showModalHandler=()=>{
        setShowModal(true)
    }
    const closeModalHandler=()=>{
        setShowModal(false)
    }

    return (
        <> 
        <div className='container' style={{fontFamily:'cursive'}}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-4 " style={{backgroundColor:'a76fca'}} >
                <div className="container-fluid">
                    <Link className="navbar-brand p-2" to="/"><b style={{color:'white',backgroundColor:"black",padding:'3px'}}>Devnath-Electricals</b></Link>
                    {/* <Link className="navbar-brand" to="/"><img src='/Images/logo.jpg' style={{height:'50px'}}/></Link> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-4 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact-us</Link>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                              
                                   
                                <Link to='https://ts-registrationform-local-session-storage-galx.vercel.app/'  target='_blank'> <button className="btn btn-outline-primary mx-2" type="button" >Register</button></Link>
                                <button className="btn btn-outline-primary" type="button"  onClick={showModalHandler}>LogOut</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
        {showModal && <Modal closeModalHandler={closeModalHandler}/>}
        </>
    )
}
