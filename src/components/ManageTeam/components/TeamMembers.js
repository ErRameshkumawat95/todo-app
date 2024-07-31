
import React, { useState } from 'react';

 export const users = [
  {id:1, name: "Abhishek Bardwaj" , email: "abhi123@gmail.com", status: "Active"},
  { id:2, name: "Somesh Mittal" , email: "som3878@yahoo.com", status: "suspend"},
  { id:3, name: "Pankaj Sharma" , email: "sharpan3@.yahoocom", status: "Active"},
  { id:4,name: "Lokesh Singh" , email: "loksin657@gmail.com", status: "suspend"},
  
];
const UserList = ({teamData, onDeleteMember}) => {

  

  

  return (
    <div>
      <h4>Team Member List</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teamData.map((user) => (
            <tr >
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => onDeleteMember(user.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;



