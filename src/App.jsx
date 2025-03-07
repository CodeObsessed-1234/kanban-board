import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./features/kanbanSlice";
import TaskModal from "./components/TaskModal";


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const dispatch = useDispatch();

  // handle add task to the store with status TODO
  const handleAddTask = () => {
    if (newTask.title.trim() === "") return;
    dispatch(addTask(newTask)); 
    setNewTask({ title: "", description: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <button className="add-task-btn" onClick={() => setIsModalOpen(true)}>
          Add Task
        </button>
      </div>
      <KanbanBoard searchQuery={searchQuery} />
      <TaskModal
        isOpen={isModalOpen}
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
