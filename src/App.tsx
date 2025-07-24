// import { useState } from 'react'
import Cars from './components/page/cars'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './components/page/home';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path='cars' element={<Cars></Cars>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
