import React,{useEffect,useContext} from 'react'
import Home from './Pages/Home'
import Signup from './Pages/SignUps'
import Login from  './Pages/Logins'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import CreatePost from './Pages/CreatePost'
import ViewPost from './Pages/ViewPost'
import Context, { AuthContext } from './Store/FirebaseContext'
import {FirebaseContext} from './Store/FirebaseContext'
import About from './Pages/About'

function App() {

const {firebase} = useContext (FirebaseContext)
const {setUser} = useContext(AuthContext)
useEffect (()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
})

  return (
    <div className="App">
      <Router>
        <Route path exact="/">
          <Home></Home>
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path = "/create">
           <CreatePost></CreatePost>
        </Route>
        <Route path="/view">
           <ViewPost></ViewPost>
        </Route>
        <Route path="/about">
              <About></About>
        </Route>
      </Router>

    </div>
  )
}

export default App
