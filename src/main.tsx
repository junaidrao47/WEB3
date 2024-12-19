import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './assets/components/Navbar.tsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
   <BrowserRouter>
      <div className=" bg-slate-900 text-white ">
        <Navbar />

      </div>
      <div className="  bg-slate-900 text-white ">
        <App />
      </div>
    </BrowserRouter>

   
  </StrictMode>,
)
