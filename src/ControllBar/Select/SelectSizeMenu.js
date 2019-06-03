import React, { useContext } from 'react'
import { SizeContext } from '../../Context/SizeContext'


import './css/size.css'

// In this component i use img-{number} class because of bug
// It takes styles from wrong css fyle so i hardcoded class names

const SelectResMenu = (props) => {
  const [size, setSize] = useContext(SizeContext)

  const visibility = props.hidden ?  'hidden' : 'visible';
  
  const handleClick = (e) => {
    if(e.target.className != 'size-text') return
     setSize(parseInt(e.target.getAttribute('value'), 10))
  }

  return (
    <div className="size-select" style={{ visibility }} onMouseDown={handleClick} >

      <div  className="size-option" > 
        <div className="image-wrapper">
          <div className="image img-first" >  </div>  
        </div>
        <div className="size-text" value="12" > 12 x 12 </div>
      </div>  

      <div  className="size-option" > 
        <div className="image-wrapper">
          <div className="image img-second">  </div>
        </div>
        <div className="size-text" value="10" > 10 x 10 </div>
      </div>  

      <div  className="size-option" > 
        <div className="image-wrapper">
          <div className="image img-third">  </div>
        </div>
        <div className="size-text" value="8" > 8 x 8 </div>
      </div>

    </div>   
  )
}

export default SelectResMenu


