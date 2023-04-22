import React from 'react'

import './LogRegStyle.css'

const Registration = () => {
  return (
    <div className='BoDy'>
        <div class="login-box">
            <h2>Register</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required="" />
                    <label>Username</label>
                </div>
                <div class="user-box">
                    <input type="password" name="" required="" />
                    <label>Password</label>
                </div>
                <a href="!#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
    </div>
  )
}

export default Registration