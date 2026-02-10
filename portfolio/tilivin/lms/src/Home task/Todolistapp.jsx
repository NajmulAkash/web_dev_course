import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-3xl mb-5">To-Do App</h1>

      <div className="flex gap-2">
        <input
          className="p-2 text-black rounded"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="mt-5 space-y-2">
        {tasks.map((t, i) => (
          <li key={i} className="bg-gray-700 p-3 rounded flex gap-3">
            {t}
            <button
              onClick={() => deleteTask(i)}
              className="bg-red-500 px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
