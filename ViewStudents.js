// src/ViewStudents.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Reg No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Course Enrolled</th>
            <th>Enrollment Date</th>
            <th>Duration Days</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.regno}>
              <td>{student.regno}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.course_enrolled}</td>
              <td>{student.enrollment_date}</td>
              <td>{student.duration_days}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudents;
