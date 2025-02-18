import React from 'react'
import { hero } from './data/hero.js'

export const Tercer = () => {
  console.log(hero)

  return <pre>{JSON.stringify(hero, null, 2)}</pre>
}

export default Tercer
