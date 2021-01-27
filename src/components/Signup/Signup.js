import React from 'react'
import './Signup.css'

function Signup() {
    return (
        <>
            <div className="Account__row">
                <div className="account__sidebar">
                    <span className="ecllipse1"></span>
                    <span className="ecllipse2"></span>
                    <span className="ecllipse3"></span>
                    <h1 className="maintext">Learn amazing Digital Skills</h1>
                    <span className="span__hr"></span>
                    <p className="smalltext">Sign up to Acquire a digital skills</p>    
                </div>   
                <div className="account__main">
                    <form>
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Surname" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Choose Password" />
                            <button className="form__button">Sign Up</button>
                    </form>
                    <div>
                        <span className="hr_left"></span><p className="or">or</p><span className="hr_right"></span>
                        <p className="smallertext">Sign up with your social Account</p>
                    </div>
                    <div className='social-icons'>
                        
                    </div>
                    <div>
                        <p className="acct__text">Have an account already? <span className="sign"><a href="">Sign In</a></span></p>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Signup
