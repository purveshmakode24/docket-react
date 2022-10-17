import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom';
import { Layout } from './components/ui/Layout'
import { Home } from './components/pages/Home'
import NotFoundPage from './components/pages/NotFoundPage';
import Counter from './features/counter/components/Counter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
