import React, { useState, createContext } from 'react'

export const SizeContext = createContext();

export const SizeProvider = props => {

  const [size, setSize] = useState(10);

  return (
    <SizeContext.Provider value={[size, setSize]}>
      { props.children }
    </SizeContext.Provider>
  )
}
