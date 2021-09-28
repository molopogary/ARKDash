import { useState,useEffect } from "react"
import '../featuredInfo/featuredInfo.css'



export default function Clock() {

  const current =new Date()
  const date =`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`


  const [clockState,setClockState]=useState()
  //lifecycle
//call everytime it loads
  useEffect(()=>{
    setInterval(()=>{
      const date =new Date()
      setClockState(date.toLocaleTimeString())

    },1000)

  },[])
  return (
    <>
    <div style={{fontSize:'28px'}}>{date}</div>
    <h3>{clockState}</h3>
    </>

  )

  
}
