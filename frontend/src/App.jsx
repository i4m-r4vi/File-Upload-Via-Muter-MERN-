import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

const App = () => {
  return (
    <div className='nav p-3'>
      <div>
        <h2 className='fw-strong'>Image Upload & Image Gallery</h2>
      </div>
      <div>
          <Link to='/upload' className='btn btn-primary'>Upload Image</Link>
      </div>
    </div>
  )
}

export default App