import React from 'react'
import { useState } from 'react'

const Footer = () => {

  // const [email, setEmail] = useState("")

  const mailSend = (e) => {
    e.preventDefault()

    let id = document.getElementById("email")

    fetch(`https://bitter-childlike-silica.glitch.me/mail/${id.value}`)
  }

  return (
    <footer style={{background: "black", padding: "50px"}}>
      <h2 style={{color: "white"}}>Suscribete</h2>
      <form>
        <input type="email" placeholder='Ingrese su email' id='email'/>
        <input type="submit" onClick={mailSend}/>
      </form>
    </footer>
  )
}

export default Footer