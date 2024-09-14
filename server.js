const express = require('express');
const bodyParser = require('body-parser'); // Corrected line
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'niya',
  database: 'sri'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Add student enrollment
app.post('/add-student', (req, res) => {
  const { regno, name, department, course_enrolled, enrollment_date, duration_days } = req.body;
  const query = 'INSERT INTO students (regno, name, department, course_enrolled, enrollment_date, duration_days) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [regno, name, department, course_enrolled, enrollment_date, duration_days], (err, results) => {
    if (err) {
      console.error('Error adding student:', err); // Log error details
      res.status(500).send(err);
    } else {
      res.status(200).json({ message: 'Student added successfully' });
    }
  });
});

// View students
app.get('/students', (req, res) => {
  const query = 'SELECT * FROM students';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
