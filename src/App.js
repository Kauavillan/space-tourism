import './App.css';
import Header from './components/layout/Header';
import IndexContent from './components/IndexContent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import styles from './App.css';
function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/space-tourism" element={<IndexContent/>}/>
          <Route path='destination' element={<Destination/>}/>
          <Route path='crew' element={<Crew/>}/>
          <Route path='technology' element={<Technology/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
