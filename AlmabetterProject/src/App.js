import Navbar from './Component/navbar/Navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainBar from './Components/SideBar/mainBar'


function App() {
  return (<><Navbar/>
    <div className="App">
      <MainBar />
    </div></>
  )
}

export default App
