import React from 'react'
import { SkeletonElement } from '../SkeletonElement';
import { Shimmer } from './Shimmer';
import './Skeleton.css'


interface SkeletonProfileProps {
  theme?: 'light' | 'dark'
}

export const SkeletonProfile: React.FC<SkeletonProfileProps> = ({ theme = 'light' }) => {
  const classes = `skeleton-wrapper ${theme}`

  return (
    <div className={classes}>
      <div className='skeleton-profile'>
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
}