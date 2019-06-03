import React, { useContext } from 'react'
import { ColorContext } from '../../Context/ColorContext'
import './css/color.css'

const SelectColor = () => {

  const [color, setColor] = useContext(ColorContext)

  const handleChange = (e) => {
    setColor(e.target.value)
  }

  return (
    <div>
      <div className="color-wrapper">
        <input type="color" onChange={handleChange} value={color}  />
      </div>
    </div>
  )
}

export default SelectColor
