import React from 'react';

// {
//   "name": "Alice Johnson",
//   "age": 20,
//   "collegeYearLevel": "Sophomore",
//   "isEnrolled": true,
//   "course": "Computer Science"
// },

const studentChecker = ({ studentData }) => {
  console.log(studentData);
  return (
    <div>
      <h1>List of Students (Status)</h1>
      <table className=" border-collapse">
        <thead className="">
          <tr>
            <th className="border-1 p-3">Student Name</th>
            <th className="border-1 p-3">Age</th>
            <th className="border-1 p-3">Bachelors Degree</th>
            <th className="border-1 p-3">College Year Level</th>
            <th className="border-1 p-3">Enrollment Status</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.collegeYearLevel}</td>
                <td>{item.isEnrolled ? 'Enrolled' : 'Not Enrolled'}</td>
                <td>{item.course}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default studentChecker;
