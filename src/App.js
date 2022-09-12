import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from './componets/Nav';

function App() {
  return (
    <Router>
      <div className="App">

        <Nav />

        <Routes>
          <Route path='/' element={ <h1>Home</h1> } />
          <Route path='*' element={ <h1>Essa rota não existe</h1>  } />
        </Routes>

      </div>
    </Router>
  );
}

export default App