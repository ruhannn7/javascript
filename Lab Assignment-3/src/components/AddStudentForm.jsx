import { useState } from "react";

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const parsedScore = Number(score);

    if (!trimmedName) {
      setError("Please enter a student name.");
      return;
    }
    if (score === "" || isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) {
      setError("Please enter a valid score between 0 and 100.");
      return;
    }

    onAddStudent({ name: trimmedName, score: parsedScore });
    setName("");
    setScore("");
    setError("");
  };

  return (
    <div className="form-card">
      <h2 className="form-title">➕ Add New Student</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-group">
          <label htmlFor="student-name">Student Name</label>
          <input
            id="student-name"
            type="text"
            placeholder="e.g. Cristiano Ronaldo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="student-score">Score (0–100)</label>
          <input
            id="student-score"
            type="number"
            placeholder="e.g. 75"
            value={score}
            min="0"
            max="100"
            onChange={(e) => setScore(e.target.value)}
            className="form-input"
          />
        </div>
        {error && <p className="form-error">{error}</p>}
        <button type="submit" className="submit-btn">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudentForm;
