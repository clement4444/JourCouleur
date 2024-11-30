import './App.css'
import Tache from './components/tache/Tache'
import JourDate from './components/date/Date'
import Couleur from './components/couleur/Couleur'
import { DateProvider } from './context/TimeContexte'

function App() {

  return (
    <div className="main">
      <div className="dayTache">
        <DateProvider>
          <JourDate />
          <Tache />
          <Couleur />
        </DateProvider>
      </div>
    </div>
  )
}

export default App
