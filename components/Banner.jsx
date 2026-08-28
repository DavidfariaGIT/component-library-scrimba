import React, { Children } from 'react'

export default function Banner({children, variant, message}) {

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
      <p>{message}</p>
    </div>
  )
}
