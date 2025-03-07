# 📝 Kanban Board - ReactJS

A **Kanban Board** built using **ReactJS** with drag-and-drop functionality, task management, and search filtering. This project allows users to organize tasks into different stages and move them seamlessly between columns.

---

## 📌 Features

✔ **Task Management** – Organize tasks under **To Do, In Progress, Peer Review, and Done**.  
✔ **Drag-and-Drop** – Move tasks between columns using `react-beautiful-dnd`.  
✔ **Search Functionality** – Filter tasks in real-time using a search bar.  
✔ **Task Creation** – Add new tasks with a title and description.  
✔ **Fully Responsive** – Works on **desktop & mobile**.  
✔ **State Management** – Uses **React Hooks** for handling state.  

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **ReactJS** | Frontend Framework |
| **react-beautiful-dnd** | Drag-and-drop functionality |
| **Material UI (MUI)** | UI Components & Styling |
| **React Hooks (useState, useEffect)** | State Management |
| **Local Storage (Optional)** | Persistent Data Storage |

---

## 📂 Folder Structure

```
kanban-board/
│── src/
│   ├── components/
│   │   ├── KanbanBoard.js   # Main Kanban Board Component
│   │   ├── TaskModal.js     # Modal for Adding Tasks
│   │   ├── TaskCard.js      # Individual Task Component
│   │   ├── Column.js        # Column Component for Kanban Board
│   ├── assets/              # Icons, Images, etc.
│   ├── App.js               # Main App Component
│   ├── index.js             # Entry Point
│   ├── styles.css           # Main Stylesheet
│── public/
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/your-username/kanban-board.git
cd kanban-board
```

2️⃣ **Install Dependencies**  
```bash
npm install
```

3️⃣ **Run the Application**  
```bash
npm start
```
- The app will be available at **http://localhost:5173**.  

---

## 📌 Usage Guide

### 1️⃣ Adding a New Task
- Click the **"Add Task"** button.  
- Enter **Task Title** and **Description**.  
- Click **"Add Task"**, and it will appear in the **To Do** column.  

### 2️⃣ Moving Tasks
- Drag and drop a task between columns.  
- The task status updates accordingly.  

### 3️⃣ Searching Tasks
- Use the search bar to filter tasks by title.  
- Only matching tasks will be displayed.  

---

## ✅ Best Practices Followed
✔ **State Management:** Uses React Hooks (`useState`).  
✔ **Clean Code:** Follows best practices and modular approach.  
✔ **Drag & Drop:** Implemented with `react-beautiful-dnd`.  
✔ **Responsive UI:** Supports mobile and desktop.  
✔ **Well-Documented:** Code is properly commented and structured.  

---

## 🚀 Future Improvements
🔹 **Task Editing** – Allow users to edit existing tasks.  
🔹 **Task Deletion** – Enable task removal.  
🔹 **Persistent Storage** – Use **LocalStorage** or a **backend** for saving tasks.  

---

## 📌 Contributing
Contributions are welcome! If you'd like to improve this project:  

1. **Fork** this repository.  
2. **Create a branch** (`git checkout -b feature-name`).  
3. **Commit changes** (`git commit -m "Added feature"`).  
4. **Push to the branch** (`git push origin feature-name`).  
5. Open a **Pull Request**.  

---
