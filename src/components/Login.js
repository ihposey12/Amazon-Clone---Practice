import '../styles/Login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()
    }

    const register = (e) => {
        e.preventDefault()
    }

    return(
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='' 
                />
            </Link>
            <div className='login_container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                    <button className='login_signInButton' type='submit' onClick={signIn}>Sign-In</button>
                </form>
                <p>By Signing-In, you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login