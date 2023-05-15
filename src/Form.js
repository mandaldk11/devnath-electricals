import React, { useState } from 'react'

export default function Form() {
    const [inputData, setInputData] = useState({ name: '', email: '', password: '', message: '' });
    const [blankError,setBlankError]=useState(false);
    const [validError,setValidError]=useState(false);
    let nameRegex=/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
    let emailRegex=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    let passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    
    const onChangeHandler = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
       
        if (!nameRegex.test(inputData.name)) {
            setValidError(true);
            setBlankError(false)
        }
        
        if (!emailRegex.test(inputData.email)) {
            setValidError(true)
            setBlankError(false)
        }
        if (!passwordRegex.test(inputData.password)) {
            setValidError(true)
            setBlankError(false)
        }
        if (!inputData.message) {
            setValidError(true)
        }
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        if (!inputData.name || !inputData.email ||!inputData.password||!inputData.message){
            setBlankError(true)
        } else {
            setBlankError(false)
            console.log(inputData)
        }
       
        // setInputData({})
    }

    return (
        <div className='container my-4' style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='container my-4 mx-4' style={{ width: '400px', backgroundColor: 'skyblue', borderRadius: '8px', height: '600px', padding: '22px' }}>
                <h2><b>Login-Form</b></h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name='name'
                            value={inputData.name}
                            onChange={onChangeHandler}

                        />
                        { <div style={{ color: 'red' }}>{blankError ? <b>name can't be blank:</b>:''}</div> }
                        { <div style={{ color: 'red' }}>{validError ? <b>plz enter valid name:</b>:''}</div> }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            name='email'
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={inputData.email}
                            onChange={onChangeHandler} />
                          { <div style={{ color: 'red' }}>{blankError ? <b>email can't be blank:</b>:''}</div> }
                          { <div style={{ color: 'red' }}>{validError ? <b>plz enter valid email:</b>:''}</div> }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            name='password'
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={inputData.password}
                            onChange={onChangeHandler} />
                         { <div style={{ color: 'red' }}>{blankError ? <b>password can't be blank:</b>:''}</div> }
                         { <div style={{ color: 'red' }}>{validError ? <b>plz enter valid password:</b>:''}</div> }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                        <textarea
                            name='message'
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={inputData.message}
                            onChange={onChangeHandler} />
                        { <div style={{ color: 'red' }}>{blankError ? <b>message can't be blank:</b>:''}</div> }
                        { <div style={{ color: 'red' }}>{validError ? <b>plz enter valid message:</b>:''}</div> }
                    </div>


                    <button type='submit' className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}
