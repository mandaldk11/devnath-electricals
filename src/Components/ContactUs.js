import React, { useState } from 'react'
import './Contact.css'
import Map from './Map'
import { BiMap } from 'react-icons/bi';
export default function ContactUs() {
  const [showmap, setShowMap] = useState(true);
  const [values,setValues]=useState({
    name:'',
    email:'',
    textarea:''
  })
  const [error,setError]=useState(false)
  const handleInput=(event)=>{
    const newObj={...values,[event.target.name]:event.target.value};
    setValues(newObj)
  }
  const submitHandler=(event)=>{
    event.preventDefault()
    if (!values.name || !values.email ||!values.textarea) {
      setError(true)
      
    }else{
      setError(false)
      console.log([values.name, values.email,values.textarea])
    }
    
  }
  return (
    <div className='container my-4' >
      <div className='main_flex'>
        <b>Feel Free To Contact Us</b>
        <button onClick={() => setShowMap(!showmap)} className='btn btn-primary mx-2' style={{ color: 'white', backgroundColor: '#7921B1', opacity: '0.7' }}>{showmap ? 'Hide Map' : 'View on Map'}<BiMap style={{ width: '40px', height: '30px' }} /></button>
      </div>
      {showmap && <Map />}
      {/* form */}
      <div className='contact-form my-4 container p-4'>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label" style={{ color: 'white' }}>Full-Name</label>
            <input type="text" name='name' className="form-control" id="formGroupExampleInput" placeholder="Enter your full name..." onChange={handleInput}/>
            <b style={{color:'red'}}>{error && 'Name cant be blank*'}</b>
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label" style={{ color: 'white' }}>E-mail</label>
            <input type="text" name='email' className="form-control" id="formGroupExampleInput2" placeholder="Enter your Email..." onChange={handleInput}/>
            <b style={{color:'red'}}>{error && 'Email cant be blank*'}</b>
          </div>
          <div className='mb-3'>
            <label for="formGroupExampleInput2" className="form-label" style={{ color: 'white' }}>Ask YOur Questions</label>
            <textarea type="text" name='textarea' rows={5} className="form-control" id="formGroupExampleInput2" placeholder="Enter your Queries..." onChange={handleInput}/>
            <b style={{color:'red'}}>{error && 'Write Your Queries*'}</b><br/>
            <button type='submit' className='my-4' style={{color:'white',backgroundColor:'blue'}}>Submit</button>
          </div>

        </form>
      </div>
    </div>
  )
}
