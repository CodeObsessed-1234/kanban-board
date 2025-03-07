import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveTask } from "../features/kanbanSlice";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./KanbanBoard.css";

const columns = ["To Do", "In Progress", "Peer Review", "Done"];

const getColumnClass = (column) => {
  switch (column) {
    case "To Do":
      return "to-do";
    case "In Progress":
      return "in-progress";
    case "Peer Review":
      return "peer-review";
    case "Done":
      return "done";
    default:
      return "";
  }
};

const KanbanBoard = ({ searchQuery}) => {
  // get all tasks from the store
  const tasks = useSelector((state) => state.kanban.tasks);
  
  const dispatch = useDispatch();

  // works for drag and drop
  const onDragEnd = (result) => {
    if (!result.destination) return;
    dispatch(
      moveTask({
        id: result.draggableId,
        status: columns[result.destination.droppableId],
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-container">
        {columns.map((column, colIndex) => (
          <Droppable key={column} droppableId={colIndex.toString()}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="kanban-column"
              >
                <h3 className={`kanban-column-title ${getColumnClass(column)}`}>{column}</h3>
                <div className="kanban-task-list">
                  {tasks
                    .filter(
                      (task) =>
                        task.status === column &&
                        (searchQuery === "" ||
                          task.title
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()))
                    )
                    .map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`kanban-task ${
                              snapshot.isDragging ? "dragging" : ""
                            }`}
                          >
                            <div className="task-title">{task.title}</div>
                            <div className="task-description">
                              {task.description.length > 50
                                ? `${task.description.slice(0, 50)}...`
                                : task.description}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
