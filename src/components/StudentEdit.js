import React, { useState } from 'react';
 
const StudentEdit = ({ student, onSave, onCancel }) => {
  const [editedStudent, setEditedStudent] = useState({ ...student });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('marks')) {
      const index = parseInt(name.replace('marks', '')) - 1;
      setEditedStudent((prevState) => {
        const newMarks = [...prevState.marks];
        newMarks[index] = value;
        return { ...prevState, marks: newMarks };
      });
    } else {
      setEditedStudent({ ...editedStudent, [name]: value });
    }
  };
 
  const handleSave = (e) => {
    e.preventDefault();
    onSave(editedStudent);
  };
 
  return (
    <form onSubmit={handleSave}>
      <input
        type="text"
        name="name"
value={editedStudent.name}
        onChange={handleChange}
        placeholder="Student Name"
      />
      <input
        type="number"
        name="age"
        value={editedStudent.age}
        onChange={handleChange}
        placeholder="Student Age"
      />
      {editedStudent.marks.map((mark, index) => (
        <input
          key={index}
          type="number"
          name={`marks${index + 1}`}
          value={mark}
          onChange={handleChange}
          placeholder={`Marks ${index + 1}`}
        />
      ))}
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};
 
export default StudentEdit;