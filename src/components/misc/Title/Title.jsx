import React from "react";

function Title({ text = 'Hola', children }) { // Sirve para poner valores default
  return (
    <h1>Hello {text}{children}</h1>
  )
}

Title.defaultProps = {
  text: 'Hola'
}

export default Title
