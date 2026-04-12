import MainLayout from './reactsetup/MainLayout';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App;