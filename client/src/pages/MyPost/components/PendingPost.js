import React from 'react';
import clsx from 'clsx';
import styles from './Pending.module.scss'
import PostItem from '../../../components/PostItem';


export default function PendingPost({ myPostPending }) {
 
  return (
    <div>
      {
        myPostPending.map((post, index) => (
          <PostItem key={index} post={post} savedList={false} />
        ))
      }
    </div>
  )
}
