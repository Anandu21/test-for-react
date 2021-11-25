import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { FirebaseContext, AuthContext } from '../../Store/FirebaseContext';
import './Header.css';

function Header() {
    const history = useHistory()
    const { user } = useContext(AuthContext)
    const { firebase } = useContext(FirebaseContext)
    return (
        <div className="divOne">
            <div className="divtwo">
                <h1 className="logo">AD BUTTON</h1>
                <h3 onClick={() => {
                    history.push('/signup')
                }}
                    className="login">{user ? user.displayName : 'Login'}</h3>
                    {user &&<h3 onClick={()=>{
                        firebase.auth().signOut();
                        history.push('/signup')
                    }}
                     className="logout">Logout</h3>}
                 

                <div className="about" >
                    <h3 onClick={() => {
                        history.push('/about')
                    }}
                    >About us</h3>
                </div>
            </div>
        </div>
    )
}

export default Header
