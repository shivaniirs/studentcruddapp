import React from 'react';
 
const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Marks 1</th>
          <th>Marks 2</th>
          <th>Marks 3</th>
          <th>Marks 4</th>
          <th>Marks 5</th>
          <th>Percentage</th>
          <th>Division</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => {
          const totalMarks = student.marks.reduce((acc, mark) => acc + Number(mark), 0);
          const percentage = totalMarks / student.marks.length;
          const division = percentage >= 60 ? 'First Division' : 'Second Division';
 
          return (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              {student.marks.map((mark, idx) => (
                <td key={idx}>{mark}</td>
              ))}
              <td>{percentage.toFixed(2)}</td>
              <td>{division}</td>
              <td>
                <button onClick={() => onEdit(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
 
export default StudentList;