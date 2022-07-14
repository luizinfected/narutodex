import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import MeuTime from './pages/MeuTime'
import Ninja from './pages/Ninja'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/ninja/:id' element={<Ninja/>} />
                <Route path='/meu-time' element={<MeuTime/>} />
            </Routes>            
        </BrowserRouter>
    )
}

export default RoutesApp