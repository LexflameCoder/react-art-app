import React, {useState, useContext} from 'react'

// Contexts
import { ColorContext } from '../Context/ColorContext'
import { SizeContext } from '../Context/SizeContext'
import { GridContext } from '../Context/GridContext'

const FieldBlock = () => {

  const [color, setColor] = useContext(ColorContext) // Context state
  const [size, setSize] = useContext(SizeContext)
  const [grid, setGrid] = useContext(GridContext)
  const [currentColor, setCurrentColor] = useState('#fff'); // Managing each one's state due to context state

  const handleClick = () => {
    setCurrentColor(color)
  } 


  return (
    <div onMouseDown={handleClick} style={{
      width: size,
      height: size,
      boxSizing: 'border-box',
      border: grid ? '1px solid #ccc' : 'none',
      padding: 0,
      backgroundColor: currentColor,
    }}
    >
    </div>
  )
}

export default FieldBlock
