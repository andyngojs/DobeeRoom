import React from 'react'
import PostItem from '../../../components/PostItem'

export default function PublicPost({ myPostPublic }) {
  return (
    <div>
      {
        myPostPublic.map((post, index) => (
          <PostItem key={index} post={post} savedList={false} />
        ))
      }
    </div>
  )
}
