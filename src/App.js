
import Addproduct from './Addproduct';
import Loginform from './Loginform';
import Navbar from './Navbar'



// import Loginform from './Loginform';
import Registerform from './Registerform';
import Todo from './Todo';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path='/' element={<Todo></Todo>}>HomePage</Route>
          <Route path='/Loginform' element={<Loginform></Loginform>} > Login page</Route>
          <Route path='/Register' element={<Registerform></Registerform>}>Register page</Route>
          <Route path="/Addproduct" element={<Addproduct></Addproduct>}>Add product</Route>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
