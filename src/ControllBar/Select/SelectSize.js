import React, { useState,useContext } from 'react'
import SelectSizeMenu from './SelectSizeMenu'

import './css/size.css'

const SelectResolution = () => {
  const [hidden, setHidden] = useState(true);

  const handleClick = (e) => {
    if(e.target.className === 'size-wrapper' || e.target.className === 'size-image') {
      setHidden(!hidden);
    } else { return }
  }

  return (
    <div style={{position: 'relative'}}>
      <div className="size-wrapper" onMouseDown={handleClick}>
        <div className="size-image"></div>
      </div>

      <SelectSizeMenu hidden={hidden} />
    </div>
  )
}

export default SelectResolution
