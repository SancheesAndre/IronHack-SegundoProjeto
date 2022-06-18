import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AllRoutesPage from './pages/AllRoutesPage'
import RouteDetailsPage from './pages/RouteDetailsPage'
import NewRoutePage from './pages/NewRoutePage'
import UpdateRoutePage from './pages/UpdateRoutePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/routes' element={<AllRoutesPage />} />
        <Route path='/routes/:routeId' element={<RouteDetailsPage />} />
        <Route path='/new-route' element={<NewRoutePage />} />
        <Route path='/update-route' element={<UpdateRoutePage />} />
        {/* <Route path='/*' element={<ErrorPage />} /> */}
      </Routes>

    </div>
  );
}

export default App;
