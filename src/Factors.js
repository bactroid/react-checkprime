import React from 'react'
import {getFactors} from 'checkprime'
import {GridList, GridTile} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import './Factors.css'

const displayFactors = factors => factors.map(displayFactor)
const displayFactor = item => (<GridTile key={item} style={tileStyle}>{item}</GridTile>)
const getColumnAmout = length => length < 8 ? length : 8

const generateElement = num => {
  const factors = getFactors(num)
  return (
    <div id='factors'>
      <Subheader>Factors of {num}</Subheader>
      <GridList cols={getColumnAmout(factors.length)} cellHeight={40}>
        {displayFactors(factors)}
      </GridList>
    </div>
  )
}

const tileStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#00838F',
  color: '#FFFFFF'
}

const Factors = ({display, num}) => display
  ? generateElement(num)
  : null

export default Factors
