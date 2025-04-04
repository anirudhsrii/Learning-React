"use client"
import React, { useState } from "react";
const page  = () =>{
    const[task,settask] = useState("")
    const[description,setdescription] = useState("")
    const[Maintask,setMaintask] = useState([])
    const submithandler = (e)=>{
      e.preventDefault()
      console.log(task)
      console.log(description)
      settask("")
      setdescription("")
      setMaintask([...Maintask,{task,description}])
      console.log(Maintask)
    } 
    const deletehandler = (d)=>{
      let copytask=[...Maintask]
      copytask.splice(d,1)
      setMaintask(copytask)
    }
    let rendertask = <h2 className="text-center text-3xl">NO TASK AVAILABLE</h2>
    if(Maintask.length>0){
      rendertask = Maintask.map((t,d) =>{
        return (
          <li key={d} className="flex items-center justify-between">
            <div className="flex justify-between mb-8 w-2/3">
            <h5 className=" text-2xl font-semibold">{t.task}</h5>
            <h6 className="text-2xl font-semibold">{t.description}</h6>
          </div>
          <button onClick={() =>{
            deletehandler(d)            
          }} 
          className="bg-black text-white rounded text-3xl"> Delete </button>
          </li>
        )
      })
    }
    return (
      <>
      <h1 className="bg-black text-white p-6 text-5xl font-bold text-center"> MY TODO'S LIST</h1>
      <form className="text-center" onSubmit={submithandler}>
        < input type="text" 
        className="text-2xl border-zinc-950 border-4 m-7 px-4 py-4" 
        placeholder="enter task here"
        value={task}
        onChange={(e)=>{
          settask(e.target.value)
        }}
        />
        < input type="text" 
        className="text-2xl border-zinc-950 border-4 m-8 px-4 py-4" 
        placeholder="enter description here"
        value={description}
        onChange={(e)=>{
          setdescription(e.target.value)
        }}
        />
        <button className="text-2xl bg-black rounded font-bold text-white border-5 m-4 p-4">Add task</button>
      </form>
      <hr />
      <div className="bg-slate-500 p-8">
        <ul>{rendertask}</ul>
      </div>
      </>
    )
}
export default page