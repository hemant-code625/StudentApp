import './App.css';
import RecuderHook from "./Hooks/useReducer"
// import UseEffectHook from './Hooks/useEffect';
// import Function from './Hooks/useState';

import Navbar from './components/Navbar/index.js';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Function/> */}

      {/* <UseEffectHook/> */}

      <RecuderHook/>
    </>
  );
}

export default App;
