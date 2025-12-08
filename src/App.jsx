import { Route, Routes } from 'react-router';
import HomePage from './components/homePage.jsx';
import NavBar from './components/navBar.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
