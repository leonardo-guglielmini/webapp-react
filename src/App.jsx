import { BrowserRouter, Routes, Route } from 'react-router'
import DefaultLayout from './layouts/DefaultLayout'

import Homepage from './pages/Homepage'
import Moviepage from "./pages/Moviepage"

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/:id" element={<Moviepage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
