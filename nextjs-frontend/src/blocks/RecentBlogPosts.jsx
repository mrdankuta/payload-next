import React from 'react'

export default function RecentBlogPosts({heading}) {
  return (
    <div>
        <h2 className="text-2xl font-medium">{heading}</h2>
        <div className="grid grid-cols-3">
            <div className="h-20 w-20 bg-green-500"></div>
            <div className="h-20 w-20 bg-green-500"></div>
            <div className="h-20 w-20 bg-green-500"></div>
        </div>
    </div>
  )
}
