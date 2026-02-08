import React, { useState } from "react";

// Simple LMS Demo – React + Tailwind (Single File)

export default function LMSApp() {
  const [tab, setTab] = useState("students");

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar setTab={setTab} />
      <div className="p-6 max-w-7xl mx-auto">
        {tab === "students" && <Students />}
        {tab === "teachers" && <Teachers />}
        {tab === "timetable" && <Timetable />}
        {tab === "fees" && <Fees />}
        {tab === "dashboard" && <Dashboard />}
      </div>
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar({ setTab }) {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-4 justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-500">My LMS</h1>

        <div className="flex gap-3 flex-wrap text-sm">
          <NavBtn title="Dashboard" onClick={() => setTab("dashboard")} />
          <NavBtn title="Students" onClick={() => setTab("students")} />
          <NavBtn title="Teachers" onClick={() => setTab("teachers")} />
          <NavBtn title="Time Table" onClick={() => setTab("timetable")} />
          <NavBtn title="Fees" onClick={() => setTab("fees")} />
        </div>
      </div>
    </nav>
  );
}

function NavBtn({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800 hover:bg-indigo-600 px-4 py-2 rounded-lg transition"
    >
      {title}
    </button>
  );
}

/* ---------------- DASHBOARD ---------------- */
function Dashboard() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card title="Total Students" value="120" />
      <Card title="Total Teachers" value="15" />
      <Card title="Monthly Revenue" value="$2500" />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800">
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-3xl font-bold text-indigo-500 mt-2">{value}</p>
    </div>
  );
}

/* ---------------- STUDENTS ---------------- */
function Students() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const addStudent = () => {
    if (!name || !course) return;
    setStudents([...students, { name, course }]);
    setName("");
    setCourse("");
  };

  return (
    <Section title="Student Records">
      <div className="flex gap-3 mb-6 flex-wrap">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student Name"
          className="input"
        />
        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Course"
          className="input"
        />
        <button onClick={addStudent} className="btn">Add</button>
      </div>

      {students.map((s, i) => (
        <ListItem key={i} text={`${s.name} – ${s.course}`} />
      ))}
    </Section>
  );
}

/* ---------------- TEACHERS ---------------- */
function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const addTeacher = () => {
    if (!name || !subject) return;
    setTeachers([...teachers, { name, subject }]);
    setName("");
    setSubject("");
  };

  return (
    <Section title="Teacher Records">
      <div className="flex gap-3 mb-6 flex-wrap">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Teacher Name"
          className="input"
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="input"
        />
        <button onClick={addTeacher} className="btn">Add</button>
      </div>

      {teachers.map((t, i) => (
        <ListItem key={i} text={`${t.name} – ${t.subject}`} />
      ))}
    </Section>
  );
}

/* ---------------- TIMETABLE ---------------- */
function Timetable() {
  return (
    <Section title="Class Time Table">
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <TimeCard day="Monday" subject="Math" />
        <TimeCard day="Tuesday" subject="Science" />
        <TimeCard day="Wednesday" subject="English" />
      </div>
    </Section>
  );
}

function TimeCard({ day, subject }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
      <h4 className="font-semibold text-indigo-400">{day}</h4>
      <p className="text-gray-300">{subject}</p>
    </div>
  );
}

/* ---------------- FEES ---------------- */
function Fees() {
  const [records, setRecords] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const addFee = () => {
    if (!name || !amount) return;
    setRecords([...records, { name, amount }]);
    setName("");
    setAmount("");
  };

  return (
    <Section title="Monthly Fee Records">
      <div className="flex gap-3 mb-6 flex-wrap">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student Name"
          className="input"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="input"
        />
        <button onClick={addFee} className="btn">Add</button>
      </div>

      {records.map((r, i) => (
        <ListItem key={i} text={`${r.name} – $${r.amount}`} />
      ))}
    </Section>
  );
}

/* ---------------- REUSABLE ---------------- */
function Section({ title, children }) {
  return (
    <div className="bg-gray-950">
      <h2 className="text-3xl font-bold mb-6">
        {title.split(" ")[0]} <span className="text-indigo-500">{title.split(" ").slice(1).join(" ")}</span>
      </h2>
      {children}
    </div>
  );
}

function ListItem({ text }) {
  return (
    <div className="bg-gray-900 border border-gray-800 p-3 rounded-lg mb-2">
      {text}
    </div>
  );
}

/* Tailwind Utility Classes */
const style = document.createElement("style");
style.innerHTML = `
  .input { @apply bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg outline-none; }
  .btn { @apply bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg; }
`;
document.head.appendChild(style);
