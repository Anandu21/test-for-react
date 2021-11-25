import React, { useEffect, useState, useContext, Fragment } from 'react'
import { FirebaseContext,AuthContext } from '../../Store/FirebaseContext'
import './Create.css'


function Create() {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name,setName] = useState('')
  const [category,setCatgory] = useState ('')
  const [image,setImage] = useState(null)
  const handleSubmit =()=>{
    
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
      })
    })
}
  
  return (
    <Fragment>
      <div className="divOneCreate">
        <h1>Web Gallery</h1>
        <form>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            name="Name"
            defaultValue=""
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={category}
            onChange={(e)=>setCatgory(e.target.value)}
            name="category"
            defaultValue=""
          />
          <br />

        </form>
        <br />
        <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""}></img>
          <form>
            <br />
            <input  onChange={(e)=>{
              setImage(e.target.files[0])
            }}
            type="file" />
            <br />
          <button onChange={handleSubmit} className="uploadBtn">upload and Submit</button>
        </form>
      </div>
    </Fragment>
  )
}

export default Create
