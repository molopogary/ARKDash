import * as React from 'react';
import { useState,useEffect } from "react"

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import TopBar from '../topbar/TopBar'
import '../featuredInfo/featuredInfo.css'
import Table from '../table/Table'
import Chart from '../chart/Chart'

import {dummyData} from '../../dummyData'

import '../../pages/home/home.css'
import Clock from '../dateTime/Clock.jsx'






export default function BasicGrid() {
  const [targetState,setTargetState]=useState()
  //lifecycle
//call everytime it loads
  useEffect(()=>{
    setInterval(()=>{
      var targets=['250','233','620','168','432']
      setTargetState( targets.forEach(element => {
        console.log(element)
         
       }))

    },10000)

  },[])

 


  let changedTarget= document.getElementById('target')


  return (
      <>
      
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopBar/>
        </Grid>
        <Grid item xs={3}>
          <div className="featuredItem">
        <span className="featuredTitle">TARGET</span>
       
                   </div>

        </Grid>
        <Grid item xs={3}>
          <div className="featuredItem">
        <span className="featuredTitle">ACTUAL</span>
        <h1 >120</h1>
        
       
        
        
    </div>
        </Grid>
        <Grid item xs={3}>
          <div className="featuredItem">
        <span className="featuredTitle"><Clock/></span>
       
        
    </div>
        </Grid>
        <Grid item xs={3}>
        <div className="featuredItem">
        <span className="featuredTitle">LETS GO GUYS</span>
        <h1>ALL IN!</h1>
        
    </div>
        </Grid>
        <Grid item xs={12}>
        <Chart data={dummyData} title=
            "Driver Guard Production" grid dataKey="Target" dataK='Actual' dataKeyss='ActualOkay'/>
          
        </Grid>
       
        <Grid item xs={12}>
          <div className='padTable'>
          <Table/>
          </div>
        </Grid>
        <div className='charts'>
        
        </div>
      </Grid>
    </Box>
    

   </>
  );
}
