import React from 'react';
import "../../css/LoginForm.css";

function LoginForm() {

  return (
    <div className='container py-5 my-5 d-flex justify-content-center align-items-center'>
      <div className='loginForm my-5 d-flex justify-content-start align-items-center'>
        <div className='loginContainer d-flex justify-content-center align-items-center flex-column'>
          <h2 className='fw-bold'>Sign in</h2>
          <form className='flex-column py-4 d-flex justify-content-center align-items-center'>
            <input type="email" placeholder='Email' className='mt-3 p-2' />
            <input type="password" name="password" placeholder='Password' className='my-4 p-2' />
            <a href="#" >Forgot your password?</a>
            <button className='btn fw-bold text-white py-2 mt-3'>Sign in</button>
          </form>
        </div>
        <div className='registerContainer d-flex justify-content-center align-items-center flex-column py-5'>
          <h1 className='fw-bold text-white'>Hello, Friend</h1>
          <h4 className='text-white text-center'>Enter Your personal details and start journey with us</h4>
          <button className='btn fw-bold text-white py-2 my-3'>Sign up</button>
        </div>
      </div>

    </div>

  );
}

export default LoginForm;