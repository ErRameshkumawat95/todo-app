import React from 'react'

export default function TodoLists() {
    const [addTodo, setAddTodo] = React.useState('')
    const [listData, setlistData] = React.useState([])

    function addTodoList(){
        setlistData((listData)=>{
            const updatedList =[...listData, addTodo]
            console.log(updatedList)
            setAddTodo('')
            return updatedList
        })
    }


    function removeActivity(){
        const updatedListData = listData.filter((id)=>{
            return(
                id != id
            )
        })
        setlistData(updatedListData)
    }


  return (
    <>
      <h2>TodoLists</h2>
      <input type='text' placeholder='add todo title' value={addTodo} onChange={(e)=> setAddTodo(e.target.value)} />
      <button  onClick={addTodoList}>Save</button>

      <div>
        {

        listData.map((data, id)=>{
            return(
                <>
                <div>
                <p key={id}> 

                    {data}
                    <button onClick={()=>removeActivity(id)}>delete</button>
                </p>
                </div>
                
                </>
            )
        })
        }
      </div>
    </>
  )
}
