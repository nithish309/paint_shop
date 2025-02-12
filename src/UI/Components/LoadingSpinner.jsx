

import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center mt-5">
    <span className="loading loading-ring loading-xs"></span>
    <span className="loading loading-ring loading-sm"></span>
    <span className="loading loading-ring loading-md"></span>
    <span className="loading loading-ring loading-lg"></span>
  </div>
  )
}

export default LoadingSpinner
