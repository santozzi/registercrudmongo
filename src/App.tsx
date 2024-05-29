
import './App.css'

import { router } from './routers.tsx'
import { RouterProvider } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Dashboard } from './components/Dashboard'
import { Login } from './components/Login'

function App() {


  return (
    <>
     
      <RouterProvider router = {router} />
    
    </>
  )
}

export default App
