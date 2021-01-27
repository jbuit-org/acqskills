import React from 'react'

function Signin() {
    return (
        <>
             <div className="Account__row">
                <div className="account__sidebar">
                    <span className="ecllipse1"></span>
                    <span className="ecllipse2"></span>
                    <span className="ecllipse3"></span>
                    <h1 className="maintext">Welcome Back to Acqskills</h1>
                    <span className="span__hr"></span>
                    <p className="smalltext">Sign in to Access your account</p>    
                </div>   
                <div className="account__main">
                    <form>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Choose Password" />
                            <button className="form__button">Sign In</button>
                            <p className="pass__text">Forgot Password</p>
                    </form>
                    <div>
                        <span className="hr_left"></span><p className="or">or</p><span className="hr_right"></span>
                        <p className="smallertext">Sign in with your social Account</p>
                    </div>
                    <div className='social-icons'>
                        
                    </div>
                    <div>
                        <p className="acct__text">Don't have an account? <span className="sign"><a href="">Sign Up</a></span></p>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Signin
