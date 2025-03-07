import { configureStore } from "@reduxjs/toolkit";
import kanbanReducer from "../../features/kanbanSlice";
export const store = configureStore({
    reducer: {
        kanban: kanbanReducer
    },
});