import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Peoples } from './views/Peoples';
import { Planets } from './views/Planets';
import { Form } from './views/Form';
function App() {


  return (
    <div style={{ width: '80', margin: '0 auto'}}>
      <Form/>

      <Routes>
        <Route path="/people/:id" element={<Peoples/>} />
        <Route path="/planets/:id" element={<Planets/>} />
      </Routes>
    </div>
  );
}

export default App;
