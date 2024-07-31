import React, { useState } from 'react'
import ToggleButton from './components/ToggleButton'
import TeamMembers, { users } from './components/TeamMembers'
import AddNewMemberForm from './components/AddNewMemberForm';


let id =1
export default function ManageTeam() {
  const [showForm, setShowForm] = useState(false);
  const [members, setMembers] = useState([users])

function addMember(teamMemberDetail){
setMembers([...members, {...teamMemberDetail, id}])

id++

}

function deleteMember(id){
setMembers(members.filter(member=>member.id !==id))
}

  return (
    <div>
      {
        showForm && <AddNewMemberForm  onSaveClick= {addMember} onDeleteMember={deleteMember}/>
      }
      
      <ToggleButton onChange={(value) => setShowForm(value)} />
      <TeamMembers teamData={members} onDeleteMember={deleteMember} />
      
   
     
     
      
    </div>
  )
}
