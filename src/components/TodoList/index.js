import React, { useState } from "react";
import TodoDetail from "../ManageTodo/TodoDetail";

function TodoList({
  data
}) {
  const [filteredList, setFilteredList] = React.useState("");
  const handleFilterChange = (e) => {
    setFilteredList(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by title"
        value={filteredList}
        onChange={handleFilterChange}
      />
      <h4>Todo List</h4>
      <table>
        {data
          .filter((todo) =>
            todo.title.toLowerCase().includes(filteredList.toLowerCase())
          )
          .map((item) => {
            return (

              <TodoDetail item={item}/>
            );
          })}
      </table>
    </div>
  );
}

export default TodoList;
