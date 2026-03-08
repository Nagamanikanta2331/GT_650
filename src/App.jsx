import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  return (
    <div className="min-h-screen bg-brand-black w-full overflow-hidden">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<Home />} /> {/* History section is on home page, mapped for menu sake, we can scroll too */}
        <Route path="/bookings" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
