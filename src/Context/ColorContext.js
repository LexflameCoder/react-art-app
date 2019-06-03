import React, { useState, createContext } from 'react'

export const ColorContext = createContext();

export const ColorProvider = props => {

  const [color, setColor] = useState('#000');

  return (
    <ColorContext.Provider value={[color, setColor]}>
      { props.children }
    </ColorContext.Provider>
  )
}

