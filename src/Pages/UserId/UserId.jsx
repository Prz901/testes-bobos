import React from 'react'

export default function UserId({ match }) {
  const id = match.params.id

  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}
