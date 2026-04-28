import { useState } from "react";

function StudentRow({ student, onScoreChange, onRemove }) {
  const [inputValue, setInputValue] = useState(String(student.score));
  const isPassing = student.score >= 40;

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
    <tr className={`student-row ${isPassing ? "pass" : "fail"}`}>
      <td className="td-name">{student.name}</td>
      <td className="td-score-display">{student.score}</td>
      <td className="td-status">
        <span className={`badge ${isPassing ? "badge-pass" : "badge-fail"}`}>
          {isPassing ? "✅Pass" : "❌Fail"}
        </span>
      </td>
      <td>
        <button className="remove-btn" onClick={() => onRemove(student.id)}>
          🗑 Remove
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