import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Student from './components/Student';
import Employee from './components/Employee';
import Room from './components/Room';
import Application from './components/Application';
import Signin from './components/Signin';
import Viewstudents from './components/Viewstudents';
import Studentview from './components/Studentview';
import Viewemployee from './components/Viewemployee';
import Employeeview from './components/Employeeview';
import Managerooms from './components/Managerooms';
import Roomview from './components/Roomview';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/student' element={<Student/>} />
      <Route path='/employee' element={<Employee/>} />
      <Route path='/room' element={<Room/>} />
      <Route path='/application' element={<Application/>} />
      <Route path='/studentsView' element={<Viewstudents/>} />
      <Route path='/studentView/:id' element={<Studentview/>} />
      <Route path='`/employeeView/:id' element={<Employeeview/>} />
      <Route path='/employeesView' element={<Viewemployee/>}/>
      <Route path='/viewRooms' element={<Managerooms/>}/>
      <Route path='/roomView/:id' element={<Roomview/>}/>
      
      {/* //  
      // 
      // <Route path='/' element={</>} />
      // <Route path='/' element={</>} />
      // <Route path='/' element={</>} />
      // <Route path='/' element={</>} /> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
