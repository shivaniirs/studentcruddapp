import React, { useState } from 'react';
import StudentCreate from './components/StudentCreate';
import StudentList from './components/StudentList';
import StudentEdit from './components/StudentEdit';
import './App.css';
 
function StudentApp() {
  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
 
  const addStudent = (student) => {
    setStudents([...students, student]);
  };
 
  const editStudent = (index) => {
    setEditingIndex(index);
  };
 
  const saveStudent = (editedStudent) => {
    const updatedStudents = [...students];
    updatedStudents[editingIndex] = editedStudent;
    setStudents(updatedStudents);
    setEditingIndex(null);
  };
 
  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };
 
  return (
    <div className="App">
      <StudentCreate onAddStudent={addStudent} />
      {editingIndex !== null ? (
        <StudentEdit
          student={students[editingIndex]}
          onSave={saveStudent}
          onCancel={() => setEditingIndex(null)}
        />
      ) : (
        <StudentList
          students={students}
          onEdit={editStudent}
          onDelete={deleteStudent}
        />
      )}
    </div>
  );
}
 
export default StudentApp;