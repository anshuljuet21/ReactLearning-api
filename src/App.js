import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import Add from './Component/Add';
import Delete from './Component/Delete';
import Edit from './Component/Edit';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
        <Route path='/delete' element={<Delete/>}></Route>
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
