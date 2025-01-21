import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <Container>
        <Header />

        <Routes>
          <Route></Route>
        </Routes>
        
      </Container>

    </Router>
  );
}

export default App;
