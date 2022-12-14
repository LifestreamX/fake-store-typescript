import { Container } from '@mui/material';
import Home from '././pages/Home';
import Header from './components/Header';

function App() {
  return (
    <main className='components-wrapper'>
      <Header />
      <Container>
        <Home />
      </Container>
    </main>
  );
}

export default App;
