import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navhead from './components/Navhead';
import LandingPage from './components/LandingPage';
import Stage from './components/Stages/TheStage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navhead />
        <Routes>
          <Route path="/" element={<LandingPage />} />  {/* Render LandingPage at the root route */}
          <Route path="/stage" element={<Stage />} />   {/* Render Stage component at '/stage' */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
