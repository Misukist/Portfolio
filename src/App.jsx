import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage.jsx';
import NavBar from './components/navBar.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <NavBar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
