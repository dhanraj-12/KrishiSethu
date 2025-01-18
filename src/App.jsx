// import farmImage from ;
import Login from './components/Login'
import RequestComp from './components/RequestComp'
import ProgressBar from './components/ProgressBar'
import Content_on_home_page from './components/Content_on_home_page'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'

const router = createBrowserRouter([
  {
    path : '/home',
    element : <Content_on_home_page/>
  },

  {
    path : '/Auth',
    element : <Login/>
  },

  {

  }
])

function App() {
  return (
    <>
     <RouterProvider router = {router}/>

    </>
  )
}

export default App
