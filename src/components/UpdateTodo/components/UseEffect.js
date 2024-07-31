import React, { useEffect , useRef, useState} from 'react'

export default function UseEffect() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('Ram')

  const [name, setName] = useState("yosits")
  
  const refElement = useRef('')
  // console.log(refElement)

  function updateCount(){
    setCount(count+1)
  }

   function updateData(){
    setData("seeta")
   }

   function reset(){
    setName(" ")
    refElement.current.focus()
   }

  useEffect(()=>{
    console.log("use effect is mounted")
  }, [count])

  function handleInput(){
    refElement.current.style.color ='red';
    refElement.current.value = "ram"
  }

  return (
    <>
   <h3> click button is {count} times</h3>

   <button onClick={updateCount}>click me</button>

   <h5> now name is {data}</h5>

   <button onClick={updateData}>change the data</button>

   <input type='text' value={name} ref={refElement} onChange={(e)=>setName( e.target.value)}/>

   <button onClick={reset}>reset</button>

   <button onClick={handleInput}> handle input </button>

    </>
  )
}
