import React, {useContext} from 'react'
import { ManageTodoContext } from '..'

export default function TodoDetail({item}) {

let {handleDelete, selectedIDs,updateStatus,updateSelectedIDs} = useContext(ManageTodoContext)

  return (
    <div>
      <tr>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIDs.includes(item.id)}
                    onChange={() => updateSelectedIDs(item.id)}

                    
                  />
                </td>
                <td>{item.id}</td>

                <td>{item.title}</td>

                <td>{item.status}</td>

                <td>
                  <button onClick={() => updateStatus(item.id)}>
                    Mark{item.status === "pending" ? "complete" : "pending"}
                  </button>
                </td>
                <td>
                  <button  onClick={()=> handleDelete(item.id)}>
                    delete
                  </button>
                </td>
              </tr>
    </div>
  )
}
