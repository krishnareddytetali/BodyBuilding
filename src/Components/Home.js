import React from 'react'
import logo from "./Images/logo.jpg"
import image1 from "./Images/image1.jpg"
import image2 from "./Images/image2.jpg"
import image4 from "./Images/image4.jpg"
import image3 from "./Images/image3.jfif"

const Home = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '88vh' }}>
    <div className='container ' >
    <div className='d-flex justify-content-between   w-100'>
    <div className='w-50 position-relative'    >
    <img src={image2} alt="Description" className=' w-100 py-1 ' style={{height:'532px'}} />
    <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h2>Overlay Title</h2>
            <p>This is some description text.</p>
            <button className="btn btn-primary">Click Me</button>
          </div>
    
    </div>
    <div   className='w-50 ' >

    <img src={image1} alt="Description"  className=' p-1 w-100'/>
    
    <div className='d-flex '>
        
    <div>
    <img src={image4} alt="Description" className='px-1 ' style={{ height: "245px", width:"275px"}}  />
    </div>
    <div>
    <img src={image3} alt="Description"  className='pl-1 ' style={{ height: "245px", width:"280px"}}/>
    </div>
    </div>
    </div>
    </div>













    </div>
    </div>
  )
}

export default Home