import { createSlice, nanoid } from "@reduxjs/toolkit";

// random task
const initialState = {
  tasks: [
    {
      id: nanoid(),
      title: "Task 1",
      description: "lorem skfncdk dvkdnv dkvnkdnv",
      status: "To Do",
    },
    {
      id: nanoid(),
      title: "Task 2",
      description: "lorem skfncdk dvkdnv dkvnkdnv",
      status: "In Progress",
    },
    {
      id: nanoid(),
      title: "Task 3",
      description: "lorem skfncdk dvkdnv dkvnkdnv",
      status: "Peer Review",
    },
    {
      id: nanoid(), // generates ramdom id
      title: "Task 4",
      description:
        "ksnkvd vm dvknnsd skdvksdv skdvnsknv svnsfnvlfvlf vfovnlfsv  \nv vdmvkdlvs vlsvlsd vlsdnvlksndvld svlndslkvmlsdv ldsnvlkdvldvv s nitin",
      status: "Done",
    },
  ],
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    // reducer to add task with TODO status
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        status: "To Do",
      };
      state.tasks.push(task);
    },
    // reducer to move task to different status
    moveTask: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.status = status;
      }
    },
  },
});

export const { addTask, moveTask } = kanbanSlice.actions;
export default kanbanSlice.reducer;
