import React from 'react'

function HakkimizdaLayout({children, ...rest}) {
  console.log(rest);
  
  return (
    <div>
        <h2>Hakkimizda Layout</h2>
        <div>{children}</div>
    </div>
  )
}

export default HakkimizdaLayout