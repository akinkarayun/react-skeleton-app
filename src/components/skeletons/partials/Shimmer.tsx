import React from 'react'

interface ShimmerProps {

}

export const Shimmer: React.FC<ShimmerProps> = ({ }) => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer"></div>
    </div>
  )
}