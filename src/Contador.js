import { useState } from "react"

export default function Contador(props) {

  const [numero, setNumero] = useState(0)

  function less() {
    setNumero(numero - 1)
  }

  function more() {
    setNumero(numero + 1)
  }

  return <section style={{ background: props.color }}>
    <h1>{props.jogador}</h1>
    <p>{numero}</p>
    <button onClick={less}>menos</button>
    <button onClick={more}>mais</button>
  </section>
}