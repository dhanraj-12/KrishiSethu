// import farmImage from ;
import Login from './components/Login'
import RequestComp from './components/RequestComp'
import ProgressBar from './components/ProgressBar'
import './App.css'

function App() {
  const props = {
    filled : 45,
    total : 100
  }
  return (
    <>
    <RequestComp filled = "45" total = "100" />
    </>
  )
}

export default App
