import './App.css'
import Home from './Components/Home'
import NContextProvider from './Context/NotesContext'
function App() {

  return (
    <NContextProvider>
      <Home></Home>
    </NContextProvider>
  )
}

export default App
