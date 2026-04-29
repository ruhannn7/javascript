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
        <div className="stat">
          <span className="stat-value pass-val">{passing}</span>
          <span className="stat-label">Passing</span>
        </div>
        <div className="stat">
          <span className="stat-value fail-val">{failing}</span>
          <span className="stat-label">Failing</span>
        </div>
        <div className="stat">
          <span className="stat-value">{students.length}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat">
          <span className="stat-value">{average}</span>
          <span className="stat-label">Average</span>
        </div>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>Student name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Remove</th>
            <th style={{ textAlign: "right" }}>Update</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty-msg">
                No students yet — add one below
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