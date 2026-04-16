import React from 'react'

function HomePage() {
    const loggein = false
  return (
    loggein? <button>logout</button>:<button>Login</button>
  
  )
}

export default HomePage