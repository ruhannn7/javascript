import { useState } from "react";

function StudentRow({ student, onScoreChange, onRemove }) {
  const [inputValue, setInputValue] = useState(String(student.score));
  const isPassing = student.score >= 40;
  const barWidth = Math.max(0, Math.min(100, student.score));

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    const num = Number(inputValue);
    if (inputValue !== "" && !isNaN(num) && num >= 0 && num <= 100) {
      onScoreChange(student.id, num);
    } else {
      setInputValue(String(student.score));
    }
  };

  return (
    <tr className="student-row">
      <td className="td-name">{student.name}</td>
      <td>
        <div className="score-bar-cell">
          <span className="td-score-display">{student.score}</span>
          <div className="score-bar">
            <div
              className={`score-bar-fill ${isPassing ? "pass" : "fail"}`}
              style={{ width: `${barWidth}%` }}
            />
          </div>
        </div>
      </td>
      <td>
        <span className={`badge ${isPassing ? "badge-pass" : "badge-fail"}`}>
          <span className="badge-dot" />
          {isPassing ? "Pass" : "Fail"}
        </span>
      </td>
      <td>
        <button className="remove-btn" onClick={() => onRemove(student.id)}>
          Remove
        </button>
      </td>
      <td className="td-update">
        <input
          type="number"
          className="score-input"
          value={inputValue}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;