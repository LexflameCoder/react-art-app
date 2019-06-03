import React, { useState, useEffect, useContext } from 'react'
import FieldBlock from './FieldBlock'

import './loading.css'

import { ResolutionContext } from '../Context/ResolutionContext'
import { SizeContext } from '../Context/SizeContext'
import { GridContext } from '../Context/GridContext'


// Function for generating uniq ID
const ID =  () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

const Field = () => {

  const [field, setField] = useState([])
  const [res, setRes] = useContext(ResolutionContext)
  const [size, setSize] = useContext(SizeContext)
  const [grid, setGrid] = useContext(GridContext)

  useEffect( () => {
    // Resultive array of "FieldBlock-components" that is gonna be passed as state 
    const result = []; 

    // Creating i FieldBlock-components and pushing them into []
    for(let i = 0; i < Math.pow(res, 2); i++) { 
      result.push(<FieldBlock key={ID()} />);
    }

    // Setting state as result
    setField(
    <div className="loading-wrapper">
      <div className="loading"></div>
    </div>
    );
    
    setTimeout(() => setField(result), 2);
    
  }, [res, size] )

  return (
      <div style={{
        position: 'relative',
        width: res * size,
        height: res * size,
        display: 'flex',
        outline: grid ? '1px solid #000' : 'none',
        flexFlow: 'row wrap',
        margin: 0,
      }}
      >
        {field}
      </div>
  )
}

export default Field
