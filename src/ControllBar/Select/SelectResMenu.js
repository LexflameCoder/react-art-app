import React, { useContext } from 'react'
import { ResolutionContext } from '../../Context/ResolutionContext'


import './css/resolution.css'

const SelectResMenu = (props) => {
  const [res, setRes] = useContext(ResolutionContext)

  const visibility = props.hidden ?  'hidden' : 'visible';
  
  const handleClick = (e) => {
    if(e.target.className != 'res-text') return
    setRes(parseInt(e.target.getAttribute('value'), 10))
  }

  return (
    <div className="res-select" style={{ visibility }} onMouseDown={handleClick} >

      <div  className="res-option" > 
        <div className="image-wrapper">
          <div className="image image-first" >  </div>
        </div>
        <div className="res-text" value="60" > 60 x 60 </div>
      </div>  

      <div  className="res-option" > 
        <div className="image-wrapper">
          <div className="image image-second">  </div>
        </div>
        <div className="res-text" value="40" > 40 x 40 </div>
      </div>  

      <div  className="res-option" > 
        <div className="image-wrapper">
          <div className="image image-third">  </div>
        </div>
        <div className="res-text" value="20" > 20 x 20 </div>
      </div>

    </div>   
  )
}

export default SelectResMenu


