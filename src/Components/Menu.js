import React from 'react'


const Menu = () => {
  return (
    <div>
    <div className='d-flex justify-content-between px-5 '  style={{
        borderBottom: '5px solid', 
        borderImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))',
        borderImageSlice: 1
     }}>
      <div class= "px-5">
      <div  class="p-2 d-flex  "><h3>Steriods & Body Building </h3></div>
      </div>
      <div class= "d-flex justify-content-center align-items-center px-5">
    <button class="p-2 btn btn-success ">  Home</button>
    <div  class="p-2 ">Steriod  <b>Profile </b></div>
    <div  class="p-2">Steriod Article</div>
    <div  class="p-2">Steriod Forum </div>
    <button class="btn rounded-0" style={{  color: 'black' }}>
  <i class="bi bi-search"></i>  {/* Search Icon */}
</button>
    </div>
    </div>
   <div className='container d-flex  justify-content-between'>
    <div className='d-flex'>
 <button class="btn rounded-0 " style={{ backgroundColor: '#f55a04', color: 'white' }} >
  Breaking News
 </button>
 <p className='p-2 m-0'>All steroids are related to a characteristi... </p>
 </div>

 <div className='d-flex'>
 <div class="p-2 " style={{ color: '#10b553', fontSize: '0.75rem' }}>
  <b>ANABOLIC STEROIDS</b>
</div>
<div class="p-2 " style={{ color: '#10b553', fontSize: '0.75rem' }}>
  <b>HIGH & PEPTIDES</b>
</div>
<div class="p-2 " style={{ color: '#10b553', fontSize: '0.75rem' }}>
  <b>ANTI-ESTROGENS</b>
</div>
<div class="p-2 " style={{ color: '#10b553', fontSize: '0.75rem' }}>
  <b>FAT LOSS</b>
</div>

 </div>

   </div>



    </div>
  )
}

export default Menu