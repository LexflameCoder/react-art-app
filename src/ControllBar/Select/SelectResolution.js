import React, { useState,useContext } from 'react'
import SelectResMenu from './SelectResMenu'

import './css/resolution.css'

const SelectResolution = () => {
  const [hidden, setHidden] = useState(true);

  const handleClick = (e) => {
    if(e.target.className === 'res-wrapper' || e.target.className === 'res-image'){
      setHidden(!hidden)
    } else { return }
    
  }

  return (
    <div style={{position: 'relative'}}>
      <div className="res-wrapper" onMouseDown={handleClick}>
        <div className="res-image"></div>
      </div>

      <SelectResMenu hidden={hidden} />
    </div>
  )
}

export default SelectResolution
