import React from 'react'
import { SkeletonElement } from '../SkeletonElement';
import { Shimmer } from './Shimmer';
import './Skeleton.css'

interface SkeletonArticleProps {
  theme?: 'light' | 'dark'
}

export const SkeletonArticle: React.FC<SkeletonArticleProps> = ({ theme = 'light' }) => {
  const classes = `skeleton-wrapper ${theme}`

  return (
    <div className={classes}>
      <div className='skeleton-article'>
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
}