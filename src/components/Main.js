import Round from './Round'
import Header from './Header'
import Simulado from './Simulado'

export default function Main() {
  return(
    <div>
      <Header/>
      <div className = "simulado-display">
        <Simulado/>
      </div>
      <Round />
    </div>
  )
}
