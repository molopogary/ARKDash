import Sidebar from "./components/topbar/sidebar/Sidebar"

import './app.css'

import Grid from './components/grid/Grid'

import WeeklyMonthly from "./components/grid/WeeklyMonthly"




function App() {
  
  return (
    <div className='main'>
      <Grid/>
       <center><h1>Monthly & Weekly Data Analysis</h1></center>

       
      <WeeklyMonthly/>
      
   
    
    </div>
  )
}

export default App
