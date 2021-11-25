import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { FirebaseContext } from '../../Store/FirebaseContext';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import './Login.css';

function Login() {
   const history = useHistory()
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const {firebase} = useContext(FirebaseContext)
   
   const handleLogin = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      history.push('/')
    }).catch((error) => {
      alert(error.message)
    })
  }
    return (
        <div className="divOneLogin">
        <h1>AD BUTTON</h1>
        <form onSubmit={handleLogin} >
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to ="/signup"><a>Signup</a></Link>
      </div>
    )
}

export default Login
