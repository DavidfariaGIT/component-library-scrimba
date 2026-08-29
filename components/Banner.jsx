import React, { Children } from 'react'

export default function Banner({children, variant, message, compact}) {

let backgroundColor
switch(variant) {
    case "success":
    backgroundColor = "green"
    break;
    case "warning":
    backgroundColor = "yellow"
    break;
    case "error":
    backgroundColor = "red"
    break;
    case "neutral":
    backgroundColor = "blue"
    break;
    default:
    backgroundColor = "white"
}


  return (
    <div className={`Banner ${backgroundColor}`}>
      <h2>{children}</h2>
      {compact ? null : <p>{message}</p>}
    </div>
  )
}
