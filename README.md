📝 Todo List App

A modern, responsive Todo List application built with HTML, CSS, and Vanilla JavaScript.

🚀 Live Demo – Try the App

✨ Features
✅ Add new tasks.
✏️ Edit tasks by double-clicking on them.
🗑️ Delete tasks.
✔️ Mark tasks as completed or uncompleted.
🔍 Filter tasks by status:
All
Completed
Uncompleted
💾 Save tasks automatically using Local Storage.
📱 Responsive design for mobile, tablet, and desktop.
🎨 Modern user interface with smooth animations.
🚀 Live Demo

Try the application online:

👉 Open Todo List App

🛠️ Technologies Used
HTML5 – Semantic structure and page layout.
CSS3 – Modern styling, responsive design, and animations.
Vanilla JavaScript – Application logic and interactive features.
Font Awesome – Icons.
Google Fonts – Poppins typography.
📥 Getting Started
Prerequisites
A modern web browser.
Git installed on your computer (for cloning the repository).
Installation

1. Clone the repository:

bash
git clone https://github.com/negar-younesi/todo-list-app.git


2. Navigate to the project directory:

bash
cd todo-list-app


3. Run the application:

Open index.html directly in your browser.

Alternatively, start a local development server:

bash
python -m http.server 8000


Then open the following address in your browser:

http://localhost:8000

📖 Usage
➕ Adding Todos
Enter your task in the input field.
Click the plus (+) button or press Enter.
Your task will appear in the todo list.
✏️ Editing Todos
Double-click on any todo item.
Edit the task text.
Press Enter or click outside the input to save your changes.
✅ Completing Todos

Click the checkmark button to mark a task as completed or uncompleted.

🗑️ Deleting Todos

Click the trash button to remove a task from the list.

🔍 Filtering Todos

Use the dropdown menu to display:

All tasks.
Completed tasks.
Uncompleted tasks.
💾 Local Storage

The application uses the browser's Local Storage to save todo items automatically.

Each task is stored as an object containing its text and completion status.

Example data structure:

javascript
{
  text: "Learn JavaScript",
  completed: false
}


Your tasks remain saved after refreshing the page or reopening the browser on the same device and browser.

📱 Responsive Design

The application is designed to work on different screen sizes:

📱 Mobile phones.
📱 Tablets.
💻 Desktop computers.
📂 Project Structure
text
todo-list-app/
│
├── index.html
├── main
