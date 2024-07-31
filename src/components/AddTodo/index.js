import React from "react";

function AddForm({ onSaveClick }) {
  const [todoDetail, setTodoDetail] = React.useState('');
 

function handleSave(){
    onSaveClick({
      title: todoDetail,
      status:"pending"
  })
}
;
  return (
    <div>
      <h4> Add Form</h4>
      <input
        type="text"
        placeholder="Add a new todo"
        onChange={(e) => setTodoDetail(e.target.value)}
      />
    <button onClick={handleSave}>save</button> 
      
      {/* <div>{addTodo}</div> */}
    </div>
  );
}

export default AddForm;
