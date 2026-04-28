import StudentRow from "./StudentRow";

function StudentTable({ students, onScoreChange, onRemoveStudent }) {
  const passing = students.filter((s) => s.score >= 40).length;
  const failing = students.length - passing;
  const average =
    students.length > 0
      ? (students.reduce((sum, s) => sum + s.score, 0) / students.length).toFixed(1)
      : "0.0";

  return (
    <div className="table-wrapper">
      <div className="table-stats">
        <span className="stat pass-stat">✅ Passing: {passing}</span>
        <span className="stat fail-stat">❌ Failing: {failing}</span>
        <span className="stat total-stat">👥 Total: {students.length}</span>
        <span className="stat avg-stat">📊 Avg: {average}</span>
      </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Remove</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty-msg">
                No students yet. Add one below!
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <StudentRow
                key={student.id}
                student={student}
                onScoreChange={onScoreChange}
                onRemove={onRemoveStudent}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;