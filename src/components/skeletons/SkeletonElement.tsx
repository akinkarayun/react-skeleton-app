import React from 'react'
import './Skeleton.css'


interface SkeletonElementProps {
  type?: 'text' | 'title' | 'avatar' | 'thumbnail',
}

export const SkeletonElement: React.FC<SkeletonElementProps> = ({ type }) => {
  const classes = `skeleton ${type}`
  return (
    <div className={classes}></div>
  );
}