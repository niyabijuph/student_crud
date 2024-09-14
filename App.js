import React from 'react';
import './App.css';
import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';


const App = () => {
  return (
    <div className="container">
      <h1>Student Enrollment System</h1>
      <AddStudent />
      <ViewStudents />
    
    </div>
  );
};

export default App;
