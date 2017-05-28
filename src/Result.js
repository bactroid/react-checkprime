import React from 'react'
import './Result.css'
import Factors from './Factors'
import {isPrime} from 'checkprime'

const getText = (num, prime) => {
  return prime
    ? (<p>{num} is prime.</p>)
    : Number.isInteger(num) && prime !== null
      ? (<p>{num} is not prime</p>)
      : null
}

const Result = ({num}) => {
  const primeResult = Number.isInteger(num) && num > 1
    ? isPrime(num)
    : null
  return (
    <div id='result'>
      {getText(num, primeResult)}
      <Factors display={primeResult === false && primeResult !== null && num} num={num} />
    </div>
  )
}

export default Result
