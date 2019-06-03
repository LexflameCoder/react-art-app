import React, { useContext } from 'react'
import { GridContext } from '../../Context/GridContext'
import './checkstyle.css'

const CheckGrid = () => {

  const [grid, setGrid] = useContext(GridContext)

  const handleChange = (e) => {
    setGrid(e.target.checked)
  }

  return (
    <div>
        <input type="checkbox" onChange={handleChange} checked={grid} />  
    </div>
  )
}

export default CheckGrid
