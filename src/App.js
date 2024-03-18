import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fetchuser from './components/Fetchuser';
import Displayfulldetails from './components/Displayfulldetails';
import Layout from './components/Layout';


function App() {
  
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Fetchuser/>}></Route>
          <Route path="/Displayfulldetails" element={<Displayfulldetails/>}></Route>
        </Route>
      </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
