import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { Routes, Route } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import FavoritePage from './pages/FavoritePage'

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/favorite" element={<FavoritePage />} />
    </Routes>
  );
};

export default App
