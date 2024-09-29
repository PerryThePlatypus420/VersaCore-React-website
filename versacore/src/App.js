import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/MyNav';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <MyNav />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
