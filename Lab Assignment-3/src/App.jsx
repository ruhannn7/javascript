import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./index.css";

const initialStudents = [
  { id: 1, name: "Alice Johnson", score: 85 },
  { id: 2, name: "Bob Smith", score: 37 },
  { id: 3, name: "Carol White", score: 72 },
  { id: 4, name: "David Brown", score: 40 },
  { id: 5, name: "Eva Martinez", score: 23 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [nextId, setNextId] = useState(6);

  const handleScoreChange = (id, newScore) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, score: newScore } : s))
    );
  };

  const handleAddStudent = ({ name, score }) => {
    setStudents((prev) => [...prev, { id: nextId, name, score }]);
    setNextId((prev) => prev + 1);
  };

  const handleRemoveStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <StudentTable
          students={students}
          onScoreChange={handleScoreChange}
          onRemoveStudent={handleRemoveStudent}
        />
        <AddStudentForm onAddStudent={handleAddStudent} />
      </main>
    </div>
  );
}

export default App;
