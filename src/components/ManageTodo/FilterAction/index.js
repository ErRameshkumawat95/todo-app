import React from "react";

export default function FilterAction({onShowAllList, onSelectComplete,onSelectPending, onSelect }) 
{
  const [option,  setOption] = React.useState('')

  const handleSelect = (action) =>{
    onSelect(action);
    setOption('FilterAction')
  }
  // function callAction(e) {
  //   switch (e.target.value) {
  //     case "completed":
  //       onSelectComplete();
  //       break;
  //     case "pending":
  //       onSelectPending();
  //       break;
  //     case "All":
  //       onShowAllList();
  //       break;
  //     default:
  //       console.log("Select a proper action");
  //   }
  // }
  return (
    <div>
      <select  onChange={(e)=>handleSelect(e.target.value)}>
        <option value="All">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}
