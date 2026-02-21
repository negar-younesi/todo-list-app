# 📝 Todo List App

A modern, responsive todo list application built with vanilla JavaScript, HTML, and CSS.

## ✨ Features

- ✅ Add, edit, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Filter todos by status (All/Completed/Uncompleted)
- ✅ Local storage persistence
- ✅ Responsive design for mobile and desktop
- ✅ Double-click to edit todos
- ✅ Modern UI with smooth animations

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- No additional dependencies required

### Installation
1. Clone this repository:
```bash
git clone https://github.com/yourusername/todo-list-app.git
```

2. Navigate to the project directory:
```bash
cd todo-list-app
```

3. Open `index.html` in your web browser:
```bash
# Simply double-click index.html or use a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📱 Usage

### Adding Todos
1. Type your todo in the input field
2. Click the `+` button or press Enter

### Editing Todos
- Double-click on any todo text to edit it inline
- Press Enter to save or click outside to cancel

### Managing Todos
- Click the checkmark to mark as complete/incomplete
- Click the trash icon to delete a todo
- Use the dropdown to filter todos by status

## 🎨 Features Explained

### Local Storage
All todos are automatically saved to browser's local storage, so your data persists even after closing the browser.

### Responsive Design
The application adapts seamlessly to different screen sizes:
- 📱 Mobile phones (< 480px)
- 📱 Tablets (< 768px)
- 💻 Desktop (> 768px)

### Data Structure
Todos are stored as objects with the following structure:
```javascript
{
  text: "Your todo item",
  completed: false
}
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - No frameworks required
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins font family

## 📂 Project Structure

```
todo-list-app/
├── index.html          # Main HTML file
├── main.js            # JavaScript functionality
├── style.css          # Styling and responsive design
├── fontawesome/       # Font Awesome icons
├── README.md          # This file
├── LICENSE            # MIT License
└── .gitignore         # Git ignore file
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Made with ❤️ using vanilla JavaScript
