import React from "react";
import "./TaskModal.css";

const TaskModal = ({
  isOpen,
  newTask,
  setNewTask,
  handleAddTask,
  closeModal,
}) => {
  // if the modal is not open, return null
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>

        <h2>Add New Task</h2>
        <input
          id="task-title"
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <textarea
          id="task-description"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <div className="modal-actions">
          <button onClick={handleAddTask}>Add Task</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
