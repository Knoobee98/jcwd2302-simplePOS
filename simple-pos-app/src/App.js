import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Login from './pages/login'
import HomeAdmin from './pages/homeAdmin';

// import './App.css';

function App() {
  return (
    <>
    {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/admin' element={<HomeAdmin />} />
      </Routes>
    </>
  );
}

export default App;
