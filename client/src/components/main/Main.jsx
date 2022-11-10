import React from 'react'

const Main = () => {

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
}

  return (
    <div>
      <nav>
              <h4>colsole</h4>
              <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  )
}

export default Main
