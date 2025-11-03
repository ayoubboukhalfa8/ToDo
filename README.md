# To-Do List Web Application

## Project Overview
This project is a **web-based To-Do List application** designed to help companies manage tasks efficiently.  
It consists of a **frontend built with Next.js and Redux** and a **backend built with FastAPI and Tortoise ORM/SQLAlchemy**, connected to a MySQL database.  

The application allows users to **create, update, delete, and manage tasks**, with additional features to **track the status of tasks** such as modified or deleted.  
It also includes a **dashboard view** summarizing task statistics.

---

## Features Implemented

### Frontend (Next.js + Redux)
1. **Task List Page**
   - Displays all existing tasks in a structured grid/list.
   - Shows each task’s **ID and title**.
   - **Non-deleted tasks appear first**, followed by deleted tasks.
   - Deleted tasks are visually separated from active tasks with a line separator.
   
2. **Add Task**
   - Users can add a new task by typing the title in the input box.
   - Input validation ensures the task title is not empty.

3. **Edit Task**
   - Users can modify the title of an existing task.
   - Editing is disabled for tasks that have been deleted.

4. **Delete Task**
   - Users can **soft-delete** a task.
   - Deleted tasks appear with a line-through and are disabled for further actions.

5. **Bulk Delete**
   - Users can select multiple tasks (checkboxes) and delete them at once.
   - Deleted tasks **cannot be selected** for bulk actions.

6. **Dashboard Integration**
   - A **dashboard page** displays:
     - Total number of tasks
     - Number of tasks modified
     - Number of tasks deleted
   - Provides a quick overview of task statuses.

7. **UI & UX Enhancements**
   - Uses the [Spike Next.js Free Admin Template](https://www.wrappixel.com/templates/spike-next-js-free-admin-template/).
   - Hover effects for buttons and task items.
   - Responsive and user-friendly design.

---

### Backend (FastAPI + Tortoise ORM)
1. **Database**
   - MySQL database for storing tasks.
   - Tasks table contains fields for:
     - `id` (primary key)
     - `title` (string)
     - `deleted` (boolean)
     - `updated` (boolean / timestamp)
   - Uses **Tortoise ORM** for database modeling and queries.
   - **No raw SQL queries** are used.

2. **API Endpoints**
   - `GET /` → Health check
   - `GET /tasks` → List all tasks
   - `POST /tasks` → Create a task (`{ "title": "..." }`)
   - `PUT /tasks/{id}` → Update a task title
   - `DELETE /tasks/{id}` → Soft-delete a task
   - `POST /tasks/bulk-delete` → Bulk delete tasks by IDs

3. **Architecture**
   - Structured using **Models**, **Services**, **Routes**, and **Database configurations**.
   - Supports clean separation of concerns.
   - Uses **Aerich** for database migrations to manage schema changes efficiently.

4. **CORS**
   - CORS is enabled for the frontend development environment (`http://localhost:3000`).

---

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- Python 3.10+
- MySQL installed and running
- Git installed
- fastapi
- uvicorn
- tortoise-orm
- aiomysql
- pydantic

---

### Frontend Setup 
   cd todo_frontend
   npm run dev
   Dashboard: http://localhost:3000/
   Tasks Page: http://localhost:3000/tasks

### Backend Setup 
   cd todo_backend
   uvicorn app.main:app --reload
   http://127.0.0.1:8000/
   http://127.0.0.1:8000/tasks/
   