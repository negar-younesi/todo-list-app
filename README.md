
# 📝 Todo List App

A modern, responsive Todo List application built with HTML, CSS, and Vanilla JavaScript.

[🚀 Live Demo](https://negar-younesi.github.io/todo-list-app/)

## ✨ Features

- Add new tasks.
- Edit tasks by double-clicking.
- Delete tasks.
- Mark tasks as completed or uncompleted.
- Filter tasks by status (All, Completed, Uncompleted).
- Save tasks using Local Storage.
- Responsive design for mobile and desktop.
- Modern UI with smooth animations.

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome
- Google Fonts (Poppins)

## 🚀 Getting Started

### Prerequisites

- A modern web browser.
- Git (optional).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/negar-younesi/todo-list-app.git
   ```

2. Open the project folder:

   ```bash
   cd todo-list-app
   ```

3. Open `index.html` in your browser.

You can also run a local server:

   ```bash
   python -m http.server 8000
   ```

Then visit `http://localhost:8000`.

## 📖 Usage

### Adding Tasks

1. Enter your task in the input field.
2. Click the plus button or press Enter.

### Editing Tasks

- Double-click a task to edit it.
- Press Enter or click outside to save.

### Managing Tasks

- Click the checkmark to complete a task.
- Click the trash icon to delete a task.
- Use the dropdown menu to filter tasks.

## 💾 Local Storage

All tasks are automatically saved in the browser's Local Storage.

Your tasks remain available after refreshing the page or reopening the browser.

Each task is stored as an object:

   ```javascript
   {
     text: "Learn JavaScript",
     completed: false
   }
   ```

## 📱 Responsive Design

The application supports:

- Mobile phones.
- Tablets.
- Desktop computers.

## 📂 Project Structure

   ```text
   todo-list-app/
   ├── index.html
   ├── main.js
   ├── style.css
   ├── fontawesome/
   ├── README.md
   ├── LICENSE
   └── .gitignore
   ```

## 🌐 Browser Support

- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

## 👩‍💻 Author

Negar Younesi

---

Made with ❤️ using Vanilla JavaScript.
