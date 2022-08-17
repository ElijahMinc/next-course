import React from "react"

const PostInfo = ({ title, body }) => {
  return (
    <div>
      <strong>title:</strong>
      <p>{title}</p>
      <strong>body:</strong>
      <p>{body}</p>
    </div>
  )
}

export default PostInfo
