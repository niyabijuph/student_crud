// src/AddStudent.js
import React, { useState } from 'react';
import axios from 'axios';


const AddStudent = () => {
  const [student, setStudent] = useState({
    regno: '',
    name: '',
    department: '',
    course_enrolled: '',
    enrollment_date: '',
    duration_days: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/add-student', student);
      alert('Student added successfully');
    } catch (error) {
      console.error('Error adding student:', error.response ? error.response.data : error);
      alert('Failed to add student');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="regno" value={student.regno} onChange={handleChange} placeholder="Reg No" required />
      <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="department" value={student.department} onChange={handleChange} placeholder="Department" required />
      <input type="text" name="course_enrolled" value={student.course_enrolled} onChange={handleChange} placeholder="Course Enrolled" required />
      <input type="date" name="enrollment_date" value={student.enrollment_date} onChange={handleChange} required />
      <input type="number" name="duration_days" value={student.duration_days} onChange={handleChange} placeholder="Duration Days" required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
