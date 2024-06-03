import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Learn Hooks"]);

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, "Learn useState"]);
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoList;
