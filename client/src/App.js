import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Register from './components/Login/login';
import Home from './components/Home/home';

import {UserContextProvider} from '../src/context/UserContext';
import './App.css';

function App() {

  return (
    <UserContextProvider>

      <div className="App">
        <Header />
          <Routes>
              <Route exact path="/" element={<Register/>} />
              <Route exact path="/home" element={<Home/>} />
          </Routes>
      </div>

    </UserContextProvider>
  );
}

export default App;
