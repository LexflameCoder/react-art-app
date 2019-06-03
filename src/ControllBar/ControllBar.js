import React from 'react'

import SelectSize from './Select/SelectSize'
import SelectResolution from './Select/SelectResolution';
import SelectColor from './Select/SelectColor'
import CheckGrid from './Check/CheckGrid'


const ControllBar = props => {
  return (
    <div className={props.className}>
      <SelectSize />
      <SelectResolution />
      <SelectColor />
      <CheckGrid />
    </div>
  )
}

export default ControllBar
