import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TopBar from '../topbar/TopBar'
import '../featuredInfo/featuredInfo.css'
import Table from '../table/Table'
import Chart from '../chart/Chart'
import OkvsNotOk from '../chart/OkvsNotOk';
import {dummyData} from '../../dummyData'
import { prodData } from '../../OknotOkDummy'
import '../../pages/home/home.css'


export default function BasicGrid() {



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
        <h1>250</h1>
        
                   </div>

        </Grid>
        <Grid item xs={3}>
          <div className="featuredItem">
        <span className="featuredTitle">ACTUAL</span>
        <h1>120</h1>
        
    </div>
        </Grid>
        <Grid item xs={3}>
          <div className="featuredItem">
        <span className="featuredTitle">SHIFT</span>
        <h1>07:30-15:30</h1>
        
    </div>
        </Grid>
        <Grid item xs={3}>
        <div className="featuredItem">
        <span className="featuredTitle">LETS GO GUYS</span>
        <h1>ALL IN!</h1>
        
    </div>
        </Grid>
        <Grid item xs={12}>
          <Table/>
        </Grid>
        <div className='charts'>
                
        <Grid item xs={6}>
        <OkvsNotOk data={prodData} title="Real Time Performance" dataKey="ok" dataK="notOk"/>          
        </Grid>
        <Grid item xs={6}>
        <Chart data={dummyData} title=
            "Weekly Performance" grid dataKey="Production"/>
          
        </Grid>
        </div>
      </Grid>
    </Box>
    

   </>
  );
}
