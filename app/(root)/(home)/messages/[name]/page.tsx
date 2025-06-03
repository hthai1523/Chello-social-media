import React from 'react'

const Message = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>{id}</div>
  )
}

export default Message