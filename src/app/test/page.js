import React from 'react'
import { resolve } from 'styled-jsx/css'

async function delay(params) {
  return new Promise((resolve) => setTimeout(resolve, params))
  
}

async function TestPage() {
  await delay(3000);

  return (
    <div>TestPage</div>
  )
}

export default TestPage