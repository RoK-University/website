// Libraries
import { Routes, Route } from "react-router-dom";

// Style
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="header-section">
          <img className="header-img" src='https://i.imgur.com/jXj1pih.png' alt="rok-university-logo" />
          <h1>Welcome to RoK University</h1>
        </section>
      </header>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
