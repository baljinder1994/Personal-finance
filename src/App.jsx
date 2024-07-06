
import { createBrowserRouter,RouterProvider }
 from 'react-router-dom'
 import Home from './pages/Home';
import AddTransactionPage from './pages/Add';
import EditTransactionPage from './pages/Edit';
import FinanceProvider from './context/Context';
 import Navbar from './Navbar';
 
 import './App.css'
function App() {
  const router=createBrowserRouter([
   
    {
      path:'/',
      element:    <><Navbar/><Home/></>
    },
    {
      path:'/add',
      element:    <><Navbar/><AddTransactionPage/></>
    },
    {
      path:'/edit/:id',
      element:    <><Navbar/><EditTransactionPage/></>
    },
    
  ])
  
  return (
    <>
     <FinanceProvider>
    <RouterProvider router={router} />
    </FinanceProvider>
    </>
  )
}

export default App
