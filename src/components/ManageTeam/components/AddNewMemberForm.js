import React, { useState } from "react";
import { Users } from "./TeamMembers";

export default function AddNewMemberForm({onSaveClick}) {

  const[teamMemberDetail, setTeamMemberDetail] = useState({
    name: '',
    email:'',
    status:'active'
  })

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [status, setStatus] = useState("Active");

  // const [editMember, setEditMember] = useState(null);
  
  // const [members, setMembers] = useState([]);
  // console.log(members)

  const handleNameChange = (event) => {
    setTeamMemberDetail({...teamMemberDetail , name:event.target.value});
  };

  const handleEmailChange = (event) => {
    setTeamMemberDetail({...teamMemberDetail , email:event.target.value});
  };

  const handleStatusChange = (event) => {
    setTeamMemberDetail({...teamMemberDetail , status:event.target.value});
  };

function addNewMember(){
  onSaveClick(teamMemberDetail)
}

  // const handleSaveMember = ({Users}) => {
  //   if (name !== " " && email !== " ") {
  //     setMembers([...members, { name, email, status }]);
  //     setName("");
  //     setEmail("");
  //     setStatus("Active");
  //     // console.log(Users)
      
  //   }
  // };

  

  // const handleRemoveMember = (id) => {
  //   const updatedMembers = members.filter((member) => member.id !== id);
  //   setMembers(updatedMembers);
    
  // };

  // const editMemberClick = (id) => {
  //   setEditMember(id);
  //   setMembers(members[id]);
  // };



  return (
    <div>
      <input
        type="text"
        placeholder="Enter your full Name"
       
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="Enter your email address"
        
        onChange={handleEmailChange}
      />
      <select  onChange={handleStatusChange}>
        <option value="Active">Active</option>
        <option value="Suspend">Suspend</option>
      </select>
      <button onClick={addNewMember}>Save</button>
      
      {/*  */}
      
    </div>
  );
}
