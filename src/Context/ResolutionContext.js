import React, { useState, createContext } from 'react'

export const ResolutionContext = createContext()

export const ResolutionProvider = props => {

  const [res, setRes] = useState(60);

  return (
    <ResolutionContext.Provider value={[res, setRes]}>
      { props.children }
    </ResolutionContext.Provider>
  )
}
