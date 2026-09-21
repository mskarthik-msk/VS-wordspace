import React from 'react'
import './style.css'

export default function FirstChild({name, age, city, email, mobile, ocup, add}) {
  return (
        <div id='card'>
            <h2>{name}</h2>
            <p><strong>Age : </strong>{age}</p>
            <p><strong>City : </strong>{city}</p>
            <p><strong>Email : </strong>{email}</p>
            <p><strong>Mobile : </strong>{mobile}</p>
            <p><strong>Ocuupation : </strong>{ocup}</p>
            <p><strong>Address : </strong>{add}</p>
          </div>
  )
}
