import './App.css';
import Home from './pages/HomePage'
import { Route, Routes } from 'react-router-dom';
import AllRoutesPage from './pages/AllRoutesPage'
import RouteDetailsPage from './pages/RouteDetailsPage'
import NewRoutePage from './pages/NewRoutePage'
import UpdateRoutePage from './pages/UpdateRoutePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/routes' element={AllRoutesPage} />
        <Route path='/routes/:routeId' element={RouteDetailsPage} />
        <Route path='/new-route' element={NewRoutePage} />
        <Route path='/update-route' element={UpdateRoutePage} />
      </Routes>

    </div>
  );
}

export default App;
