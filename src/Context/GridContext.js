import React, { useState, createContext } from 'react'

export const GridContext = createContext();

export const GridProvider = props => {
  const [grid, setGrid] = useState(true);

  return (
    <GridContext.Provider value={[grid, setGrid]}>
      { props.children }
    </GridContext.Provider>
  )
}