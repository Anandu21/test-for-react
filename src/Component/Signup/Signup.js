import React,{useState,useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../../Store/FirebaseContext'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import './Signup.css'

function Signup() {
    const history = useHistory()
    const [name,setName] = useState('')
    const [email,setEmail] = useState ('')
    const [phone,setPhone] = useState()
    const [password,setpassword] = useState('')
    const {firebase} = useContext(FirebaseContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            result.user.updateProfile({ displayName: name }).then(() => {
                firebase.firestore().collection('user').add({
                    id: result.user.uid,
                    username: name,
                    phone: phone,
                    password: password
                }).then(() => {
                    history.push("/")
                })
            })
        })
    }
    return (

        <div className="divSignOne">
            <h1>AD BUTTON</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">Username</label>
                <br />
                <input
                    className="input"
                    type="text"
                    id="fname"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    name="name"
                    defaultValue=""
                />
                <br />
                <label htmlFor="fname">Email</label>
                <br />
                <input
                    className="input"
                    type="email"
                    id="fname"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    name="email"
                    defaultValue=""
                />
                <br />
                <label htmlFor="lname">Phone</label>
                <br />
                <input
                    className="input"
                    type="number"
                    id="lname"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    name="phone"
                    defaultValue=""
                />
                <br />
                <label htmlFor="lname">Password (must be more than six letters) </label>
                <br />
                <input
                    className="input"
                    type="password"
                    id="lname"
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                    name="password"
                    defaultValue=""
                />
                <br />
                <br />
                <button>Signup</button>
            </form>
            <Link to ="/login"><a>Login</a></Link>
        </div>


    )
}

export default Signup


