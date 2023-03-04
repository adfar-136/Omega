import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const params = useParams()
    const id = params.id
  return (
    <div>Details about User {id}</div>
  )
}
