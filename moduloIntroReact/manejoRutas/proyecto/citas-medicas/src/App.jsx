import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Citas from './pages/Citas';
import DetalleCita from './pages/DetalleCita';
import NotFound from './pages/NotFound';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/citas" element={<Citas />} />
                <Route path="/cita/:id" element={<DetalleCita />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;