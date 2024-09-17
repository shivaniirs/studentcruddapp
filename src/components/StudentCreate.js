import React, { useState } from 'react';
 
const StudentCreate = ({ onAddStudent }) => {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    marks: Array(5).fill(''),
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('marks')) {
      const index = parseInt(name.replace('marks', '')) - 1;
      setStudent((prevState) => {
        const newMarks = [...prevState.marks];
        newMarks[index] = value;
        return { ...prevState, marks: newMarks };
      });
    } else {
      setStudent({ ...student, [name]: value });
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(student);
    setStudent({ name: '', age: '', marks: Array(5).fill('') });
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter Student Record:</h3>
      <input
        type="text"
        name="name"
value={student.name}
        onChange={handleChange}
        placeholder="Student Name"
      />
      <input
        type="number"
        name="age"
        value={student.age}
        onChange={handleChange}
        placeholder="Student Age"
      />
      {student.marks.map((mark, index) => (
        <input
          key={index}
          type="number"
          name={`marks${index + 1}`}
          value={mark}
          onChange={handleChange}
          placeholder={`Marks ${index + 1}`}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
 
export default StudentCreate;