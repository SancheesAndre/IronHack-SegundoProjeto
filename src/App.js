import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllRoutesPage from './pages/AllRoutesPage';
import RouteDetailsPage from './pages/RouteDetailsPage';
import NewRoutePage from './pages/NewRoutePage';
import UpdateRoutePage from './pages/UpdateRoutePage';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"


function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/routes' element={<AllRoutesPage />} />
        <Route path='/routes/:routeId' element={<RouteDetailsPage />} />
        <Route path='/new-route' element={<NewRoutePage />} />
        <Route path='/update-route/:routeId' element={<UpdateRoutePage />} />
      </Routes>
    </div>
  );
}

export default App;
