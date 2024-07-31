import React, { useState, useEffect } from "react";
import AddForm from "../AddTodo";
import TodoList from "../TodoList";
import BulkActions from "./BulkAction";
import FilterAction from "./FilterAction";
import { data } from "../Db/db";
// import FilterBySearchText from "./FilterBySearchText";

let id = 6;

export const ManageTodoContext = React.createContext(null);

function ManageTodo() {
  const [selectedAction, setSelectedAction] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const [todos, setTodos] = useState(data);

  // const [filter, setFilter] = useState([...data])

  const [selectedIDs, setSelectedIDs] = useState([]);

  const [visibleTodos, setVisibleTodos] = useState([...todos]);

  function updateSelectedIDs(id) {
    if (selectedIDs.includes(id)) {
      setSelectedIDs(selectedIDs.filter((selectedID) => selectedID !== id));
      return;
    }
    setSelectedIDs([...selectedIDs, id]);
  }

  function updateStatus(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === "pending" ? "completed" : "pending",
          };
        }
        return todo;
      })
    );
  }

  function handleDelete() {
    setTodos(todos.filter((item) => !selectedIDs.includes(item.id)));
  }

  const handleActionChange = (event) => {
    setSelectedAction(event.target.value);
  };

  function saveTodo(newTodo) {
    setTodos([...todos, { ...newTodo, id }]);
    id++;
  }

  function markCompleted() {
    setTodos(
      todos.map((item) => {
        if (selectedIDs.includes(item.id)) {
          return {
            ...item,
            status: "completed",
          };
        }

        return item;
      })
    );
  }

  function markPending() {
    setTodos(
      todos.map((item) => {
        if (selectedIDs.includes(item.id)) {
          return {
            ...item,
            status: "pending",
          };
        }

        return item;
      })
    );
  }

  // function showCompletedTodoList() {
  //   setTodos(todos);
  //   setTodos((todos) =>
  //     todos.filter((todo) => {
  //       return todo.status === "completed";
  //     })
  //   );
  // }

  // function showPendingTodoList() {
  //   setTodos(todos);
  //   setTodos((todos) =>
  //     todos.filter((todo) => {
  //       return todo.status === "pending";
  //     })
  //   );
  // }

  // function showAllTodoList() {
  //   setTodos(todos);
  // }

  const callFilterAction = (action) => {
    setSelectedAction(action);
  };

  // useEffect(() => {
  //   setVisibleTodos(
  //     todos.filter((todo) => {
        
  //        if (selectedAction === "completed") {
  //         return todo.status === "completed";
  //       } else if (selectedAction === "pending") {
  //         return todo.status === "pending";
  //       }
  //       return todo
  //     })
  //   );
  // }, [todos, selectedAction]);

  useEffect(() => {
 
    setVisibleTodos(
     todos.filter((todo)=> todo.status === selectedAction || selectedAction==="All"  )
     )

   },[todos, selectedAction]);

  //  function handleFilter(status){
  //   if(status === 'All'){
  //     setTodos([...filter])
  //   }
  //   else{
  //     setTodos(filter.filter(todo => todo.status=== status))
  //   }
  //   }

  function callAction(e) {
    switch (e.target.value) {
        case 'mark-completed': markCompleted(); break;
        case 'mark-pending': markPending(); break;
        case 'delete': handleDelete(); break;
        default: console.log("Select a proper action");
    }
}

  return (
    <>
      {/* <select value={selectedAction} onChange={handleActionChange}>
        <option value="">Select an action</option>
        <option value="delete" onClick={handleDelete(item.id)}>Delete</option>
        <option value="markCompleted" onClick  >Mark Completed</option>
        <option value="markPending">Mark Pending</option>
      </select> */}

      {showForm && <AddForm onSaveClick={saveTodo} />}

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide" : "Show"}
      </button>

      <ManageTodoContext.Provider
        value={{
          selectedIDs,
          updateSelectedIDs,
          handleDelete,
          handleActionChange,
          updateStatus,
        }}
      >
        <BulkActions
         callAction={callAction}
        />

        <FilterAction onSelect={callFilterAction} />

        {/* <FilterBySearchText onSearchFilter={handleFilterChange} /> */}
        <TodoList
          data={visibleTodos}
          // onStatusChangeClick={updateStatus}
          // onHandleDelete={handleDelete}
          // selectedIDs={selectedIDs}
          // onCheckToggle={updateSelectedIDs}
          // onHandleActionChange={handleActionChange}
        />
      </ManageTodoContext.Provider>
    </>
  );
}
export default ManageTodo;
