import React from 'react'

function Awards() {
  return (
    <div className='container'>

      <div className='row'>
        <div className='col-6 mt-5'>
          <img src='media/largestBroker.svg' />

        </div>
        <div className='col-6'>
          <h1>Largest stock broker in India</h1>
          <p>2+ million zerodha clients contribute to over 15% percent of all stock trading in India</p>


          <div className='row mt-5'>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Futures & Option</p>
                </li>
                <li>
                  <p>Comodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>

            <div className='col-6'>
              <ul>
                <li>
                  <p>Futures & Option</p>
                </li>
                <li>
                  <p>Comodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
          </div>
          <img className='mt-5' style={{width:"80%"}} src='media/pressLogos.png'></img>

        </div>
      </div>


    </div>
  )
}

export default Awards
