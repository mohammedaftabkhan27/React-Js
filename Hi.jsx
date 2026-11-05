import React from 'react'

export default function Hi(props) {
  return (
    <div>
        <p><strong>Name :</strong> {props.name}</p>
        <p><strong>City :</strong> {props.city}</p>
        <p><strong>Age :</strong> {props.age}</p>
        <p><strong>Email :</strong> {props.email}</p>
        <p><strong>Phone :</strong> {props.phone}</p>
    </div>
  )
}
