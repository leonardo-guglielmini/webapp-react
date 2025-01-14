import { BrowserRouter, Routes, Route } from 'react-router'
import DefaultLayout from './layouts/DefaultLayout'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import Homepage from './pages/Homepage'
import Moviepage from "./pages/Moviepage"
import GlobalContext from './contexts/GlobalContext'

import './App.css'

function App() {

  const [Loading, setLoading] = useState(false)

  return (
    <GlobalContext.Provider value={{Loading, setLoading}}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/movies/:id" element={<Moviepage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
