// import farmImage from ;
import Login from './components/Login'
import RequestComp from './components/RequestComp'
import ProgressBar from './components/ProgressBar'
import Content_on_home_page from './components/Content_on_home_page'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Content_on_selling_page from './components/Content_on_selling_page';
import CommingSoon from './components/commingsoon';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import './App.css'
import BulkOption from './components/BulkOption';
import Articles from './components/Articles';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Content_on_home_page/>
  },

  {
    path : '/Auth',
    element : <Login/>
  },

  {
    path : '/Retail',
    element : <CommingSoon/>
  },
  {
    path :  '/Bulk',
    element : <BulkOption/>
  },
  {
    path : '/Profile',
    element : <Profile />
  },
  {
    path : '/Articles',
    element : <Articles/>
  },
  {
    path : '/Bulkbuy',
    element : <RequestComp/>
  },
  {
    path : '/Bulksell',
    element : <Content_on_selling_page/>
  } 
])

function App() {
  return (
    <>
     <RouterProvider router = {router}/>
     {/*  */}
    
      {/* <Profile></Profile> */}

      {/* <Content_on_selling_page /> */}
    </>
  )
}

export default App
