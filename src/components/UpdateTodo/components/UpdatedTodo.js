// // src/components/Todo.js
// import React, { useState } from 'react';


// const UpdatedTodo = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [editTask, setEditTask] = useState(null);

//   const addTask = () => {
//     if (newTask) {
//       if (editTask !== null) {
//         const updatedTasks = [...tasks];
//         updatedTasks[editTask] = newTask;
//         setTasks(updatedTasks);
//         setEditTask(null);
//       } else {
//         setTasks([...tasks, newTask]);
//       }
//       setNewTask('');
//     }
//   };


// const handleRemoveTask = (id) => {
//     const updatedTasks = tasks.filter((task) => task.id === id);
//     setTasks(updatedTasks);
//   };

//   const editTaskClick = (index) => {
//     setEditTask(index);
//     setNewTask(tasks[index]);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <button onClick={addTask}>
//         {editTask !== null ? 'Update' : 'Add'}
//       </button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}{' '}
//             <button onClick={() => handleRemoveTask(task.id)}>Delete</button>{' '}
//             <button onClick={() => editTaskClick(index)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UpdatedTodo;



import React, { useState } from 'react';

function NewTodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false },
  ]);

  const [selectedAction, setSelectedAction] = useState(null);

  const handleActionChange = (event) => {
    setSelectedAction(event.target.value);
  };

  const handleDelete = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const handleCheckboxChange = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <select value={selectedAction} onChange={handleActionChange}>
        <option value="">Select an action</option>
        <option value="delete">Delete</option>
        <option value="edit">Edit</option>
      </select>

      <button onClick={handleDelete} disabled={selectedAction !== 'delete'}>
       save
      </button>
      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewTodoList;
