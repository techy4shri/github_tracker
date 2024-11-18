import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Contributors from './components/Contributors';
function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <Routes>
          {/* Redirect from root (/) to the dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Route to the Home (Dashboard) page */}
          <Route path="/dashboard" element={<Home />} />
          <Route path="/contributors" element={<Contributors />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
