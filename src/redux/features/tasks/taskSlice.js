import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "task 1",
    description: "task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "task 2",
    description: "task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      console.log(action.payload);
      const taskToDelete = state.find((task) => task.id === action.payload);
      state.splice(state.indexOf(taskToDelete), 1);
    },
    updateTask: (state, action) => {
      console.log(action.payload);
      const { id, title, description } = action.payload;
      const taskToEdit = state.find((task) => task.id === id);
      if (taskToEdit) {
        taskToEdit.title = title;
        taskToEdit.description = description;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
