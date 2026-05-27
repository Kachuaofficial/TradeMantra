import React from 'react'

function Hero() {
  return (
    <div className='container p-5'>
      <div className='row text-center'>
         <img
          
            src='media/homeHero.png'
            alt='Hero image'
          />
        <h1 className='mt-5'>Invest into everything</h1>
        <p>Online platform to invest stock , derivatives , mutual funds and more</p>
        <button className='p-3 btn btn-primary' style={{width:"25%", margin:"0 auto"}}>Signup</button>
      </div>
    </div>
  )
}

export default Hero
