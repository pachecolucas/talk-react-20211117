import Contador from "./Contador"
import Tarefas from "./Tarefas"

export default function App() {
  return <div>
    <Tarefas />
    <Contador jogador="João" color="grey" />
    <Contador jogador="Pedro" color="blue" />
    <Contador jogador="Márcio" color="pink" />
    <Contador jogador="Gustavo" color="yellow" />
  </div>
}