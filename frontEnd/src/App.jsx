
import HeroSection from './components/HeroSection'
import About from './components/About'
import Foods from './components/Foods'
import Dishes from './components/Dishes'
import Who_We_Are from './components/Who_We_Are'
import Team from './components/Team'
import Reservation from './components/Reservation'
import { Toaster } from "react-hot-toast";
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Success from './components/Success'
import NotFound from './components/NotFound'



function App() {
 

  return (
    <div className=' bg-customBackground text-customText'>
 <Toaster />
      <Routes>
        <Route path='' element={<Layout />}>
        <Route path='/' element={<HeroSection />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Foods />} />
        <Route path='/team' element={<Team />} />
        <Route path='/menu' element={<Dishes />} />
        <Route path='/expertise' element={<Who_We_Are />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/success' element={<Success />} />
        <Route path='*' element={<NotFound />} />

        </Route>
      </Routes>
   




   
    </div>
  )
}

export default App
