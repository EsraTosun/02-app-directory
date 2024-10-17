import React from 'react'

function TestLayout({children}) {
    return (
        <div>
                <h1>Ben test layotundan geliyorum!</h1>
                <div>{children}</div>
        </div>
    )
}

export default TestLayout