import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Landing from "./components/Landing";
import Home from "./components/Home";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <>
      {showLanding ? (
        <Landing onFinish={() => setShowLanding(false)} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;